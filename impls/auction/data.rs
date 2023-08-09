/// SPDX-License-Identifier: MIT
use ink::primitives::AccountId;
use openbrush::contracts::psp34::Id;
use openbrush::storage::Mapping;

use crate::impls::shared::currency::Currency;

/// The main data storage of the auction.
///
/// # Fields
///
/// - `auction_count`: The total number of auctions.
/// - `auctions`: The mapping of auction id to auction.
#[derive(Default, Debug)]
#[openbrush::storage_item]
pub struct Data {
    #[lazy]
    pub auction_count: u128,
    pub auctions: Mapping<u128, Auction>,
}

/// The auction data.
///
/// # Fields
///
/// - `id`: The auction id.
/// - `creator`: The creator of the auction.
/// - `collection`: The collection address of the auction.
/// - `token_id`: The token id of the auction.
/// - `start_price`: The start price of the auction.
/// - `min_bid_step`: The minimum bid step of the auction.
/// - `currency`: The currency of the auction.
/// - `start_time`: The start time of the auction.
/// - `end_time`: The end time of the auction.
/// - `current_price`: The current price of the auction.
/// - `current_bidder`: The current bidder of the auction.
/// - `status`: The status of the auction.
#[derive(Clone, Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(
    feature = "std",
    derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)
)]
pub struct Auction {
    pub id: u128,
    pub creator: AccountId,
    pub collection: AccountId,
    pub token_id: Id,
    pub start_price: u128,
    pub min_bid_step: u128,
    pub currency: Currency,
    pub start_time: u64,
    pub end_time: u64,
    pub current_price: u128,
    pub current_bidder: Option<AccountId>,
    pub status: AuctionStatus,
}

/// The auction status.
///
/// # Variants
///
/// - `WaitingAuction`: The auction is waiting for auction.
/// - `InAuction`: The auction is in auction.
/// - `WaitingForClaim`: The auction is waiting for claim.
/// - `Ended`: The auction is ended.
/// - `Cancelled`: The auction is cancelled.
#[derive(Clone, Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(
    feature = "std",
    derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)
)]
pub enum AuctionStatus {
    WaitingAuction,
    InAuction,
    WaitingForClaim,
    Ended,
    Cancelled,
}
