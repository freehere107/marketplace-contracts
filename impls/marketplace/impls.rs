use crate::impls::marketplace::data::{Auction, AuctionStatus, Data, Listing, ListingStatus};
use crate::traits::{auction, ArchisinalError, ProjectResult};
use ink::prelude::vec;
use openbrush::contracts::ownable;
use openbrush::contracts::ownable::Ownable;
use openbrush::contracts::psp34::{Id, PSP34Ref};
use openbrush::contracts::traits::psp22::PSP22Ref;
use openbrush::traits::{AccountId, DefaultEnv, Storage};

pub trait MarketplaceImpl: Storage<Data> + Storage<ownable::Data> + Ownable {
    fn get_listing_count(&self) -> u128 {
        self.data::<Data>().listing_count.get_or_default()
    }

    fn get_listing_id_by_index(&self, index: u128) -> Option<Listing> {
        self.data::<Data>().listings.get(&index)
    }

    fn list_nft_for_sale(
        &mut self,
        creator: AccountId,
        mut collection: AccountId,
        token_id: Id,
        price: u128,
        currency: AccountId,
    ) -> ProjectResult<u128> {
        let caller = <Self as DefaultEnv>::env().caller();
        let contract_address: AccountId = <Self as DefaultEnv>::env().account_id();

        if creator.clone() != caller {
            return Err(ArchisinalError::CallerIsNotNFTOwner);
        }

        if PSP34Ref::owner_of(&collection, token_id.clone()) != Some(creator) {
            return Err(ArchisinalError::CallerIsNotNFTOwner);
        }

        PSP34Ref::transfer(&mut collection, contract_address, token_id.clone(), vec![])?;

        let listing_id = self.data::<Data>().listing_count.get_or_default();

        let listing = Listing {
            id: listing_id,
            creator: creator.clone(),
            collection: collection.clone(),
            token_id: token_id.clone(),
            price,
            currency,
            status: ListingStatus::OnSale,
        };

        self.data::<Data>().listings.insert(&listing_id, &listing);
        self.data::<Data>().listing_count.set(
            &listing_id
                .checked_add(1)
                .ok_or(ArchisinalError::IntegerOverflow)?,
        );

        Ok(listing_id)
    }

    fn cancel_listing(&mut self, listing_id: u128) -> ProjectResult<()> {
        let caller = <Self as DefaultEnv>::env().caller();
        let mut listing = self
            .data::<Data>()
            .listings
            .get(&listing_id)
            .ok_or(ArchisinalError::ListingNotFound)?;

        if listing.creator != caller {
            return Err(ArchisinalError::CallerIsNotListingOwner);
        }

        if listing.status != ListingStatus::OnSale {
            return Err(ArchisinalError::ListingNotOnSale);
        }

        self.data::<Data>().listings.insert(
            &listing_id,
            &Listing {
                status: ListingStatus::Cancelled,
                ..listing.clone()
            },
        );

        PSP34Ref::transfer(
            &mut listing.collection,
            caller.clone(),
            listing.token_id.clone(),
            vec![],
        )?;

        Ok(())
    }

    fn buy_nft(&mut self, listing_id: u128) -> ProjectResult<()> {
        let caller = <Self as DefaultEnv>::env().caller();
        let mut listing = self
            .data::<Data>()
            .listings
            .get(&listing_id)
            .ok_or(ArchisinalError::ListingNotFound)?;

        if listing.status != ListingStatus::OnSale {
            return Err(ArchisinalError::ListingNotOnSale);
        }

        if caller == listing.creator {
            return Err(ArchisinalError::CallerIsListingOwner);
        }

        PSP34Ref::transfer(
            &mut listing.collection,
            caller.clone(),
            listing.token_id.clone(),
            vec![],
        )?;

        PSP22Ref::transfer_from(
            &mut listing.currency,
            caller.clone(),
            listing.creator.clone(),
            listing.price.clone(),
            vec![],
        )?;

        self.data::<Data>().listings.insert(
            &listing_id,
            &Listing {
                status: ListingStatus::Sold,
                ..listing
            },
        );

        Ok(())
    }
}

pub trait AuctionImpl: Storage<Data> + Storage<ownable::Data> + Ownable {
    fn get_auction_count(&self) -> u128 {
        self.data::<Data>().auction_count.get_or_default()
    }

    fn get_auction_id_by_index(&self, index: u128) -> Option<Auction> {
        self.data::<Data>().auctions.get(&index)
    }

    fn list_nft_for_auction(
        &mut self,
        creator: AccountId,
        mut collection: AccountId,
        token_id: Id,
        start_price: u128,
        currency: AccountId,
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
        let mut auction = self
            .data::<Data>()
            .auctions
            .get(&auction_id)
            .ok_or(ArchisinalError::AuctionNotFound)?;

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

        if price < auction.current_price {
            return Err(ArchisinalError::BidPriceTooLow);
        }

        let mut current_bidder = auction.current_bidder.clone();
        let mut contract_address: AccountId = <Self as DefaultEnv>::env().account_id();

        PSP22Ref::transfer_from(
            &mut auction.currency,
            caller.clone(),
            contract_address.clone(),
            price.clone(),
            vec![],
        )?;

        if let Some(bidder) = current_bidder.clone() {
            PSP22Ref::transfer(
                &mut auction.currency,
                bidder.clone(),
                auction.current_price.clone(),
                vec![],
            )?;
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

        let mut contract_address: AccountId = <Self as DefaultEnv>::env().account_id();

        if let Some(bidder) = auction.current_bidder {
            PSP34Ref::transfer(
                &mut auction.collection,
                bidder,
                auction.token_id.clone(),
                vec![],
            )?;
        }

        PSP22Ref::transfer_from(
            &mut auction.currency,
            contract_address.clone(),
            auction.creator.clone(),
            auction.current_price.clone(),
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
}
