#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[openbrush::implementation(Ownable, AccessControl, Upgradeable)]
#[openbrush::contract]
mod marketplace {
    use archisinal_lib::impls::admin_access::AdminAccessImpl;
    use archisinal_lib::impls::auction::auction::*;
    use archisinal_lib::impls::marketplace::data::Listing;
    use archisinal_lib::impls::marketplace::marketplace::*;
    use archisinal_lib::impls::shared::consts::ADMIN;
    use archisinal_lib::impls::shared::currency::Currency;
    use archisinal_lib::impls::{auction, marketplace};
    use archisinal_lib::traits::admin_access::*;
    use archisinal_lib::traits::auction::*;
    use archisinal_lib::traits::events::admin_access::AdminAccessEvents;
    use archisinal_lib::traits::events::auction::AuctionEvents;
    use archisinal_lib::traits::events::marketplace::MarketplaceEvents;
    use archisinal_lib::traits::marketplace::*;
    use archisinal_lib::traits::ProjectResult;
    use ink::codegen::{EmitEvent, Env};
    use ink::prelude::vec::Vec;
    use openbrush::contracts::psp34::Id;
    use openbrush::traits::Storage;

    #[ink(event)]
    pub struct ListNFT {
        #[ink(topic)]
        listing_id: u128,
        #[ink(topic)]
        creator: AccountId,
        #[ink(topic)]
        collection: AccountId,
        token_id: Id,
        price: u128,
        currency: Currency,
    }

    #[ink(event)]
    pub struct CancelListing {
        #[ink(topic)]
        caller: AccountId,
        #[ink(topic)]
        listing_id: u128,
    }

    #[ink(event)]
    pub struct BuyNFT {
        #[ink(topic)]
        buyer: AccountId,
        #[ink(topic)]
        listing_id: u128,
    }

    #[ink(event)]
    pub struct BuyBatch {
        #[ink(topic)]
        buyer: AccountId,
        #[ink(topic)]
        listing_ids: Vec<u128>,
    }

    #[ink(event)]
    pub struct AuctionCreated {
        #[ink(topic)]
        auction_id: u128,
        #[ink(topic)]
        creator: AccountId,
        #[ink(topic)]
        collection: AccountId,
        token_id: Id,
        start_price: u128,
        min_bid_step: u128,
        start_time: u64,
        end_time: u64,
        currency: Currency,
    }

    #[ink(event)]
    pub struct CancelAuction {
        #[ink(topic)]
        caller: AccountId,
        #[ink(topic)]
        auction_id: u128,
    }

    #[ink(event)]
    pub struct BidPlaced {
        #[ink(topic)]
        bidder: AccountId,
        #[ink(topic)]
        auction_id: u128,
        #[ink(topic)]
        bid: u128,
    }

    #[ink(event)]
    pub struct NFTClaimed {
        #[ink(topic)]
        caller: AccountId,
        #[ink(topic)]
        auction_id: u128,
    }

    #[ink(event)]
    pub struct NoBids {
        #[ink(topic)]
        caller: AccountId,
        #[ink(topic)]
        auction_id: u128,
    }

    #[ink(event)]
    pub struct StartAuction {
        #[ink(topic)]
        caller: AccountId,
        #[ink(topic)]
        auction_id: u128,
    }

    #[ink(event)]
    pub struct EndAuction {
        #[ink(topic)]
        caller: AccountId,
        #[ink(topic)]
        auction_id: u128,
    }

    #[ink(event)]
    pub struct AdminAdded {
        #[ink(topic)]
        pub caller: AccountId,
        #[ink(topic)]
        pub account_id: AccountId,
    }

    #[ink(event)]
    pub struct AdminRemoved {
        #[ink(topic)]
        pub caller: AccountId,
        #[ink(topic)]
        pub account_id: AccountId,
    }

    #[ink(storage)]
    #[derive(Default, Storage)]
    pub struct Contract {
        #[storage_field]
        ownable: ownable::Data,
        #[storage_field]
        access_control: access_control::Data,
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
            access_control::Internal::_init_with_admin(&mut instance, Some(owner));
            access_control::AccessControl::grant_role(&mut instance, ADMIN, Some(owner))
                .expect("Failed to grant role");

            instance
        }
    }

    impl MarketplaceImpl for Contract {}

    impl AuctionImpl for Contract {}

    impl AdminAccessImpl for Contract {}

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
        fn start_auction(&mut self, auction_id: u128) -> ProjectResult<()> {
            AuctionImpl::start_auction(self, auction_id)
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

    impl AdminAccess for Contract {
        #[ink(message)]
        fn add_admin(&mut self, account_id: AccountId) -> ProjectResult<()> {
            AdminAccessImpl::add_admin(self, account_id)
        }

        #[ink(message)]
        fn remove_admin(&mut self, account_id: AccountId) -> ProjectResult<()> {
            AdminAccessImpl::remove_admin(self, account_id)
        }

        #[ink(message)]
        fn is_admin(&self, account_id: AccountId) -> bool {
            AdminAccessImpl::is_admin(self, account_id)
        }
    }

    impl MarketplaceEvents for Contract {
        fn emit_list_nft(
            &self,
            listing_id: u128,
            creator: AccountId,
            collection: AccountId,
            token_id: Id,
            price: u128,
            currency: Currency,
        ) {
            self.env().emit_event(ListNFT {
                listing_id,
                creator,
                collection,
                token_id,
                price,
                currency,
            });
        }

        fn emit_cancel_listing(&self, caller: AccountId, listing_id: u128) {
            self.env().emit_event(CancelListing { caller, listing_id });
        }

        fn emit_buy_nft(&self, buyer: AccountId, listing_id: u128) {
            self.env().emit_event(BuyNFT { buyer, listing_id });
        }

        fn emit_buy_batch(&self, buyer: AccountId, listing_ids: Vec<u128>) {
            self.env().emit_event(BuyBatch { buyer, listing_ids });
        }
    }

    impl AuctionEvents for Contract {
        fn emit_auction_created(
            &self,
            auction_id: u128,
            creator: AccountId,
            collection: AccountId,
            token_id: Id,
            start_price: u128,
            min_bid_step: u128,
            currency: Currency,
            start_time: u64,
            end_time: u64,
        ) {
            self.env().emit_event(AuctionCreated {
                auction_id,
                creator,
                collection,
                token_id,
                start_price,
                min_bid_step,
                currency,
                start_time,
                end_time,
            });
        }

        fn emit_auction_started(&self, caller: AccountId, auction_id: u128) {
            self.env().emit_event(StartAuction { caller, auction_id });
        }

        fn emit_auction_ended(&self, caller: AccountId, auction_id: u128) {
            self.env().emit_event(EndAuction { caller, auction_id });
        }

        fn emit_no_bids(&self, caller: AccountId, auction_id: u128) {
            self.env().emit_event(NoBids { caller, auction_id });
        }

        fn emit_auction_cancelled(&self, caller: AccountId, auction_id: u128) {
            self.env().emit_event(CancelAuction { caller, auction_id });
        }

        fn emit_bid_placed(&self, auction_id: u128, bidder: AccountId, bid: u128) {
            self.env().emit_event(BidPlaced {
                auction_id,
                bidder,
                bid,
            });
        }

        fn emit_nft_claimed(&self, caller: AccountId, auction_id: u128) {
            self.env().emit_event(NFTClaimed { caller, auction_id });
        }
    }

    impl AdminAccessEvents for Contract {
        fn emit_admin_added(&self, caller: AccountId, account_id: AccountId) {
            self.env().emit_event(AdminAdded { caller, account_id });
        }

        fn emit_admin_removed(&self, caller: AccountId, account_id: AccountId) {
            self.env().emit_event(AdminRemoved { caller, account_id });
        }
    }
}
