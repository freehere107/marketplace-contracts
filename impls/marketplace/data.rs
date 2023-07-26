use crate::impls::shared::currency::Currency;
use openbrush::contracts::psp34::Id;
use openbrush::storage::Mapping;
use openbrush::traits::AccountId;

#[derive(Default, Debug)]
#[openbrush::storage_item]
pub struct Data {
    #[lazy]
    pub listing_count: u128,
    pub listings: Mapping<u128, Listing>,
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
    pub currency: Currency,
    pub status: ListingStatus,
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
