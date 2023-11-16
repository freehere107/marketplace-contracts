#![cfg_attr(not(feature = "std"), no_std, no_main)]
/// SPDX-License-Identifier: MIT
pub use crate::collection_fabric::*;

/// # Archisinal NFT contract
///
/// ## Overview
///
/// This is used to create a new NFT collection, and consists of the following components:
/// - PSP34: The PSP34 contract is used to manage the NFTs.
/// - Collection: The Collection contract is used to manage the collection info such as uris, royalties etc.
#[openbrush::implementation(Ownable, AccessControl, Upgradeable)]
#[openbrush::contract]
mod collection_fabric {
    use archisinal_lib::impls::admin_access::AdminAccessImpl;
    use archisinal_lib::impls::collection_fabric::data::CollectionInfo;
    use archisinal_lib::impls::collection_fabric::data::Data;
    use archisinal_lib::impls::collection_fabric::impls::CollectionFabricImpl;
    use archisinal_lib::impls::shared::consts::ADMIN;
    use archisinal_lib::traits::admin_access::*;
    use archisinal_lib::traits::collection_fabric::*;
    use archisinal_lib::traits::events::admin_access::AdminAccessEvents;
    use archisinal_lib::traits::events::collection_fabric::CollectionFabricEvents;
    use archisinal_lib::traits::ProjectResult;
    use ink::codegen::{EmitEvent, Env};
    use ink::env::DefaultEnvironment;
    use ink::EnvAccess;
    use ink::ToAccountId;
    use openbrush::traits::Storage;

    #[ink(event)]
    pub struct AdminAdded {
        #[ink(topic)]
        pub caller: AccountId,
        /// The account id of the new admin.
        #[ink(topic)]
        pub account_id: AccountId,
    }

    #[ink(event)]
    pub struct AdminRemoved {
        #[ink(topic)]
        pub caller: AccountId,
        /// The account id of the removed admin.
        #[ink(topic)]
        pub account_id: AccountId,
    }

    #[ink(storage)]
    #[derive(Default, Storage)]
    pub struct Contract {
        #[storage_field]
        ownable: ownable::Data,
        #[storage_field]
        access_control: access_control::Data,
        #[storage_field]
        collection_fabric: Data,
    }

    #[ink(event)]
    pub struct CollectionInstantiated {
        #[ink(topic)]
        pub collection: AccountId,
        #[ink(topic)]
        pub index: u128,
    }

    #[ink(event)]
    pub struct CollectionBanned {
        #[ink(topic)]
        pub collection: AccountId,
    }

    #[ink(event)]
    pub struct CollectionUnbanned {
        #[ink(topic)]
        pub collection: AccountId,
    }

    #[ink(event)]
    pub struct CodehashBanned {
        #[ink(topic)]
        pub code_hash: Hash,
    }

    #[ink(event)]
    pub struct CodehashUnbanned {
        #[ink(topic)]
        pub code_hash: Hash,
    }

    #[ink(event)]
    pub struct CollectionWhiteListed {
        #[ink(topic)]
        pub collection: AccountId,
    }

    #[ink(event)]
    pub struct CollectionUnWhiteListed {
        #[ink(topic)]
        pub collection: AccountId,
    }

    #[ink(event)]
    pub struct WhitelistEnabled {
        #[ink(topic)]
        pub enabled: bool,
    }

    impl Contract {
        #[ink(constructor)]
        pub fn new(owner: AccountId) -> Self {
            let mut instance = Self::default();

            ownable::Internal::_init_with_owner(&mut instance, owner);
            access_control::Internal::_init_with_admin(&mut instance, Some(owner));
            access_control::AccessControl::grant_role(&mut instance, ADMIN, Some(owner))
                .expect("Failed to grant role");

            instance
        }
    }
    impl CollectionFabricImpl for Contract {
        fn create_collection(
            &mut self,
            collection_info: CollectionInfo,
            code_hash: Hash,
        ) -> ProjectResult<AccountId> {
            let contract = arch_nft::ContractRef::new(
                collection_info.royalty,
                collection_info.name,
                collection_info.uri,
                collection_info.additional_info,
            )
            .code_hash(code_hash)
            .endowment(0)
            .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])
            .instantiate();

            Ok(contract.to_account_id())
        }
    }

    impl AdminAccessImpl for Contract {}

    impl CollectionFabric for Contract {
        #[ink(message)]
        fn collection_count(&self) -> u128 {
            CollectionFabricImpl::collection_count(self)
        }

        #[ink(message)]
        fn collection(&self, index: u128) -> Option<AccountId> {
            CollectionFabricImpl::collection(self, index)
        }

        #[ink(message)]
        fn instantiate_collection(
            &mut self,
            collection_info: CollectionInfo,
            code_hash: Hash,
        ) -> ProjectResult<(u128, AccountId)> {
            CollectionFabricImpl::instantiate_collection(self, collection_info, code_hash)
        }

        #[ink(message)]
        fn ban_collection(&mut self, collection: AccountId) -> ProjectResult<()> {
            CollectionFabricImpl::ban_collection(self, collection)
        }

        #[ink(message)]
        fn whitelist_collection(&mut self, collection: AccountId) -> ProjectResult<()> {
            CollectionFabricImpl::whitelist_collection(self, collection)
        }

        #[ink(message)]
        fn is_whitelisted(&self, collection: AccountId) -> bool {
            CollectionFabricImpl::is_whitelisted(self, collection)
        }

        #[ink(message)]
        fn is_banned(&self, collection: AccountId) -> bool {
            CollectionFabricImpl::is_banned(self, collection)
        }

        #[ink(message)]
        fn is_codehash_banned(&self, code_hash: Hash) -> bool {
            CollectionFabricImpl::is_codehash_banned(self, code_hash)
        }

        #[ink(message)]
        fn ban_codehash(&mut self, code_hash: Hash) -> ProjectResult<()> {
            CollectionFabricImpl::ban_codehash(self, code_hash)
        }

        #[ink(message)]
        fn unban_collection(&mut self, collection: AccountId) -> ProjectResult<()> {
            CollectionFabricImpl::unban_collection(self, collection)
        }

        #[ink(message)]
        fn unban_codehash(&mut self, code_hash: Hash) -> ProjectResult<()> {
            CollectionFabricImpl::unban_codehash(self, code_hash)
        }

        #[ink(message)]
        fn set_whitelist_enabled(&mut self, enabled: bool) -> ProjectResult<()> {
            CollectionFabricImpl::set_whitelist_enabled(self, enabled)
        }

        #[ink(message)]
        fn is_whitelist_enabled(&self) -> bool {
            CollectionFabricImpl::is_whitelist_enabled(self)
        }

        #[ink(message)]
        fn is_collection_deployed(&self, collection: AccountId) -> bool {
            CollectionFabricImpl::is_collection_deployed(self, collection)
        }
    }

    impl AdminAccess for Contract {
        #[ink(message)]
        fn add_admin(&mut self, account_id: AccountId) -> ProjectResult<()> {
            AdminAccessImpl::add_admin(self, account_id)
        }

        #[ink(message)]
        fn remove_admin(&mut self, account_id: AccountId) -> ProjectResult<()> {
            AdminAccessImpl::remove_admin(self, account_id)
        }

        #[ink(message)]
        fn is_admin(&self, account_id: AccountId) -> bool {
            AdminAccessImpl::is_admin(self, account_id)
        }
    }

    impl AdminAccessEvents for Contract {
        fn emit_admin_added(&self, caller: AccountId, account_id: AccountId) {
            <EnvAccess<'_, DefaultEnvironment> as EmitEvent<Self>>::emit_event(
                self.env(),
                AdminAdded { caller, account_id },
            );
        }

        fn emit_admin_removed(&self, caller: AccountId, account_id: AccountId) {
            <EnvAccess<'_, DefaultEnvironment> as EmitEvent<Self>>::emit_event(
                self.env(),
                AdminRemoved { caller, account_id },
            );
        }
    }

    impl CollectionFabricEvents for Contract {
        fn emit_collection_instantiated(&self, collection: AccountId, index: u128) {
            <EnvAccess<'_, DefaultEnvironment> as EmitEvent<Self>>::emit_event(
                self.env(),
                CollectionInstantiated { collection, index },
            );
        }

        fn emit_collection_banned(&self, collection: AccountId) {
            <EnvAccess<'_, DefaultEnvironment> as EmitEvent<Self>>::emit_event(
                self.env(),
                CollectionBanned { collection },
            );
        }

        fn emit_collection_unbanned(&self, collection: AccountId) {
            <EnvAccess<'_, DefaultEnvironment> as EmitEvent<Self>>::emit_event(
                self.env(),
                CollectionUnbanned { collection },
            );
        }

        fn emit_codehash_banned(&self, code_hash: Hash) {
            <EnvAccess<'_, DefaultEnvironment> as EmitEvent<Self>>::emit_event(
                self.env(),
                CodehashBanned { code_hash },
            );
        }

        fn emit_codehash_unbanned(&self, code_hash: Hash) {
            <EnvAccess<'_, DefaultEnvironment> as EmitEvent<Self>>::emit_event(
                self.env(),
                CodehashUnbanned { code_hash },
            );
        }

        fn emit_collection_white_listed(&self, collection: AccountId) {
            <EnvAccess<'_, DefaultEnvironment> as EmitEvent<Self>>::emit_event(
                self.env(),
                CollectionWhiteListed { collection },
            );
        }

        fn emit_collection_unwhite_listed(&self, collection: AccountId) {
            <EnvAccess<'_, DefaultEnvironment> as EmitEvent<Self>>::emit_event(
                self.env(),
                CollectionUnWhiteListed { collection },
            );
        }

        fn emit_whitelist_enabled(&self, enabled: bool) {
            <EnvAccess<'_, DefaultEnvironment> as EmitEvent<Self>>::emit_event(
                self.env(),
                WhitelistEnabled { enabled },
            );
        }
    }
}
