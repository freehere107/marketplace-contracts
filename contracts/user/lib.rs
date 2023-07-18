#![cfg_attr(not(feature = "std"), no_std, no_main)]

pub use crate::user::*;

#[openbrush::implementation(Ownable)]
#[openbrush::contract]
mod user {
    use archisinal_lib::impls::user;
    use archisinal_lib::impls::user::data::UserData;
    use archisinal_lib::impls::user::impls::UserImpl;
    use archisinal_lib::traits::user::*;
    use archisinal_lib::traits::ProjectResult;
    use openbrush::contracts::ownable;
    use openbrush::traits::Storage;

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
}
