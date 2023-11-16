use crate::impls::collection_fabric::data::CollectionInfo;
/// SPDX-License-Identifier: MIT
use crate::traits::ProjectResult;
use ink::primitives::{AccountId, Hash};

#[openbrush::trait_definition]
pub trait CollectionFabric {
    #[ink(message)]
    fn collection_count(&self) -> u128;

    #[ink(message)]
    fn collection(&self, index: u128) -> Option<AccountId>;

    #[ink(message)]
    fn instantiate_collection(
        &mut self,
        collection_info: CollectionInfo,
        code_hash: Hash,
    ) -> ProjectResult<(u128, AccountId)>;

    #[ink(message)]
    fn ban_collection(&mut self, collection: AccountId) -> ProjectResult<()>;

    #[ink(message)]
    fn whitelist_collection(&mut self, collection: AccountId) -> ProjectResult<()>;

    #[ink(message)]
    fn is_whitelisted(&self, collection: AccountId) -> bool;

    #[ink(message)]
    fn is_banned(&self, collection: AccountId) -> bool;

    #[ink(message)]
    fn is_codehash_banned(&self, code_hash: Hash) -> bool;

    #[ink(message)]
    fn ban_codehash(&mut self, code_hash: Hash) -> ProjectResult<()>;

    #[ink(message)]
    fn unban_collection(&mut self, collection: AccountId) -> ProjectResult<()>;

    #[ink(message)]
    fn unban_codehash(&mut self, code_hash: Hash) -> ProjectResult<()>;

    #[ink(message)]
    fn set_whitelist_enabled(&mut self, enabled: bool) -> ProjectResult<()>;

    #[ink(message)]
    fn is_whitelist_enabled(&self) -> bool;

    #[ink(message)]
    fn is_collection_deployed(&self, collection: AccountId) -> bool;
}

#[openbrush::wrapper]
pub type CollectionFabricRef = dyn CollectionFabric;
