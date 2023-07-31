FROM ubuntu:latest
LABEL authors="Archisinal"

# Stage 1: Building stage
FROM rust as builder

# Install necessary dependencies
RUN apt-get update && \
    apt-get install -y \
        libclang-dev \
        nodejs \
        npm \
        binaryen \
        protobuf-compiler && \
    rm -rf /var/lib/apt/lists/*

# Install global npm dependencies and set node to stable version
RUN npm install -g n yarn && \
    n stable

# Install rustup
RUN curl -sSf https://sh.rustup.rs/ | sh

# Set the cargo PATH
ENV PATH="/root/.cargo/bin:${PATH}"

# Add necessary rust components and targets
RUN rustup component add rust-src && \
    rustup target add wasm32-unknown-unknown

# Install necessary cargo tools
RUN cargo install cargo-dylint dylint-link && \
    cargo install cargo-contract --version 3.0.0 --force && \
    cargo install contracts-node --git https://github.com/paritytech/substrate-contracts-node.git --force --locked

# Stage 2: Runtime stage
FROM debian:buster-slim

COPY --from=builder /root/.cargo/bin /usr/local/bin

# Default command when starting the container
CMD ["bash"]
