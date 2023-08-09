/// SPDX-License-Identifier: MIT
use ink::primitives::{AccountId, Hash};

pub trait AccountManagerEvents {
    fn emit_account_created(&self, account_id: AccountId, contract_id: AccountId);

    fn emit_creator_created(&self, account_id: AccountId, contract_id: AccountId);

    fn emit_creator_code_hash_set(&self, code_hash: Hash);

    fn emit_user_code_hash_set(&self, code_hash: Hash);
}
