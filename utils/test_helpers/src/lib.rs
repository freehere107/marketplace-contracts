#[macro_export]
macro_rules! address_of {
    ($account:ident) => {
        ink::primitives::AccountId::from(ink_e2e::$account::<PolkadotConfig>().account_id().0)
    };
}
