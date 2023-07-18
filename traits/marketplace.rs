use crate::impls::marketplace::data::{Auction, Listing};
use crate::traits::ProjectResult;
use ink::primitives::AccountId;
use openbrush::contracts::psp34::Id;

#[openbrush::trait_definition]
pub trait Marketplace {
    #[ink(message)]
    fn get_listing_count(&self) -> u128;
    #[ink(message)]
    fn get_listing_by_index(&self, index: u128) -> Option<Listing>;

    #[ink(message)]
    fn get_auction_count(&self) -> u128;
    #[ink(message)]
    fn get_auction_by_index(&self, index: u128) -> Option<Auction>;

    #[ink(message)]
    fn list_nft_for_sale(
        &mut self,
        creator: AccountId,
        collection: AccountId,
        token_id: Id,
        price: u128,
        currency: AccountId,
    ) -> ProjectResult<u128>;

    #[ink(message)]
    fn list_nft_for_auction(
        &mut self,
        creator: AccountId,
        collection: AccountId,
        token_id: Id,
        start_price: u128,
        currency: AccountId,
        start_time: u64,
        end_time: u64,
    ) -> ProjectResult<u128>;

    #[ink(message)]
    fn cancel_listing(&mut self, listing_id: u128) -> ProjectResult<()>;

    #[ink(message)]
    fn cancel_auction(&mut self, auction_id: u128) -> ProjectResult<()>;

    #[ink(message)]
    fn buy_nft(&mut self, listing_id: u128) -> ProjectResult<()>;

    #[ink(message)]
    fn bid_nft(&mut self, auction_id: u128, price: u128) -> ProjectResult<()>;

    #[ink(message)]
    fn claim_nft(&mut self, auction_id: u128) -> ProjectResult<()>;
}

#[openbrush::wrapper]
pub type MarketplaceRef = dyn Marketplace;
