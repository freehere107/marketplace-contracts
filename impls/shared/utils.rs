use ink::primitives::AccountId;

use crate::traits::collection::CollectionRef;
use crate::traits::{ArchisinalError, ProjectResult};

pub fn apply_fee(price: &u128, token: &AccountId) -> ProjectResult<u128> {
    let royalty = CollectionRef::collection_royalty(token);
    let fee = price
        .checked_mul(royalty as u128)
        .ok_or(ArchisinalError::IntegerOverflow)?
        .checked_div(10000)
        .unwrap();

    Ok(price.checked_add(fee).unwrap_or(0))
}
