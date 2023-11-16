use crate::impls::collection_access::data::Data;
use crate::traits::collection_fabric::CollectionFabricRef;
use crate::traits::{ArchisinalError, ProjectResult};
use openbrush::traits::{AccountId, Storage};

/// SPDX-License-Identifier: MIT
///
pub trait CollectionAccess: Storage<Data> {
    fn set_collection_fabric_address(&mut self, collection_fabric_address: AccountId) {
        self.data::<Data>()
            .collection_fabric_address
            .set(&collection_fabric_address);
    }

    fn collection_fabric_address(&self) -> AccountId {
        self.data::<Data>()
            .collection_fabric_address
            .get()
            .unwrap_or(AccountId::from([0x0; 32]))
    }

    fn check_collection(&self, collection: AccountId) -> ProjectResult<()> {
        if !CollectionFabricRef::is_whitelisted(&self.collection_fabric_address(), collection) {
            return Err(ArchisinalError::CollectionIsNotWhitelisted);
        }

        if CollectionFabricRef::is_banned(&self.collection_fabric_address(), collection) {
            return Err(ArchisinalError::CollectionIsBanned);
        }

        Ok(())
    }
}
