use crate::traits::ProjectResult;
use ink::primitives::{AccountId, Hash};

#[openbrush::trait_definition]
pub trait AccountManager {
    #[ink(message)]
    fn create_account(&mut self) -> ProjectResult<()>;

    #[ink(message)]
    fn create_creator_account(&mut self) -> ProjectResult<()>;

    #[ink(message)]
    fn get_account(&self, account_id: AccountId) -> Option<AccountId>;

    #[ink(message)]
    fn get_creator_account(&self, account_id: AccountId) -> Option<AccountId>;

    #[ink(message)]
    fn get_creator_code_hash(&self) -> Hash;

    #[ink(message)]
    fn get_user_code_hash(&self) -> Hash;

    #[ink(message)]
    fn set_creator_code_hash(&mut self, code_hash: Hash) -> ProjectResult<()>;

    #[ink(message)]
    fn set_user_code_hash(&mut self, code_hash: Hash) -> ProjectResult<()>;
}
