use crate::impls::user::data::UserData;
use crate::traits::ProjectResult;
use openbrush::contracts::ownable::*;

#[openbrush::trait_definition]
pub trait User {
    /// Returns UserData of the user.
    #[ink(message)]
    fn get_user_data(&self) -> UserData;

    /// Set the UserData of the user.
    #[ink(message)]
    fn set_user_data(&mut self, user_info: UserData) -> ProjectResult<()>;
}

#[openbrush::wrapper]
pub type UserRef = dyn User + Ownable;
