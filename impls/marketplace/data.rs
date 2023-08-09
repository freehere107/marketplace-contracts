/// SPDX-License-Identifier: MIT
use openbrush::contracts::psp34::Id;
use openbrush::storage::Mapping;
use openbrush::traits::AccountId;

use crate::impls::shared::currency::Currency;

/// The main data storage of the marketplace.
///
/// # Fields
///
/// - `listing_count`: The total number of listings.
/// - `listings`: The mapping of listing id to listing.
#[derive(Default, Debug)]
#[openbrush::storage_item]
pub struct Data {
    #[lazy]
    pub listing_count: u128,
    pub listings: Mapping<u128, Listing>,
}

/// The listing data structure.
///
/// # Fields
///
/// * `id` - The id of the listing.
/// * `creator` - The creator of the listing.
/// * `collection` - The collection of the listing.
/// * `token_id` - The token id of the listing.
/// * `price` - The price of the listing.
/// * `currency` - The currency of the listing.
/// * `status` - The status of the listing.
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

/// The listing status enum.
///
/// # Variants
///
/// * `OnSale` - The listing is on sale.
/// * `Sold` - The listing is sold.
/// * `Cancelled` - The listing is cancelled.
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
