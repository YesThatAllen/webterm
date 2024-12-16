use crate::models::reader_socket_error::ReaderSocketError;
use std::fmt;

#[derive(Debug)]
pub enum WebtermError {
    ReaderSocketError(ReaderSocketError),
    RuntimeError(String),
    EncryptionError(String),
    DecryptionError(String),
}

impl std::error::Error for WebtermError {}

impl fmt::Display for WebtermError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            WebtermError::ReaderSocketError(e) => write!(f, "Reader socket error: {}", e),
            WebtermError::RuntimeError(e) => write!(f, "Runtime Error: {}", e),
            WebtermError::EncryptionError(e) => write!(f, "Encryption Error: {}", e),
            WebtermError::DecryptionError(e) => write!(f, "Decryption Error: {}", e),
        }
    }
}

impl From<ReaderSocketError> for WebtermError {
    fn from(err: ReaderSocketError) -> Self {
        WebtermError::ReaderSocketError(err)
    }
}
