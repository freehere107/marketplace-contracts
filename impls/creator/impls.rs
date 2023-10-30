/// SPDX-License-Identifier: MIT
use openbrush::contracts::ownable;
use openbrush::contracts::ownable::only_owner;
use openbrush::contracts::ownable::Ownable;
use openbrush::modifiers;
use openbrush::traits::{AccountId, Storage};
use openbrush::traits::{Hash, String};

use crate::impls::creator::data::Data;
use crate::traits::events::creator::CreatorEvents;
use crate::traits::{ArchisinalError, ProjectResult};

/// The creator internal implementation.
pub trait CreatorInternal {
    /// Instantiate a collection.
    ///
    /// # Parameters
    ///
    /// - `name`: The name of the collection.
    /// - `uri`: The URI of the collection.
    /// - `royalty`: The royalty of the collection.
    /// - `additional_info`: The additional info of the collection.
    /// - `code_hash`: The code hash of the collection.
    ///
    /// # Returns
    ///
    /// The collection address.
    ///
    /// # Note
    ///
    /// This function is implemented in the contract itself.
    fn _instantiate_collection(
        &mut self,
        name: String,
        uri: String,
        royalty: u32,
        additional_info: String,
        code_hash: Hash,
    ) -> ProjectResult<AccountId>;
}

/// The creator implementation.
///
/// # Note
///
/// See `crate::traits::Creator` for more information.
pub trait CreatorImpl:
    Storage<Data> + Ownable + Storage<ownable::Data> + CreatorInternal + CreatorEvents
{
    #[modifiers(only_owner)]
    fn create_collection(
        &mut self,
        name: String,
        uri: String,
        royalty: u32,
        additional_info: String,
        code_hash: Hash,
    ) -> ProjectResult<AccountId> {
        // Instantiate the collection
        let collection_address =
            self._instantiate_collection(name, uri, royalty, additional_info, code_hash)?;

        // Get the caller address
        let caller: AccountId = self.owner().ok_or(ArchisinalError::NoOwner)?;

        // Get the collection count, used as the index of the collection
        let count = self.get_collection_count();

        // Insert the collection address into the collection addresses
        self.data::<Data>()
            .collection_addresses
            .insert(&count, &collection_address);

        // Increment the collection count
        self.data::<Data>().collection_count.set(
            &count
                .checked_add(1)
                .ok_or(ArchisinalError::IntegerOverflow)?,
        );

        // Emit the event for the collection created
        self.emit_create_collection(caller, collection_address, count);

        // Return the collection address
        Ok(collection_address)
    }

    fn get_collection_count(&self) -> u32 {
        self.data::<Data>().collection_count.get_or_default()
    }

    fn get_collection_id_by_index(&self, index: u32) -> ProjectResult<AccountId> {
        // Get the collection count
        let collection_count = self.get_collection_count();
        // Check if the index is out of bounds
        if index >= collection_count {
            return Err(ArchisinalError::CollectionNotFound);
        }

        // Get the collection address
        let collection_address = self.data::<Data>().collection_addresses.get(&index);

        // Check if the collection address is none
        if collection_address.is_none() {
            return Err(ArchisinalError::CollectionNotFound);
        }

        // Unwrap the collection address
        let collection_address = collection_address.unwrap();

        // Return the collection address
        Ok(collection_address)
    }
}
