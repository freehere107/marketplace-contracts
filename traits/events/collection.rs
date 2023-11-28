//! SPDX-License-Identifier: MIT
use crate::impls::collection::data::NftMetadata;
use openbrush::contracts::psp34::Id;
use openbrush::traits::String;

pub trait CollectionEvents {
    fn emit_collection_name_set(&self, name: String);

    fn emit_collection_uri_set(&self, uri: String);

    fn emit_collection_additional_info_set(&self, additional_info: String);

    fn emit_nft_metadata_set(&self, id: Id, value: NftMetadata);
}
