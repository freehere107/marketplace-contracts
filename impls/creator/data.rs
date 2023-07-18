use openbrush::storage::Mapping;
use openbrush::traits::AccountId;

#[derive(Default, Debug)]
#[openbrush::storage_item]
pub struct Data {
    #[lazy]
    pub collection_count: u32,
    pub collection_addresses: Mapping<u32, AccountId>,
}
