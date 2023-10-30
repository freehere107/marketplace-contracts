use openbrush::traits::DefaultEnv;

/// Timestamp provider implementation.
///
/// # Note
///
/// Timestamp provider is used to get the current timestamp.
/// Could be overriden to mock the timestamp for testing purposes.
pub trait TimestampProviderImpl: Sized + DefaultEnv {
    /// Get the current timestamp
    fn timestamp(&self) -> u64 {
        <Self as DefaultEnv>::env().block_timestamp()
    }
}
