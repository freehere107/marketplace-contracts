use crate::impls::admin_access::AdminAccessImpl;
use ink::prelude::vec;
use openbrush::contracts::ownable;
use openbrush::contracts::ownable::{Ownable, OwnableRef};
use openbrush::contracts::psp34::{Id, PSP34Ref};
use openbrush::traits::{AccountId, DefaultEnv, Storage};

use crate::impls::auction::data::{Auction, AuctionStatus, Data};
use crate::impls::shared::currency::Currency;
use crate::impls::shared::utils::apply_fee;
use crate::traits::events::auction::AuctionEvents;
use crate::traits::{ArchisinalError, ProjectResult};

pub trait AuctionImpl:
    Storage<Data> + Storage<ownable::Data> + Ownable + AdminAccessImpl + AuctionEvents
{
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

        // Check if the caller is the creator
        if creator.clone() != caller {
            return Err(ArchisinalError::CallerIsNotNFTOwner);
        }

        // Check that start price is not 0
        if start_price == 0 {
            return Err(ArchisinalError::AuctionPriceIsZero);
        }

        // Check that min bid step is not 0
        if min_bid_step == 0 {
            return Err(ArchisinalError::AuctionMinBidStepIsZero);
        }

        // Check that end_time is after start_time
        if end_time < start_time {
            return Err(ArchisinalError::AuctionEndTimeIsBeforeStartTime);
        }

        // Check that start_time is after now
        if start_time < <Self as DefaultEnv>::env().block_timestamp() {
            return Err(ArchisinalError::AuctionStartTimeIsBeforeNow);
        }

        // Transfer the NFT from the creator to the contract
        PSP34Ref::transfer(&mut collection, contract_address, token_id.clone(), vec![])?;

        // Get the auction ID
        let auction_id = self.data::<Data>().auction_count.get_or_default();

        // Create the auction object
        let auction = Auction {
            id: auction_id,
            creator: creator.clone(),
            collection: collection.clone(),
            token_id: token_id.clone(),
            start_price: start_price.clone(),
            currency: currency.clone(),
            min_bid_step: min_bid_step.clone(),
            start_time: start_time.clone(),
            end_time: end_time.clone(),
            current_price: 0,
            current_bidder: None,
            status: AuctionStatus::WaitingAuction,
        };

        // Insert the auction into the mapping, with the auction ID as the key and the auction as the value
        self.data::<Data>().auctions.insert(&auction_id, &auction);
        // Increment the auction count
        self.data::<Data>().auction_count.set(
            &auction_id
                .checked_add(1)
                .ok_or(ArchisinalError::IntegerOverflow)?,
        );

        // Emit the event for the auction created
        self.emit_auction_created(
            auction_id,
            creator,
            collection,
            token_id,
            start_price,
            min_bid_step,
            currency,
            start_time,
            end_time,
        );

        // Return the auction ID
        Ok(auction_id)
    }

    fn start_auction(&mut self, auction_id: u128) -> ProjectResult<()> {
        // Get the method caller
        let caller = <Self as DefaultEnv>::env().caller();

        // Get the auction, if it exists
        // If it doesn't exist, return an error ArchisinalError::AuctionNotFound
        let auction = self
            .data::<Data>()
            .auctions
            .get(&auction_id)
            .ok_or(ArchisinalError::AuctionNotFound)?;

        // Only admin or auction owner can start the auction,
        // otherwise return an error ArchisinalError::CallerIsNotAuctionOwner
        if auction.creator != caller && !self.is_admin(caller.clone()) {
            return Err(ArchisinalError::CallerIsNotAuctionOwner);
        }

        // Only auctions in WaitingAuction state can be started,
        // otherwise return an error ArchisinalError::AuctionNotWaiting
        if auction.status != AuctionStatus::WaitingAuction {
            return Err(ArchisinalError::AuctionNotWaiting);
        }

        // Update the auction status to InAuction
        self.data::<Data>().auctions.insert(
            &auction_id,
            &Auction {
                status: AuctionStatus::InAuction,
                ..auction
            },
        );

        // Emit the event for the auction started
        self.emit_auction_started(caller, auction_id);

        Ok(())
    }

    fn cancel_auction(&mut self, auction_id: u128) -> ProjectResult<()> {
        // Get the method caller
        let caller = <Self as DefaultEnv>::env().caller();
        // Get the auction, if it exists
        let mut auction = self
            .data::<Data>()
            .auctions
            .get(&auction_id)
            .ok_or(ArchisinalError::AuctionNotFound)?;

        // Only admin or auction owner can cancel the auction,
        // otherwise return an error ArchisinalError::CallerIsNotAuctionOwner
        if auction.creator != caller && !self.is_admin(caller.clone()) {
            return Err(ArchisinalError::CallerIsNotAuctionOwner);
        }

        // Only auctions in WaitingAuction state can be cancelled,
        // otherwise return an error ArchisinalError::AuctionNotWaiting
        if auction.status != AuctionStatus::WaitingAuction {
            return Err(ArchisinalError::AuctionNotWaiting);
        }

        // Update the auction status to Cancelled
        self.data::<Data>().auctions.insert(
            &auction_id,
            &Auction {
                status: AuctionStatus::Cancelled,
                ..auction.clone()
            },
        );

        // Transfer the NFT back to the creator
        PSP34Ref::transfer(
            &mut auction.collection,
            caller.clone(),
            auction.token_id.clone(),
            vec![],
        )?;

        // Emit the event for the auction cancelled
        self.emit_auction_cancelled(caller, auction_id);

        Ok(())
    }

    fn bid_nft(&mut self, auction_id: u128, price: u128) -> ProjectResult<()> {
        // Get the method caller
        let caller = <Self as DefaultEnv>::env().caller();

        // Get the auction, if it exists
        // If it doesn't exist, return an error ArchisinalError::AuctionNotFound
        let auction = self
            .data::<Data>()
            .auctions
            .get(&auction_id)
            .ok_or(ArchisinalError::AuctionNotFound)?;

        // Auction creator can't bid on their own auction,
        // otherwise return an error ArchisinalError::CallerIsAuctionOwner
        if auction.creator.clone() == caller.clone() {
            return Err(ArchisinalError::CallerIsAuctionOwner);
        }

        // Get the current bidder of the auction
        let current_bidder = auction.current_bidder.clone();
        // Get the contract address
        let contract_address: AccountId = <Self as DefaultEnv>::env().account_id();

        // Only auctions in InAuction state can be bid on,
        // otherwise return an error ArchisinalError::AuctionNotInAuction
        if auction.status != AuctionStatus::InAuction {
            return Err(ArchisinalError::AuctionNotInAuction);
        }

        // Check that the auction start time is before now,
        // otherwise return an error ArchisinalError::AuctionNotStarted
        if auction.start_time > <Self as DefaultEnv>::env().block_timestamp() {
            return Err(ArchisinalError::AuctionNotStarted);
        }

        // Check that the auction end time is after now,
        // otherwise return an error ArchisinalError::AuctionEnded
        if auction.end_time < <Self as DefaultEnv>::env().block_timestamp() {
            return Err(ArchisinalError::AuctionEnded);
        }

        // Check that the bid price is not lower than the auction start price,
        // otherwise return an error ArchisinalError::BidPriceTooLow
        if price < auction.start_price {
            return Err(ArchisinalError::BidPriceTooLow);
        }

        // Calculate the minimum bid price by adding the current price and the min bid step
        let min_bid = auction
            .current_price
            .clone()
            .checked_add(auction.min_bid_step.clone())
            .ok_or(ArchisinalError::IntegerOverflow)?;

        // Check that the bid price is not lower than the current price + min bid step,
        if price < min_bid && auction.current_bidder.is_some() {
            return Err(ArchisinalError::BidPriceTooLow);
        }

        // Apply fee to the bid price
        let with_fee = apply_fee(&price, &auction.collection)?;

        let mut currency = auction.currency.clone();

        // Transfer the bid price from the caller to the contract
        currency.transfer_from(caller.clone(), contract_address.clone(), with_fee)?;

        // Transfer the old bid back to the old bidder
        if let Some(bidder) = current_bidder.clone() {
            let with_fee = apply_fee(&auction.current_price, &auction.collection)?;

            currency.transfer(bidder.clone(), with_fee)?;
        }

        // Update the auction current price and current bidder
        self.data::<Data>().auctions.insert(
            &auction_id,
            &Auction {
                current_price: price.clone(),
                current_bidder: Some(caller.clone()),
                ..auction
            },
        );

        // Emit the event for the bid placed
        self.emit_bid_placed(auction_id, caller, price);

        Ok(())
    }

    /// Transfer NFT to auction winner
    fn claim_nft(&mut self, auction_id: u128) -> ProjectResult<()> {
        // Get the method caller
        let caller = <Self as DefaultEnv>::env().caller();

        // Get the auction, if it exists
        if self.data::<Data>().auctions.get(&auction_id).is_none() {
            return Err(ArchisinalError::AuctionNotFound);
        }

        // Get the auction, if it exists
        let mut auction = self
            .data::<Data>()
            .auctions
            .get(&auction_id)
            .ok_or(ArchisinalError::AuctionNotFound)?;

        // Only auctions in InAuction state can be claimed,
        // otherwise return an error ArchisinalError::AuctionNotInAuction
        if auction.status != AuctionStatus::InAuction {
            return Err(ArchisinalError::AuctionNotInAuction);
        }

        // Check that the auction end time is before now,
        // otherwise return an error ArchisinalError::AuctionNotEnded
        if auction.end_time > <Self as DefaultEnv>::env().block_timestamp() {
            return Err(ArchisinalError::AuctionNotEnded);
        }

        if let Some(bidder) = auction.current_bidder {
            // If there are bids, transfer the NFT to the highest bidder
            PSP34Ref::transfer(
                &mut auction.collection,
                bidder,
                auction.token_id.clone(),
                vec![],
            )?;
        } else {
            // Otherwise, set the auction status to Ended
            self.data::<Data>().auctions.insert(
                &auction_id,
                &Auction {
                    status: AuctionStatus::Ended,
                    ..auction
                },
            );

            // Emit the event for the auction ended
            self.emit_auction_ended(caller, auction_id.clone());
            // Emit the event for the auction having no bids
            self.emit_no_bids(caller, auction_id);

            // Transfer the NFT back to the creator
            PSP34Ref::transfer(
                &mut auction.collection,
                auction.creator,
                auction.token_id.clone(),
                vec![],
            )?;

            return Ok(());
        }

        let mut currency = auction.currency.clone();

        // Transfer the bid price from the contract to the creator
        currency.transfer(auction.creator.clone(), auction.current_price.clone())?;

        let with_fee =
            apply_fee(&auction.current_price, &auction.collection)? - auction.current_price.clone();

        let collection_owner = OwnableRef::owner(&auction.collection)
            .ok_or(ArchisinalError::CollectionOwnerNotFound)?;

        // Send the royalty to the collection owner
        currency.transfer(collection_owner, with_fee)?;

        // Update the auction status to Ended
        self.data::<Data>().auctions.insert(
            &auction_id,
            &Auction {
                status: AuctionStatus::Ended,
                ..auction
            },
        );

        // Emit the event for the auction ended
        self.emit_auction_ended(caller, auction_id.clone());
        // Emit the event for the auction having a bid
        self.emit_nft_claimed(caller, auction_id);

        Ok(())
    }
}
