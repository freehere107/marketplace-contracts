use crate::impls::account_manager::Data;
use crate::traits::ProjectResult;
use ink::primitives::{AccountId, Hash};
use openbrush::traits::{Storage, StorageAsRef};

pub trait AccountManagerImpl: Storage<Data> {
    fn create_account(&mut self) -> ProjectResult<()>;

    fn create_creator_account(&mut self) -> ProjectResult<()>;

    fn get_account(&self, account_id: AccountId) -> Option<AccountId> {
        self.data().accounts.get(&account_id)
    }

    fn get_creator_account(&self, account_id: AccountId) -> Option<AccountId> {
        self.data().creators.get(&account_id)
    }

    fn get_creator_code_hash(&self) -> Hash {
        self.data().creator_code_hash.get_or_default()
    }

    fn get_user_code_hash(&self) -> Hash {
        self.data().user_code_hash.get_or_default()
    }

    fn set_creator_code_hash(&mut self, code_hash: Hash) -> ProjectResult<()> {
        self.data().creator_code_hash.set(&code_hash);

        Ok(())
    }

    fn set_user_code_hash(&mut self, code_hash: Hash) -> ProjectResult<()> {
        self.data().user_code_hash.set(&code_hash);

        Ok(())
    }

    fn _add_account(&mut self, account_id: AccountId, contract: AccountId) -> ProjectResult<()> {
        self.data().accounts.insert(&account_id, &contract);

        Ok(())
    }

    fn _add_creator(&mut self, account_id: AccountId, contract: AccountId) -> ProjectResult<()> {
        self.data().creators.insert(&account_id, &contract);

        Ok(())
    }
}
