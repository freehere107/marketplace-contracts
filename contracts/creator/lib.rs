#![cfg_attr(not(feature = "std"), no_std, no_main)]

pub use crate::creator::*;

#[openbrush::implementation(Ownable, Upgradeable)]
#[openbrush::contract]
mod creator {
    use archisinal_lib::impls::creator::impls::{CreatorImpl, CreatorInternal};
    use archisinal_lib::impls::user::data::UserData;
    use archisinal_lib::impls::user::impls::UserImpl;
    use archisinal_lib::impls::{creator, user};
    use archisinal_lib::traits::creator::*;
    use archisinal_lib::traits::user::*;
    use archisinal_lib::traits::ProjectResult;
    use ink::ToAccountId;
    use openbrush::contracts::ownable;
    use openbrush::traits::Storage;
    use openbrush::traits::String;

    /// Defines the storage of your contract.
    /// Add new fields to the below struct in order
    /// to add new static storage fields to your contract.
    #[ink(storage)]
    #[derive(Default, Storage)]
    pub struct Contract {
        #[storage_field]
        pub ownable: ownable::Data,
        #[storage_field]
        pub user_data: user::data::Data,
        #[storage_field]
        pub creator: creator::data::Data,
    }

    impl Contract {
        /// Constructor that initializes the `bool` value to the given `init_value`.
        #[ink(constructor)]
        pub fn new(owner: AccountId) -> Self {
            let mut instance = Self::default();

            ownable::Internal::_init_with_owner(&mut instance, owner);

            instance
        }

        #[ink(constructor, default)]
        pub fn default_constructor() -> Self {
            let mut instance = Self::default();

            ownable::Internal::_init_with_owner(&mut instance, Self::env().caller());

            instance
        }

        #[ink(constructor)]
        pub fn new_with_data(owner: AccountId, data: UserData) -> Self {
            let mut instance = Self::default();

            ownable::Internal::_init_with_owner(&mut instance, owner);

            UserImpl::set_user_data(&mut instance, data).unwrap();

            instance
        }
    }

    impl UserImpl for Contract {}

    impl User for Contract {
        #[ink(message)]
        fn get_user_data(&self) -> UserData {
            UserImpl::get_user_data(self)
        }

        #[ink(message)]
        fn set_user_data(&mut self, user_data: UserData) -> ProjectResult<()> {
            UserImpl::set_user_data(self, user_data)
        }
    }

    impl CreatorInternal for Contract {
        fn _instantiate_collection(
            &mut self,
            name: String,
            uri: String,
            royalty: u32,
            additional_info: String,
            code_hash: Hash,
        ) -> ProjectResult<openbrush::traits::AccountId> {
            let contract =
                arch_nft::ContractRef::new(royalty, Some(name), Some(uri), Some(additional_info))
                    .code_hash(code_hash)
                    .endowment(0)
                    .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])
                    .instantiate();

            Ok(contract.to_account_id())
        }
    }

    impl CreatorImpl for Contract {}

    impl Creator for Contract {
        #[ink(message)]
        fn create_collection(
            &mut self,
            name: String,
            uri: String,
            royalty: u32,
            additional_info: String,
            code_hash: Hash,
        ) -> ProjectResult<openbrush::traits::AccountId> {
            CreatorImpl::create_collection(self, name, uri, royalty, additional_info, code_hash)
        }

        #[ink(message)]
        fn get_collection_count(&self) -> u32 {
            CreatorImpl::get_collection_count(self)
        }

        #[ink(message)]
        fn get_collection_id_by_index(
            &self,
            index: u32,
        ) -> ProjectResult<openbrush::traits::AccountId> {
            CreatorImpl::get_collection_id_by_index(self, index)
        }
    }
}
