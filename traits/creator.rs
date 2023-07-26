use crate::traits::ProjectResult;
use openbrush::contracts::ownable::*;
use openbrush::traits::String;
use openbrush::traits::{AccountId, Hash};

#[openbrush::trait_definition]
pub trait Creator {
    /// Creates a new collection.
    ///
    /// # Arguments
    ///
    /// * `name` - The name of the collection.
    /// * `uri` - The uri of the collection.
    /// * `royalty` - The royalty of the collection.
    /// * `additional_info` - The additional info of the collection.
    ///
    /// # Errors
    ///
    /// * Returns `ProjectError::OwnableError` if the caller is not the owner.
    /// * Returns `ProjectError::CollectionAlreadyExists` if the collection already exists.
    #[ink(message)]
    fn create_collection(
        &mut self,
        name: String,
        uri: String,
        royalty: u32,
        additional_info: String,
        code_hash: Hash,
    ) -> ProjectResult<AccountId>;

    /// Get collection count
    ///
    /// # Arguments
    ///
    /// ()
    ///
    /// # Errors
    ///
    /// ()
    #[ink(message)]
    fn get_collection_count(&self) -> u32;

    /// Get collection id by index
    ///
    /// # Arguments
    ///
    /// * `index` - The index of the collection.
    ///
    /// # Errors
    ///
    /// * Returns `ProjectError::CollectionNotFound` if the collection not found.
    #[ink(message)]
    fn get_collection_id_by_index(&self, index: u32) -> ProjectResult<AccountId>;
}

#[openbrush::wrapper]
pub type CreatorRef = dyn Creator + Ownable;
