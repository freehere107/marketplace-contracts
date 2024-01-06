FROM rust

RUN apt-get update && \
    apt-get install libclang-dev -y && \
    apt-get install nodejs -y && \
    apt-get install npm -y && \
    apt-get install binaryen -y && \
    apt-get install protobuf-compiler -y

RUN npm install -g n && \
    npm install -g yarn && \
    n stable

RUN curl -sSf https://sh.rustup.rs/ | sh -s -- -y

RUN rustup toolchain install 1.75
RUN rustup component add rust-src
RUN rustup component add rust-src --toolchain 1.75
RUN rustup target add wasm32-unknown-unknown
RUN rustup target add wasm32-unknown-unknown --toolchain 1.75

RUN cargo install cargo-dylint dylint-link

RUN cargo install cargo-contract --force --locked
RUN cargo install contracts-node --force --locked