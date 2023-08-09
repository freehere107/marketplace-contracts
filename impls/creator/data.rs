/// SPDX-License-Identifier: MIT
use openbrush::storage::Mapping;
use openbrush::traits::AccountId;

/// The main data storage of the marketplace.
///
/// # Fields
///
/// - `collection_count`: The total number of collections.
/// - `collection_addresses`: The mapping of collection id to collection address.
#[derive(Default, Debug)]
#[openbrush::storage_item]
pub struct Data {
    #[lazy]
    pub collection_count: u32,
    pub collection_addresses: Mapping<u32, AccountId>,
}
