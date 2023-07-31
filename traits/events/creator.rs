use ink::primitives::AccountId;

pub trait CreatorEvents {
    fn emit_create_collection(&self, creator: AccountId, collection: AccountId);
}
