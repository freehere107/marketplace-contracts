use crate::impls::shared::consts::ADMIN;
use crate::traits::events::admin_access::AdminAccessEvents;
use crate::traits::{ArchisinalError, ProjectResult};
use ink::primitives::AccountId;
use openbrush::contracts::access_control::AccessControl;
use openbrush::contracts::ownable::Ownable;
use openbrush::traits::DefaultEnv;

pub trait AdminAccessImpl: AccessControl + Ownable + AdminAccessEvents + Sized {
    fn add_admin(&mut self, account_id: AccountId) -> ProjectResult<()> {
        self._admin_or_owner()?;

        self.emit_admin_added(Self::env().caller(), account_id);

        AccessControl::grant_role(self, ADMIN, Some(account_id))
            .map_err(|_| ArchisinalError::AdminAccessError)
    }

    fn remove_admin(&mut self, account_id: AccountId) -> ProjectResult<()> {
        self._admin_or_owner()?;

        self.emit_admin_removed(Self::env().caller(), account_id);

        AccessControl::revoke_role(self, ADMIN, Some(account_id))
            .map_err(|_| ArchisinalError::AdminAccessError)
    }

    fn is_admin(&self, account_id: AccountId) -> bool {
        AccessControl::has_role(self, ADMIN, Some(account_id))
    }

    fn _admin_or_owner(&self) -> ProjectResult<()> {
        let caller = Self::env().caller();

        if !self.is_admin(caller) || self.owner() != Some(caller) {
            return Err(ArchisinalError::AdminAccessError);
        }

        Ok(())
    }
}
