use openbrush::contracts::psp34::Id;
use openbrush::storage::Mapping;
use openbrush::traits::AccountId;

#[derive(Default, Debug)]
#[openbrush::storage_item]
pub struct Data {
    #[lazy]
    pub listing_count: u128,
    pub listings: Mapping<u128, Listing>,
    #[lazy]
    pub auction_count: u128,
    pub auctions: Mapping<u128, Auction>,
}

#[derive(Clone, Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(
    feature = "std",
    derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)
)]
pub struct Listing {
    pub id: u128,
    pub creator: AccountId,
    pub collection: AccountId,
    pub token_id: Id,
    pub price: u128,
    pub currency: AccountId,
    pub status: ListingStatus,
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
    pub currency: AccountId,
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
pub enum ListingStatus {
    OnSale,
    Sold,
    Cancelled,
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
