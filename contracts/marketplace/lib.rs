#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[openbrush::implementation(Ownable)]
#[openbrush::contract]
mod marketplace {
    use archisinal_lib::impls::auction::auction::*;
    use archisinal_lib::impls::marketplace::data::Listing;
    use archisinal_lib::impls::marketplace::marketplace::*;
    use archisinal_lib::impls::shared::currency::Currency;
    use archisinal_lib::impls::{auction, marketplace};
    use archisinal_lib::traits::auction::*;
    use archisinal_lib::traits::marketplace::*;
    use archisinal_lib::traits::ProjectResult;
    use ink::prelude::vec::Vec;
    use openbrush::contracts::psp34::Id;
    use openbrush::traits::Storage;

    #[ink(storage)]
    #[derive(Default, Storage)]
    pub struct Contract {
        #[storage_field]
        ownable: ownable::Data,
        #[storage_field]
        marketplace: marketplace::data::Data,
        #[storage_field]
        auction: auction::data::Data,
    }

    impl Contract {
        #[ink(constructor)]
        pub fn new(owner: AccountId) -> Self {
            let mut instance = Self::default();

            ownable::Internal::_init_with_owner(&mut instance, owner);

            instance
        }

    impl MarketplaceImpl for Contract {}

    impl Marketplace for Contract {
        #[ink(message)]
        fn get_listing_count(&self) -> u128 {
            MarketplaceImpl::get_listing_count(self)
        }

        #[ink(message)]
        fn get_listing_by_index(&self, index: u128) -> Option<Listing> {
            MarketplaceImpl::get_listing_id_by_index(self, index)
        }

        #[ink(message)]
        fn list_nft_for_sale(
            &mut self,
            creator: AccountId,
            collection: AccountId,
            token_id: Id,
            price: u128,
            currency: Currency,
        ) -> ProjectResult<u128> {
            MarketplaceImpl::list_nft_for_sale(self, creator, collection, token_id, price, currency)
        }

        #[ink(message)]
        fn cancel_listing(&mut self, listing_id: u128) -> ProjectResult<()> {
            MarketplaceImpl::cancel_listing(self, listing_id)
        }

        #[ink(message, payable)]
        fn buy_nft(&mut self, listing_id: u128) -> ProjectResult<()> {
            MarketplaceImpl::buy_nft(self, listing_id)
        }

        #[ink(message, payable)]
        fn buy_batch(&mut self, ids: Vec<u128>) -> ProjectResult<()> {
            MarketplaceImpl::buy_batch(self, ids)
        }
    }

    impl AuctionImpl for Contract {}

    impl Auction for Contract {
        #[ink(message)]
        fn get_auction_count(&self) -> u128 {
            AuctionImpl::get_auction_count(self)
        }

        #[ink(message)]
        fn get_auction_by_index(&self, index: u128) -> Option<auction::data::Auction> {
            AuctionImpl::get_auction_by_index(self, index)
        }

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
        ) -> ProjectResult<u128> {
            AuctionImpl::list_nft_for_auction(
                self,
                creator,
                collection,
                token_id,
                start_price,
                min_bid_step,
                currency,
                start_time,
                end_time,
            )
        }

        #[ink(message)]
        fn cancel_auction(&mut self, auction_id: u128) -> ProjectResult<()> {
            AuctionImpl::cancel_auction(self, auction_id)
        }

        #[ink(message)]
        fn bid_nft(&mut self, auction_id: u128, price: u128) -> ProjectResult<()> {
            AuctionImpl::bid_nft(self, auction_id, price)
        }

        #[ink(message)]
        fn claim_nft(&mut self, auction_id: u128) -> ProjectResult<()> {
            AuctionImpl::claim_nft(self, auction_id)
        }
    }
}
