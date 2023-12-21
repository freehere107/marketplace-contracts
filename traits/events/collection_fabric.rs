use crate::impls::collection_fabric::data::CollectionInfo;
use ink::primitives::{AccountId, Hash};

pub trait CollectionFabricEvents {
    fn emit_collection_instantiated(
        &self,
        collection: AccountId,
        index: u128,
        collection_info: CollectionInfo,
    );
    fn emit_collection_banned(&self, collection: AccountId);
    fn emit_collection_unbanned(&self, collection: AccountId);
    fn emit_codehash_banned(&self, code_hash: Hash);
    fn emit_codehash_unbanned(&self, code_hash: Hash);
    fn emit_collection_white_listed(&self, collection: AccountId);
    fn emit_collection_unwhite_listed(&self, collection: AccountId);
    fn emit_whitelist_enabled(&self, enabled: bool);
}
