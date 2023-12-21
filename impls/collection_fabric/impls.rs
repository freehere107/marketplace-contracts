use crate::impls::admin_access::AdminAccessImpl;
use crate::impls::collection_fabric::data::{CollectionInfo, Data};
use crate::traits::events::collection_fabric::CollectionFabricEvents;
use crate::traits::{ArchisinalError, ProjectResult};
use ink::primitives::{AccountId, Hash};
use openbrush::contracts::ownable::OwnableImpl;
use openbrush::traits::Storage;

pub trait CollectionFabricImpl:
    OwnableImpl + Storage<Data> + AdminAccessImpl + CollectionFabricEvents
{
    fn collection_count(&self) -> u128 {
        self.data::<Data>().collection_count.get_or_default()
    }

    fn collection(&self, index: u128) -> Option<AccountId> {
        self.data::<Data>().collections.get(index)
    }

    fn instantiate_collection(
        &mut self,
        collection_info: CollectionInfo,
        code_hash: Hash,
    ) -> ProjectResult<(u128, AccountId)> {
        if self.is_codehash_banned(code_hash) {
            return Err(ArchisinalError::CodehashIsBanned);
        }
        let collection_count = self.collection_count();
        let collection = self.create_collection(collection_info.clone(), code_hash)?;
        self.data::<Data>()
            .collections
            .insert(collection_count, &collection);
        self.data::<Data>()
            .collection_count
            .set(&(collection_count + 1));
        self.data::<Data>().is_whitelisted.insert(collection, &true);
        self.emit_collection_instantiated(collection, collection_count, collection_info);
        Ok((collection_count, collection))
    }

    fn ban_collection(&mut self, collection: AccountId) -> ProjectResult<()> {
        AdminAccessImpl::_admin_or_owner(self)?;
        self.data::<Data>()
            .banned_collections
            .insert(collection, &true);
        self.emit_collection_banned(collection);
        Ok(())
    }

    fn whitelist_collection(&mut self, collection: AccountId) -> ProjectResult<()> {
        AdminAccessImpl::_admin_or_owner(self)?;
        self.data::<Data>().is_whitelisted.insert(collection, &true);
        self.emit_collection_white_listed(collection);
        Ok(())
    }

    fn is_whitelisted(&self, collection: AccountId) -> bool {
        if self.is_whitelist_enabled() {
            self.data::<Data>()
                .is_whitelisted
                .get(collection)
                .unwrap_or(false)
        } else {
            true
        }
    }

    fn is_banned(&self, collection: AccountId) -> bool {
        self.data::<Data>()
            .banned_collections
            .get(collection)
            .unwrap_or(false)
    }

    fn is_codehash_banned(&self, code_hash: Hash) -> bool {
        self.data::<Data>()
            .banned_codehashes
            .get(code_hash)
            .unwrap_or(false)
    }

    fn ban_codehash(&mut self, code_hash: Hash) -> ProjectResult<()> {
        AdminAccessImpl::_admin_or_owner(self)?;
        self.data::<Data>()
            .banned_codehashes
            .insert(code_hash, &true);
        self.emit_codehash_banned(code_hash);
        Ok(())
    }

    fn create_collection(
        &mut self,
        collection_info: CollectionInfo,
        code_hash: Hash,
    ) -> ProjectResult<AccountId>;

    fn unban_collection(&mut self, collection: AccountId) -> ProjectResult<()> {
        AdminAccessImpl::_admin_or_owner(self)?;
        self.data::<Data>()
            .banned_collections
            .insert(collection, &false);
        self.emit_collection_unbanned(collection);
        Ok(())
    }

    fn unban_codehash(&mut self, code_hash: Hash) -> ProjectResult<()> {
        AdminAccessImpl::_admin_or_owner(self)?;
        self.data::<Data>()
            .banned_codehashes
            .insert(code_hash, &false);
        self.emit_codehash_unbanned(code_hash);
        Ok(())
    }

    fn set_whitelist_enabled(&mut self, enabled: bool) -> ProjectResult<()> {
        AdminAccessImpl::_admin_or_owner(self)?;
        self.data::<Data>().is_whitelist_enabled.set(&enabled);
        self.emit_whitelist_enabled(enabled);
        Ok(())
    }

    fn is_whitelist_enabled(&self) -> bool {
        self.data::<Data>().is_whitelist_enabled.get_or_default()
    }

    fn is_collection_deployed(&self, collection: AccountId) -> bool {
        self._is_collection_deployed(collection)
    }

    fn _is_collection_deployed(&self, collection: AccountId) -> bool {
        self.data::<Data>()
            .is_whitelisted
            .get(collection)
            .unwrap_or(false)
    }
}
