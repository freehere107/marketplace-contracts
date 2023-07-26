use crate::impls::marketplace::data::Listing;
use crate::impls::shared::currency::Currency;
use crate::traits::ProjectResult;
use ink::prelude::vec::Vec;
use ink::primitives::AccountId;
use openbrush::contracts::psp34::Id;

#[openbrush::trait_definition]
pub trait Marketplace {
    #[ink(message)]
    fn get_listing_count(&self) -> u128;
    #[ink(message)]
    fn get_listing_by_index(&self, index: u128) -> Option<Listing>;

    #[ink(message)]
    fn list_nft_for_sale(
        &mut self,
        creator: AccountId,
        collection: AccountId,
        token_id: Id,
        price: u128,
        currency: Currency,
    ) -> ProjectResult<u128>;

    #[ink(message)]
    fn cancel_listing(&mut self, listing_id: u128) -> ProjectResult<()>;

    #[ink(message, payable)]
    fn buy_nft(&mut self, listing_id: u128) -> ProjectResult<()>;

    #[ink(message, payable)]
    fn buy_batch(&mut self, ids: Vec<u128>) -> ProjectResult<()>;
}

#[openbrush::wrapper]
pub type MarketplaceRef = dyn Marketplace;
