use crate::impls::auction::data;
use crate::impls::shared::currency::Currency;
use crate::traits::ProjectResult;
use ink::primitives::AccountId;
use openbrush::contracts::psp34::Id;

#[openbrush::trait_definition]
pub trait Auction {
    #[ink(message)]
    fn get_auction_count(&self) -> u128;
    #[ink(message)]
    fn get_auction_by_index(&self, index: u128) -> Option<data::Auction>;

    #[ink(message)]
    fn list_nft_for_auction(
        &mut self,
        creator: AccountId,
        collection: AccountId,
        token_id: Id,
        start_price: u128,
        min_bid_step: u128,
        currency: Currency,
        start_time: u64,
        end_time: u64,
    ) -> ProjectResult<u128>;

    #[ink(message)]
    fn cancel_auction(&mut self, auction_id: u128) -> ProjectResult<()>;

    #[ink(message)]
    fn bid_nft(&mut self, auction_id: u128, price: u128) -> ProjectResult<()>;

    #[ink(message)]
    fn claim_nft(&mut self, auction_id: u128) -> ProjectResult<()>;
}

#[openbrush::wrapper]
pub type AuctionRef = dyn Auction;

