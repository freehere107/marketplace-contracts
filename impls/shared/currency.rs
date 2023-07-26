use crate::traits::{ArchisinalError, ProjectResult};
use ink::prelude::vec;
use openbrush::contracts::traits::psp22::PSP22Ref;
use openbrush::traits::{AccountId, DefaultEnv};

#[derive(Clone, Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(
    feature = "std",
    derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)
)]
pub enum Currency {
    Native,
    Custom(AccountId),
}

impl Currency {
    pub fn is_native(&self) -> bool {
        match self {
            Currency::Native => true,
            _ => false,
        }
    }

    pub fn is_custom(&self) -> bool {
        match self {
            Currency::Custom(_) => true,
            _ => false,
        }
    }

    /// Transfers funds from the contract to the given account.
    pub fn transfer(&mut self, to: AccountId, amount: u128) -> ProjectResult<()> {
        match self {
            Currency::Native => Self::env()
                .transfer(Self::env().caller(), amount)
                .map_err(|_| ArchisinalError::TransferNativeError),
            Currency::Custom(address) => PSP22Ref::transfer(address, to, amount, vec![])
                .map_err(|err| ArchisinalError::PSP22(err)),
        }
    }

    /// Checks if the caller has enough funds to transfer.
    pub fn assure_transfer(&self, amount: u128) -> ProjectResult<()> {
        match self {
            Currency::Native => {
                if Self::env().transferred_value() >= amount {
                    Ok(())
                } else {
                    Err(ArchisinalError::TransferNativeError)
                }
            }
            Currency::Custom(_) => Ok(()),
        }
    }

    pub fn transfer_from(
        &mut self,
        from: AccountId,
        to: AccountId,
        amount: u128,
    ) -> ProjectResult<()> {
        match self {
            Currency::Native => {
                self.assure_transfer(amount.clone())?;

                Self::env()
                    .transfer(to, amount)
                    .map_err(|_| ArchisinalError::TransferNativeError)
            }
            Currency::Custom(address) => PSP22Ref::transfer_from(address, from, to, amount, vec![])
                .map_err(|err| ArchisinalError::PSP22(err)),
        }
    }
}
