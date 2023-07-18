use crate::traits::ProjectResult;
use openbrush::contracts::ownable::*;
use openbrush::contracts::psp34::extensions::{burnable::*, metadata::*, mintable::*};
use openbrush::traits::String;

/// ArchNFT trait
///
/// This trait defines the ArchNFT interface.
#[openbrush::trait_definition]
pub trait Collection {
    /// Returns the name of the collection and None if not any.
    #[ink(message)]
    fn collection_name(&self) -> Option<String>;

    /// Returns the symbol of the collection and None if not any.
    #[ink(message)]
    fn collection_uri(&self) -> Option<String>;

    /// Returns the symbol of the collection and None if not any.
    #[ink(message)]
    fn collection_royalty(&self) -> u8;

    /// Returns the symbol of the collection and None if not any.
    #[ink(message)]
    fn collection_additional_info(&self) -> Option<String>;

    /// Set the name of the collection.
    ///
    /// # Arguments
    ///
    /// * `name` - The name of the collection.
    ///
    /// # Errors
    ///
    /// Returns `ProjectError::OwnableError` if the caller is not the owner.
    #[ink(message)]
    fn set_collection_name(&mut self, name: String) -> ProjectResult<()>;

    /// Set the uri of the collection.
    ///
    /// # Arguments
    ///
    /// * `uri` - The uri of the collection.
    ///
    /// # Errors
    ///
    /// Returns `ProjectError::OwnableError` if the caller is not the owner.
    #[ink(message)]
    fn set_collection_uri(&mut self, uri: String) -> ProjectResult<()>;

    /// Set the royalty of the collection.
    ///
    /// # Arguments
    ///
    /// * `royalty` - The royalty of the collection.
    ///
    /// # Errors
    ///
    /// Returns `ProjectError::OwnableError` if the caller is not the owner.
    #[ink(message)]
    fn set_collection_royalty(&mut self, royalty: u8) -> ProjectResult<()>;

    /// Set the additional info of the collection.
    ///
    /// # Arguments
    ///
    /// * `additional_info` - The additional info of the collection.
    ///
    /// # Errors
    ///
    /// Returns `ProjectError::OwnableError` if the caller is not the owner.
    #[ink(message)]
    fn set_collection_additional_info(&mut self, additional_info: String) -> ProjectResult<()>;

    /// Set attribute to the token
    ///
    /// # Arguments
    ///
    /// * `id` - The id of the token.
    /// * `key` - The key of the attribute.
    /// * `value` - The value of the attribute.
    ///
    /// # Errors
    ///
    /// Returns `ProjectError::CallerIsNotNFTOwner` if the caller is not the owner of the token.
    #[ink(message)]
    fn set_attribute(&mut self, id: Id, key: String, value: String) -> ProjectResult<()>;
}

/// ArchNFTRef type
#[openbrush::wrapper]
pub type CollectionRef = dyn Collection + PSP34Metadata + PSP34Mintable + PSP34Burnable + Ownable;
