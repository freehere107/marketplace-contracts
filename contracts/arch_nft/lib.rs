#![cfg_attr(not(feature = "std"), no_std, no_main)]

pub use crate::arch_nft::*;

#[openbrush::implementation(Ownable, PSP34, PSP34Mintable, PSP34Burnable, PSP34Metadata)]
#[openbrush::contract]
mod arch_nft {
    use archisinal_lib::impls::collection::data::Data;
    use archisinal_lib::impls::collection::impls::CollectionImpl;
    use archisinal_lib::traits::collection::*;
    use archisinal_lib::traits::ProjectResult;
    // use openbrush::contracts::psp34::extensions::metadata;
    use openbrush::contracts::psp34::Id;
    use openbrush::modifiers;
    use openbrush::traits::{Storage, String};

    #[ink(event)]
    pub struct Transfer {
        #[ink(topic)]
        from: Option<AccountId>,
        #[ink(topic)]
        to: Option<AccountId>,
        #[ink(topic)]
        token_id: Id,
    }

    #[ink(storage)]
    #[derive(Default, Storage)]
    pub struct Contract {
        #[storage_field]
        psp34: psp34::Data,
        #[storage_field]
        ownable: ownable::Data,
        #[storage_field]
        psp34_metadata: metadata::Data,
        #[storage_field]
        arch_nft: Data,
    }

    impl Contract {
        #[ink(constructor)]
        pub fn new(
            royalty: u8,
            token_name: Option<String>,
            token_uri: Option<String>,
            additional_info: Option<String>,
        ) -> Self {
            let mut instance = Self::default();

            ownable::Internal::_init_with_owner(&mut instance, Self::env().caller());

            CollectionImpl::set_collection_royalty(&mut instance, royalty).unwrap();

            if let Some(name) = token_name {
                CollectionImpl::set_collection_name(&mut instance, name).unwrap();
            }

            if let Some(uri) = token_uri {
                CollectionImpl::set_collection_uri(&mut instance, uri).unwrap();
            }

            if let Some(info) = additional_info {
                CollectionImpl::set_collection_additional_info(&mut instance, info).unwrap();
            }

            instance
        }

        #[ink(constructor, default)]
        pub fn new_default(
            owner: AccountId,
            royalty: u8,
            token_name: Option<String>,
            token_uri: Option<String>,
            additional_info: Option<String>,
        ) -> Self {
            let mut instance = Self::default();

            ownable::Internal::_init_with_owner(&mut instance, owner);

            CollectionImpl::set_collection_royalty(&mut instance, royalty).unwrap();

            if let Some(name) = token_name {
                CollectionImpl::set_collection_name(&mut instance, name).unwrap();
            }

            if let Some(uri) = token_uri {
                CollectionImpl::set_collection_uri(&mut instance, uri).unwrap();
            }

            if let Some(info) = additional_info {
                CollectionImpl::set_collection_additional_info(&mut instance, info).unwrap();
            }

            instance
        }

        #[ink(message)]
        pub fn account_id(&self) -> AccountId {
            Self::env().account_id()
        }
    }

    #[default_impl(PSP34Mintable)]
    #[modifiers(ownable::only_owner)]
    fn mint(&mut self) {}

    #[default_impl(PSP34Burnable)]
    #[modifiers(ownable::only_owner)]
    fn burn(&mut self) {}

    #[overrider(PSP34Internal)]
    fn _emit_transfer_event(&self, from: Option<AccountId>, to: Option<AccountId>, id: Id) {
        self.env().emit_event(Transfer { from, to, id });
    }

    impl CollectionImpl for Contract {}

    impl Collection for Contract {
        #[ink(message)]
        fn collection_name(&self) -> Option<String> {
            CollectionImpl::collection_name(self)
        }

        #[ink(message)]
        fn collection_uri(&self) -> Option<String> {
            CollectionImpl::collection_uri(self)
        }

        #[ink(message)]
        fn collection_royalty(&self) -> u8 {
            CollectionImpl::collection_royalty(self)
        }

        #[ink(message)]
        fn collection_additional_info(&self) -> Option<String> {
            CollectionImpl::collection_additional_info(self)
        }

        #[ink(message)]
        fn set_collection_name(&mut self, name: String) -> ProjectResult<()> {
            CollectionImpl::set_collection_name(self, name)
        }

        #[ink(message)]
        fn set_collection_uri(&mut self, uri: String) -> ProjectResult<()> {
            CollectionImpl::set_collection_uri(self, uri)
        }

        #[ink(message)]
        fn set_collection_royalty(&mut self, royalty: u8) -> ProjectResult<()> {
            CollectionImpl::set_collection_royalty(self, royalty)
        }

        #[ink(message)]
        fn set_collection_additional_info(&mut self, additional_info: String) -> ProjectResult<()> {
            CollectionImpl::set_collection_additional_info(self, additional_info)
        }

        #[ink(message)]
        fn set_attribute(&mut self, id: Id, key: String, value: String) -> ProjectResult<()> {
            CollectionImpl::set_attribute(self, id, key, value)
        }
    }
}
