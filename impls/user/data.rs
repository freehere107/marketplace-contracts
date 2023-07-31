use openbrush::contracts::psp34::Id;
use openbrush::traits::String;

#[derive(Default, Debug)]
#[openbrush::storage_item]
pub struct Data {
    #[lazy]
    pub nick: Option<String>,
    #[lazy]
    pub avatar: Option<NFT>,
    #[lazy]
    pub addition_info: Option<String>,
}

#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(
    feature = "std",
    derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)
)]
pub struct NFT {
    pub id: Id,
    pub uri: String,
    pub contract_address: String,
}

#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub struct UserData {
    pub nick: Option<String>,
    pub avatar: Option<NFT>,
    pub addition_info: Option<String>,
}

impl From<&Data> for UserData {
    fn from(value: &Data) -> Self {
        Self {
            nick: value.nick.get_or_default(),
            avatar: value.avatar.get_or_default(),
            addition_info: value.addition_info.get_or_default(),
        }
    }
}
