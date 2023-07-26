use crate::impls::auction::data::{Auction, AuctionStatus, Data};
use crate::impls::shared::currency::Currency;
use crate::impls::shared::utils::apply_fee;
use crate::traits::{ArchisinalError, ProjectResult};
use ink::prelude::vec;
use openbrush::contracts::ownable;
use openbrush::contracts::ownable::{Ownable, OwnableRef};
use openbrush::contracts::psp34::{Id, PSP34Ref};
use openbrush::traits::{AccountId, DefaultEnv, Storage};

pub trait AuctionImpl: Storage<Data> + Storage<ownable::Data> + Ownable {
    fn get_auction_count(&self) -> u128 {
        self.data::<Data>().auction_count.get_or_default()
    }

    fn get_auction_by_index(&self, index: u128) -> Option<Auction> {
        self.data::<Data>().auctions.get(&index)
    }

    fn list_nft_for_auction(
        &mut self,
        creator: AccountId,
        mut collection: AccountId,
        token_id: Id,
        start_price: u128,
        min_bid_step: u128,
        currency: Currency,
        start_time: u64,
        end_time: u64,
    ) -> ProjectResult<u128> {
        let caller = <Self as DefaultEnv>::env().caller();
        let contract_address: AccountId = <Self as DefaultEnv>::env().account_id();

        if creator.clone() != caller {
            return Err(ArchisinalError::CallerIsNotNFTOwner);
        }

        PSP34Ref::transfer(&mut collection, contract_address, token_id.clone(), vec![])?;

        let auction_id = self.data::<Data>().auction_count.get_or_default();

        let auction = Auction {
            id: auction_id,
            creator: creator.clone(),
            collection: collection.clone(),
            token_id: token_id.clone(),
            start_price,
            currency,
            min_bid_step,
            start_time,
            end_time,
            current_price: 0,
            current_bidder: None,
            status: AuctionStatus::WaitingAuction,
        };

        self.data::<Data>().auctions.insert(&auction_id, &auction);
        self.data::<Data>().auction_count.set(
            &auction_id
                .checked_add(1)
                .ok_or(ArchisinalError::CallerIsNotNFTOwner)?,
        );

        Ok(auction_id)
    }

    fn start_auction(&mut self, auction_id: u128) -> ProjectResult<()> {
        let auction = self
            .data::<Data>()
            .auctions
            .get(&auction_id)
            .ok_or(ArchisinalError::AuctionNotFound)?;

        if auction.start_time < <Self as DefaultEnv>::env().block_timestamp() {
            return Err(ArchisinalError::CallerIsNotAuctionOwner);
        }

        if auction.status != AuctionStatus::WaitingAuction {
            return Err(ArchisinalError::AuctionNotWaiting);
        }

        if auction.start_price == 0 {
            return Err(ArchisinalError::AuctionPriceIsZero);
        }

        if auction.end_time < auction.start_time {
            return Err(ArchisinalError::AuctionEndTimeIsBeforeStartTime);
        }

        self.data::<Data>().auctions.insert(
            &auction_id,
            &Auction {
                status: AuctionStatus::InAuction,
                ..auction
            },
        );

        Ok(())
    }

    fn cancel_auction(&mut self, auction_id: u128) -> ProjectResult<()> {
        let caller = <Self as DefaultEnv>::env().caller();
        let mut auction = self
            .data::<Data>()
            .auctions
            .get(&auction_id)
            .ok_or(ArchisinalError::AuctionNotFound)?;

        if auction.creator != caller {
            return Err(ArchisinalError::CallerIsNotAuctionOwner);
        }

        if auction.status != AuctionStatus::WaitingAuction {
            return Err(ArchisinalError::AuctionNotWaiting);
        }

        self.data::<Data>().auctions.insert(
            &auction_id,
            &Auction {
                status: AuctionStatus::Cancelled,
                ..auction.clone()
            },
        );

        PSP34Ref::transfer(
            &mut auction.collection,
            caller.clone(),
            auction.token_id.clone(),
            vec![],
        )?;

        self.data::<Data>().auctions.insert(
            &auction_id,
            &Auction {
                status: AuctionStatus::Ended,
                ..auction
            },
        );

        Ok(())
    }

    fn bid_nft(&mut self, auction_id: u128, price: u128) -> ProjectResult<()> {
        let caller = <Self as DefaultEnv>::env().caller();

        let auction = self
            .data::<Data>()
            .auctions
            .get(&auction_id)
            .ok_or(ArchisinalError::AuctionNotFound)?;

        let current_bidder = auction.current_bidder.clone();
        let contract_address: AccountId = <Self as DefaultEnv>::env().account_id();

        if auction.status != AuctionStatus::InAuction {
            return Err(ArchisinalError::AuctionNotInAuction);
        }

        if auction.start_time > <Self as DefaultEnv>::env().block_timestamp() {
            return Err(ArchisinalError::AuctionNotStarted);
        }

        if auction.end_time < <Self as DefaultEnv>::env().block_timestamp() {
            return Err(ArchisinalError::AuctionEnded);
        }

        if price < auction.start_price {
            return Err(ArchisinalError::BidPriceTooLow);
        }

        let min_bid = auction.current_price.clone() + auction.min_bid_step.clone();
        if price <= min_bid {
            return Err(ArchisinalError::BidPriceTooLow);
        }

        let with_fee = apply_fee(&price, &auction.collection)?;

        let mut currency = auction.currency.clone();

        // PSP22Ref::transfer_from(
        //     &mut auction.currency,
        //     caller.clone(),
        //     contract_address.clone(),
        //     with_fee,
        //     vec![],
        // )?;
        currency.transfer_from(caller.clone(), contract_address.clone(), with_fee)?;

        if let Some(bidder) = current_bidder.clone() {
            let with_fee = apply_fee(&auction.current_price, &auction.collection)?;

            // PSP22Ref::transfer(&mut auction.currency, bidder.clone(), with_fee, vec![])?;
            currency.transfer(bidder.clone(), with_fee)?;
        }

        self.data::<Data>().auctions.insert(
            &auction_id,
            &Auction {
                current_price: price.clone(),
                current_bidder: Some(caller.clone()),
                ..auction
            },
        );

        Ok(())
    }

    /// Transfer NFT to auction winner
    fn claim_nft(&mut self, auction_id: u128) -> ProjectResult<()> {
        if self.data::<Data>().auctions.get(&auction_id).is_none() {
            return Err(ArchisinalError::AuctionNotFound);
        }

        let mut auction = self
            .data::<Data>()
            .auctions
            .get(&auction_id)
            .ok_or(ArchisinalError::AuctionNotFound)?;

        if auction.status != AuctionStatus::InAuction {
            return Err(ArchisinalError::AuctionNotInAuction);
        }

        if auction.end_time > <Self as DefaultEnv>::env().block_timestamp() {
            return Err(ArchisinalError::AuctionNotEnded);
        }

        if let Some(bidder) = auction.current_bidder {
            PSP34Ref::transfer(
                &mut auction.collection,
                bidder,
                auction.token_id.clone(),
                vec![],
            )?;
        } else {
            self.data::<Data>().auctions.insert(
                &auction_id,
                &Auction {
                    status: AuctionStatus::Ended,
                    ..auction
                },
            );

            return Err(ArchisinalError::AuctionHasNoBids);
        }

        let mut currency = auction.currency.clone();

        // PSP22Ref::transfer(
        //     &mut auction.currency,
        //     auction.creator.clone(),
        //     auction.current_price.clone(),
        //     vec![],
        // )?;
        currency.transfer(auction.creator.clone(), auction.current_price.clone())?;

        let with_fee =
            apply_fee(&auction.current_price, &auction.collection)? - auction.current_price.clone();

        let collection_owner = OwnableRef::owner(&auction.collection)
            .ok_or(ArchisinalError::CollectionOwnerNotFound)?;

        // PSP22Ref::transfer(&mut auction.currency, collection_owner, with_fee, vec![])?;
        currency.transfer(collection_owner, with_fee)?;

        self.data::<Data>().auctions.insert(
            &auction_id,
            &Auction {
                status: AuctionStatus::Ended,
                ..auction
            },
        );

        Ok(())
    }
}
