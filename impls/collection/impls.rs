/// SPDX-License-Identifier: MIT
use openbrush::contracts::ownable;
use openbrush::contracts::ownable::only_owner;
use openbrush::contracts::ownable::Ownable;
use openbrush::contracts::psp34::{Id, PSP34};
use openbrush::traits::{DefaultEnv, Storage, String};

use crate::impls::collection::data::{Data, NftMetadata};
use crate::traits::events::collection::CollectionEvents;
use crate::traits::{ArchisinalError, ProjectResult};

/// The collection implementation.
///
/// # Note
///
/// See `crate::traits::Collection` for more information.
pub trait CollectionImpl:
    Storage<Data> + Storage<ownable::Data> + Ownable + PSP34 + DefaultEnv + CollectionEvents
{
    fn collection_name(&self) -> Option<String> {
        self.data::<Data>().name.get_or_default()
    }

    fn collection_uri(&self) -> Option<String> {
        self.data::<Data>().uri.get_or_default()
    }

    fn collection_royalty(&self) -> u32 {
        self.data::<Data>().royalty.get_or_default()
    }

    fn collection_additional_info(&self) -> Option<String> {
        self.data::<Data>().additional_info.get_or_default()
    }

    #[openbrush::modifiers(only_owner)]
    fn set_collection_name(&mut self, name: String) -> ProjectResult<()> {
        // Set the collection name
        self.data::<Data>().name.set(&Some(name.clone()));

        // Emit the event for the collection name set
        self.emit_collection_name_set(name);

        Ok(())
    }

    #[openbrush::modifiers(only_owner)]
    fn set_collection_uri(&mut self, uri: String) -> ProjectResult<()> {
        // Set the collection uri
        self.data::<Data>().uri.set(&Some(uri.clone()));

        // Emit the event for the collection uri set
        self.emit_collection_uri_set(uri);

        Ok(())
    }

    #[openbrush::modifiers(only_owner)]
    fn set_collection_royalty(&mut self, royalty: u32) -> ProjectResult<()> {
        // Set the collection royalty
        self.data::<Data>().royalty.set(&royalty);
        Ok(())
    }

    #[openbrush::modifiers(only_owner)]
    fn set_collection_additional_info(&mut self, additional_info: String) -> ProjectResult<()> {
        // Set the collection additional info
        self.data::<Data>()
            .additional_info
            .set(&Some(additional_info.clone()));

        // Emit the event for the collection additional info set
        self.emit_collection_additional_info_set(additional_info);

        Ok(())
    }

    fn update_nft_metadata(&mut self, id: Id, metadata: NftMetadata) -> ProjectResult<()> {
        // Check if the caller is the owner of the token
        if self.owner_of(id.clone()) != Option::from(Self::env().caller()) {
            return Err(ArchisinalError::CallerIsNotNFTOwner);
        }

        self.data::<Data>()
            .nft_metadata
            .insert(&id, &metadata.clone());

        self.emit_nft_metadata_set(id, metadata);

        Ok(())
    }

    fn get_nft_metadata(&self, id: Id) -> Option<NftMetadata> {
        self.data::<Data>().nft_metadata.get(&id)
    }
}
