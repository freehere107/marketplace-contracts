//! SPDX-License-Identifier: MIT
use ink::primitives::AccountId;

/// The collection access data.
#[derive(Default, Debug)]
#[openbrush::storage_item]
pub struct Data {
    /// The name of the collection.
    #[lazy]
    pub(crate) collection_fabric_address: AccountId,
}
