#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[openbrush::implementation(Ownable, Upgradeable)]
#[openbrush::contract]
mod account_manager {
    use archisinal_lib::impls::account_manager;
    use archisinal_lib::impls::account_manager::AccountManagerImpl;
    use archisinal_lib::traits::account_manager::*;
    use archisinal_lib::traits::ProjectResult;
    use ink::codegen::Env;
    use ink::ToAccountId;
    use openbrush::traits::{Storage, StorageAsRef};

    #[ink(storage)]
    #[derive(Storage, Default)]
    pub struct Contract {
        #[storage_field]
        ownable: ownable::Data,
        #[storage_field]
        account_manager: account_manager::Data,
    }

    impl Contract {
        #[ink(constructor)]
        pub fn new(user_code_hash: Hash, creator_code_hash: Hash) -> Self {
            let mut instance = Self::default();

            ownable::Internal::_init_with_owner(&mut instance, Self::env().caller());

            AccountManagerImpl::set_user_code_hash(&mut instance, user_code_hash).unwrap();
            AccountManagerImpl::set_creator_code_hash(&mut instance, creator_code_hash).unwrap();

            instance
        }
    }

    impl AccountManagerImpl for Contract {
        fn create_account(&mut self) -> ProjectResult<()> {
            let caller = self.env().caller();

            let contract = user::ContractRef::new(caller.clone())
                .code_hash(AccountManagerImpl::get_user_code_hash(self))
                .endowment(0)
                .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])
                .instantiate();

            self._add_account(caller, contract.to_account_id())?;

            Ok(())
        }

        fn create_creator_account(&mut self) -> ProjectResult<()> {
            let caller = self.env().caller();

            let contract = creator::ContractRef::new(caller.clone())
                .code_hash(AccountManagerImpl::get_creator_code_hash(self))
                .endowment(0)
                .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])
                .instantiate();

            self._add_creator(caller, contract.to_account_id())?;

            Ok(())
        }
    }

    impl AccountManager for Contract {
        #[ink(message)]
        fn create_account(&mut self) -> ProjectResult<()> {
            AccountManagerImpl::create_account(self)
        }

        #[ink(message)]
        fn create_creator_account(&mut self) -> ProjectResult<()> {
            AccountManagerImpl::create_creator_account(self)
        }

        #[ink(message)]
        fn get_account(&self, account_id: AccountId) -> Option<AccountId> {
            AccountManagerImpl::get_account(self, account_id)
        }

        #[ink(message)]
        fn get_creator_account(&self, account_id: AccountId) -> Option<AccountId> {
            AccountManagerImpl::get_creator_account(self, account_id)
        }

        #[ink(message)]
        fn get_creator_code_hash(&self) -> Hash {
            AccountManagerImpl::get_creator_code_hash(self)
        }

        #[ink(message)]
        fn get_user_code_hash(&self) -> Hash {
            AccountManagerImpl::get_user_code_hash(self)
        }

        #[ink(message)]
        fn set_creator_code_hash(&mut self, code_hash: Hash) -> ProjectResult<()> {
            AccountManagerImpl::set_creator_code_hash(self, code_hash)
        }

        #[ink(message)]
        fn set_user_code_hash(&mut self, code_hash: Hash) -> ProjectResult<()> {
            AccountManagerImpl::set_user_code_hash(self, code_hash)
        }
    }
}
