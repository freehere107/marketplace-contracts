use crate::impls::creator::data::Data;
use crate::traits::{ArchisinalError, ProjectResult};
use openbrush::contracts::ownable;
use openbrush::contracts::ownable::only_owner;
use openbrush::contracts::ownable::Ownable;
use openbrush::modifiers;
use openbrush::traits::{AccountId, Storage};
use openbrush::traits::{Hash, String};

pub trait CreatorInternal {
    fn _instantiate_collection(
        &mut self,
        name: String,
        uri: String,
        royalty: u8,
        additional_info: String,
        code_hash: Hash,
    ) -> ProjectResult<AccountId>;
}

pub trait CreatorImpl: Storage<Data> + Ownable + Storage<ownable::Data> + CreatorInternal {
    #[modifiers(only_owner)]
    fn create_collection(
        &mut self,
        name: String,
        uri: String,
        royalty: u8,
        additional_info: String,
        code_hash: Hash,
    ) -> ProjectResult<AccountId> {
        let collection_address =
            self._instantiate_collection(name, uri, royalty, additional_info, code_hash)?;

        let mut count = self.get_collection_count();

        self.data::<Data>()
            .collection_addresses
            .insert(&count, &collection_address);

        count = count
            .checked_add(1)
            .ok_or(ArchisinalError::IntegerOverflow)?;
        self.data::<Data>().collection_count.set(&count);

        Ok(collection_address)
    }

    fn get_collection_count(&self) -> u32 {
        self.data::<Data>().collection_count.get_or_default()
    }

    fn get_collection_id_by_index(&self, index: u32) -> ProjectResult<AccountId> {
        let collection_count = self.get_collection_count();
        if index >= collection_count {
            return Err(ArchisinalError::CollectionNotFound);
        }

        let collection_address = self.data::<Data>().collection_addresses.get(&index);

        if collection_address.is_none() {
            return Err(ArchisinalError::CollectionNotFound);
        }

        let collection_address = collection_address.unwrap();

        Ok(collection_address)
    }
}
