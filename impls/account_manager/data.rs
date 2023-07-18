use ink::primitives::Hash;
use openbrush::storage::Mapping;
use openbrush::traits::{AccountId, String};

#[derive(Default, Debug)]
#[openbrush::storage_item]
pub struct Data {
    pub accounts: Mapping<AccountId, AccountId>,
    pub creators: Mapping<AccountId, AccountId>,
    #[lazy]
    pub creator_code_hash: Hash,
    #[lazy]
    pub user_code_hash: Hash,
}
