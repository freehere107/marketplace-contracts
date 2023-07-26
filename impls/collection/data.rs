use openbrush::traits::String;

#[derive(Default, Debug)]
#[openbrush::storage_item]
pub struct Data {
    #[lazy]
    pub name: Option<String>,
    #[lazy]
    pub uri: Option<String>,
    #[lazy]
    pub additional_info: Option<String>,
    #[lazy]
    pub royalty: u32,
}
