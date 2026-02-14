# TradeFlow-Web: Stellar RWA Dashboard

![Stellar](https://img.shields.io/badge/stellar-native-purple)
![Freighter](https://img.shields.io/badge/wallet-freighter-blue)
![License](https://img.shields.io/badge/license-MIT-blue)

**TradeFlow-Web** is the user interface for the TradeFlow protocol. It allows SMEs and Liquidity Providers to interact with Soroban smart contracts directly from their browser.

## 🌟 Stellar Integration Features

This dashboard is built specifically for the Stellar ecosystem:

- **Wallet Connection:** Native integration with **[Freighter](https://www.freighter.app/)**.
- **Smart Contract Interaction:** Uses `soroban-client` to invoke the `invoice_nft` and `lending_pool` contracts.
- **Real-Time Data:** Fetches account balances and token metadata directly from Horizon.

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Blockchain SDK:** `@stellar/freighter-api` & `soroban-client`
- **Styling:** Tailwind CSS
- **Network:** Stellar Testnet (Futurenet compatible)

## 🚀 Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```

3.  **Connect Wallet:**
    Ensure you have the Freighter extension installed and set to "Testnet".

## 📜 License
MIT
 