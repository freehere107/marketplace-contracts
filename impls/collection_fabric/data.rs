//! SPDX-License-Identifier: MIT
use ink::primitives::Hash;
use ink::storage::Mapping;
use openbrush::traits::{AccountId, String};

#[derive(Default, Debug)]
#[openbrush::storage_item]
pub struct Data {
    pub collections: Mapping<u128, AccountId>,
    #[lazy]
    pub collection_count: u128,
    pub banned_collections: Mapping<AccountId, bool>,
    pub is_whitelisted: Mapping<AccountId, bool>,
    pub banned_codehashes: Mapping<Hash, bool>,
    #[lazy]
    pub is_whitelist_enabled: bool,
}

#[derive(Clone, Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(
    feature = "std",
    derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)
)]
pub struct CollectionInfo {
    /// The name of the collection.
    pub name: Option<String>,
    /// The uri of the collection.
    pub uri: Option<String>,
    /// The additional info of the collection.
    pub additional_info: Option<String>,
    /// The royalty of the collection.
    pub royalty: u32,
}
