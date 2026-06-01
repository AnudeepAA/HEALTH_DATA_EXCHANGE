# ICP Health Vault — Decentralized Records Exchange

A production-grade Decentralized Application (DApp) architected on the Internet Computer Protocol (ICP) that secures electronic health records using decentralized access controls and tokenized logic.

## 🏗️ System Architecture & Frameworks

The application is completely decoupled into an on-chain ledger backend and a client-facing asset framework:

- **Smart Contract Canisters (`/backend`)**: Programmed using **Motoko**, handling core state variables, cryptographic validations, and native reward distribution pathways.
- **Access Control Client (`/frontend`)**: Built using JavaScript/Node.js to manage asynchronous query calls, handle user state, and process wallet endpoints.

## 🔐 Implemented Engineering Features

1. **Plug Wallet Integration**: Native integration with the Plug Wallet API to handle secure, client-side cryptographic user authentication.
2. **On-Chain Consent Layer**: Programmatic backend logic designed within Motoko canisters to generate tamper-proof records access tokens.
3. **Decentralized Rewards System**: Automated ledger execution models to distribute processing incentives directly within the canister environment.
4. **Encrypted Storage Core**: Architecture supporting encrypted uploads to ensure end-to-end data privacy across node networks.

## 🚀 Deployment & Local Orchestration
```bash
# Initialize the local Internet Computer network environment
dfx start --background

# Compile and deploy canisters to the local replica
dfx deploy

# Navigate to the frontend directory and launch the client server
cd frontend
npm install
npm run dev
```
