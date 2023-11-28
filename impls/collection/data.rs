//! SPDX-License-Identifier: MIT
use ink::prelude::vec::Vec;
use openbrush::contracts::psp34::Id;
use openbrush::storage::Mapping;
use openbrush::traits::String;

/// The collection data.
#[derive(Default, Debug)]
#[openbrush::storage_item]
pub struct Data {
    /// The name of the collection.
    #[lazy]
    pub name: Option<String>,
    /// The uri of the collection.
    #[lazy]
    pub uri: Option<String>,
    /// The additional info of the collection.
    #[lazy]
    pub additional_info: Option<String>,
    /// The royalty of the collection.
    #[lazy]
    pub royalty: u32,
    /// The attributes of the nfts.
    pub nft_metadata: Mapping<Id, NftMetadata>,
}

#[derive(Clone, Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(
    feature = "std",
    derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)
)]
pub struct NftMetadata {
    pub name: String,
    pub description: String,
    pub image: String,
    pub external_url: String,
    pub categories: Vec<String>,
}
