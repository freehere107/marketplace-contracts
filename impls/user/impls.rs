use crate::impls::user::data::{Data, UserData};
use crate::traits::ProjectResult;
use openbrush::contracts::ownable;
use openbrush::contracts::ownable::only_owner;
use openbrush::contracts::ownable::Ownable;
use openbrush::modifiers;
use openbrush::traits::Storage;

pub trait UserImpl: Storage<Data> + Ownable + Storage<ownable::Data> {
    fn get_user_data(&self) -> UserData {
        UserData::from(self.data::<Data>())
    }

    #[modifiers(only_owner)]
    fn set_user_data(&mut self, user_data: UserData) -> ProjectResult<()> {
        self.data::<Data>().nick.set(&user_data.nick);
        self.data::<Data>().avatar.set(&user_data.avatar);
        self.data::<Data>()
            .addition_info
            .set(&user_data.addition_info);

        Ok(())
    }
}
