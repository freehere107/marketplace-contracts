use ink::primitives::Hash;
use openbrush::storage::Mapping;
use openbrush::traits::AccountId;

/// The main data storage of the account manager.
///
/// # Fields
///
/// - `accounts`: The mapping of account id to account id.
/// - `creators`: The mapping of creator id to creator id.
/// - `creator_code_hash`: The code hash of the creator contract.
/// - `user_code_hash`: The code hash of the user contract.
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
