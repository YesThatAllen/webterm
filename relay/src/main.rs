mod config;
mod controllers;
mod handshake;
mod models;
mod relay_version;
mod router;
mod services;

use crate::models::relay_error::RelayError;
use crate::router::app_router;
use clap::Parser;
use tracing::{info, Level};

#[derive(Parser, Debug)]
#[command(version,  long_about = None)]
#[command(about = "Learn more at https://github.com/nasa42/webterm")]
struct Args {
    #[arg(long, env = "WT_RELAY_BIND_HOST", default_value = "localhost")]
    pub bind_host: String,

    #[arg(long, env = "WT_RELAY_BIND_PORT", default_value = "4200")]
    pub bind_port: String,
}

#[tokio::main]
async fn main() -> Result<(), RelayError> {
    let args = Args::parse();

    tracing_subscriber::fmt()
        .with_max_level(Level::DEBUG)
        .with_target(true)
        .init();

    let listener = tokio::net::TcpListener::bind(format!("{}:{}", args.bind_host, args.bind_port))
        .await
        .unwrap_or_else(|_| panic!("failed to bind to port {}", args.bind_port));
    info!("listening on {}", listener.local_addr()?);
    axum::serve(listener, app_router()).await?;

    Ok(())
}
