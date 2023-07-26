use crate::impls::shared::currency::Currency;
use ink::primitives::AccountId;
use openbrush::contracts::psp34::Id;
use openbrush::storage::Mapping;

#[derive(Default, Debug)]
#[openbrush::storage_item]
pub struct Data {
    #[lazy]
    pub auction_count: u128,
    pub auctions: Mapping<u128, Auction>,
}

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
