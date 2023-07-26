use crate::impls::marketplace::data::{Data, Listing, ListingStatus};
use crate::impls::shared::currency::Currency;
use crate::impls::shared::utils::apply_fee;
use crate::traits::{ArchisinalError, ProjectResult};
use ink::prelude::vec;
use ink::prelude::vec::Vec;
use openbrush::contracts::ownable;
use openbrush::contracts::ownable::{Ownable, OwnableRef};
use openbrush::contracts::psp34::{Id, PSP34Ref};
use openbrush::traits::{AccountId, DefaultEnv, Storage};

pub trait MarketplaceImpl: Storage<Data> + Storage<ownable::Data> + Ownable {
    fn get_listing_count(&self) -> u128 {
        self.data::<Data>().listing_count.get_or_default()
    }

    fn get_listing_id_by_index(&self, index: u128) -> Option<Listing> {
        self.data::<Data>().listings.get(&index)
    }

    fn list_nft_for_sale(
        &mut self,
        creator: AccountId,
        mut collection: AccountId,
        token_id: Id,
        price: u128,
        currency: Currency,
    ) -> ProjectResult<u128> {
        let caller = <Self as DefaultEnv>::env().caller();
        let contract_address: AccountId = <Self as DefaultEnv>::env().account_id();

        if creator.clone() != caller {
            return Err(ArchisinalError::CallerIsNotNFTOwner);
        }

        if PSP34Ref::owner_of(&collection, token_id.clone()) != Some(creator) {
            return Err(ArchisinalError::CallerIsNotNFTOwner);
        }

        PSP34Ref::transfer(&mut collection, contract_address, token_id.clone(), vec![])?;

        let listing_id = self.data::<Data>().listing_count.get_or_default();

        let listing = Listing {
            id: listing_id,
            creator: creator.clone(),
            collection: collection.clone(),
            token_id: token_id.clone(),
            price,
            currency,
            status: ListingStatus::OnSale,
        };

        self.data::<Data>().listings.insert(&listing_id, &listing);
        self.data::<Data>().listing_count.set(
            &listing_id
                .checked_add(1)
                .ok_or(ArchisinalError::IntegerOverflow)?,
        );

        Ok(listing_id)
    }

    fn cancel_listing(&mut self, listing_id: u128) -> ProjectResult<()> {
        let caller = <Self as DefaultEnv>::env().caller();
        let mut listing = self
            .data::<Data>()
            .listings
            .get(&listing_id)
            .ok_or(ArchisinalError::ListingNotFound)?;

        if listing.creator != caller {
            return Err(ArchisinalError::CallerIsNotListingOwner);
        }

        if listing.status != ListingStatus::OnSale {
            return Err(ArchisinalError::ListingNotOnSale);
        }

        self.data::<Data>().listings.insert(
            &listing_id,
            &Listing {
                status: ListingStatus::Cancelled,
                ..listing.clone()
            },
        );

        PSP34Ref::transfer(
            &mut listing.collection,
            caller.clone(),
            listing.token_id.clone(),
            vec![],
        )?;

        Ok(())
    }

    fn buy_nft(&mut self, listing_id: u128) -> ProjectResult<()> {
        let caller = <Self as DefaultEnv>::env().caller();
        let mut listing = self
            .data::<Data>()
            .listings
            .get(&listing_id)
            .ok_or(ArchisinalError::ListingNotFound)?;

        if listing.status != ListingStatus::OnSale {
            return Err(ArchisinalError::ListingNotOnSale);
        }

        if caller == listing.creator {
            return Err(ArchisinalError::CallerIsListingOwner);
        }

        let currency = &mut listing.currency;

        let price = listing.price.clone();
        let price_with_fee = apply_fee(&listing.price, &listing.collection)?;

        // Check if the caller has enough balance to buy the NFT (in case of Native)
        currency.assure_transfer(price_with_fee)?;

        PSP34Ref::transfer(
            &mut listing.collection,
            caller.clone(),
            listing.token_id.clone(),
            vec![],
        )?;

        // PSP22Ref::transfer_from(
        //     &mut listing.currency,
        //     caller.clone(),
        //     listing.creator.clone(),
        //     listing.price.clone(),
        //     vec![],
        // )?;
        //
        currency.transfer_from(caller.clone(), listing.creator.clone(), price.clone())?;

        // PSP22Ref::transfer_from(
        //     &mut listing.currency,
        //     caller.clone(),
        //     listing.creator.clone(),
        //     with_fee,
        //     vec![],
        // )?;
        let collection_owner = OwnableRef::owner(&listing.collection);

        if let Some(collection_owner) = collection_owner {
            currency.transfer_from(
                caller.clone(),
                collection_owner,
                price_with_fee
                    .clone()
                    .checked_sub(price)
                    .ok_or(ArchisinalError::IntegerUnderflow)?,
            )?;
        }

        self.data::<Data>().listings.insert(
            &listing_id,
            &Listing {
                status: ListingStatus::Sold,
                ..listing
            },
        );

        Ok(())
    }

    fn buy_batch(&mut self, ids: Vec<u128>) -> ProjectResult<()> {
        let caller = <Self as DefaultEnv>::env().caller();

        let mut listings = ids.into_iter().try_fold(Vec::new(), |mut acc, id| {
            let listing = self
                .data::<Data>()
                .listings
                .get(&id)
                .ok_or(ArchisinalError::ListingNotFound)?;

            if listing.status != ListingStatus::OnSale {
                return Err(ArchisinalError::ListingNotOnSale);
            }

            if caller == listing.creator {
                return Err(ArchisinalError::CallerIsListingOwner);
            }

            acc.push(listing);

            Ok(acc)
        })?;

        let total_price_native =
            listings
                .clone()
                .into_iter()
                .try_fold(0u128, |mut acc, listing| {
                    let total_price_with_fee = apply_fee(&listing.price, &listing.collection)?;

                    acc += if listing.currency.is_native() {
                        total_price_with_fee
                    } else {
                        0
                    };

                    Ok::<u128, ArchisinalError>(acc)
                })?;

        if Self::env().transferred_value() < total_price_native {
            return Err(ArchisinalError::InsufficientFunds);
        }

        listings.iter_mut().try_for_each(|listing| {
            let collection = &mut listing.collection;
            let currency = &mut listing.currency;
            let token_id = &listing.token_id;
            let creator = &listing.creator;
            let price = &listing.price;

            PSP34Ref::transfer(collection, caller.clone(), token_id.clone(), vec![])?;

            // PSP22Ref::transfer_from(
            //     currency,
            //     caller.clone(),
            //     creator.clone(),
            //     price.clone(),
            //     vec![],
            // )?;
            currency.transfer_from(caller.clone(), creator.clone(), price.clone())?;

            let royalty = apply_fee(price, collection)?
                .checked_sub(price.clone())
                .ok_or(ArchisinalError::IntegerUnderflow)?;

            let collection_owner = OwnableRef::owner(&listing.collection)
                .ok_or(ArchisinalError::CollectionOwnerNotFound)?;

            // PSP22Ref::transfer_from(currency, caller.clone(), collection_owner, royalty, vec![])?;
            currency.transfer_from(caller.clone(), collection_owner, royalty)?;

            self.data::<Data>().listings.insert(
                &listing.id,
                &Listing {
                    status: ListingStatus::Sold,
                    ..listing.clone()
                },
            );

            Ok::<(), ArchisinalError>(())
        })?;

        Ok(())
    }
}
