# Ethereum Deposit Tracker

## Overview

The Ethereum Deposit Tracker is an application designed to monitor and record ETH deposits on the Beacon Deposit Contract. It leverages Ethereum RPC methods to interact with the Ethereum blockchain, ensuring robust and efficient tracking of deposit transactions.

## Features

- **Real-time Deposit Tracking:** Monitors the Beacon Deposit Contract for incoming ETH deposits.
- **Comprehensive Data Recording:** Captures details such as block number, timestamp, fee, transaction hash, and public key.
- **Error Handling and Logging:** Includes mechanisms to handle errors and log important events.
- **Optional Alerting and Notifications:** Integrates with Grafana for visualization and Telegram for notifications.
  
## Project Components

### Language/Framework

- **Frontend:** REACT, JS, CSS
- **Backend:** NODE.JS
- **RPC Integration:** Uses Ethereum RPC methods through services like Alchemy!

### RPC Integration

- Establishes an RPC connection to an Ethereum node.
- Develops functions to fetch deposit data using Ethereum RPC methods.
- Handles real-time data fetching and processing.


## Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/ethereum-deposit-tracker.git
    cd ethereum-deposit-tracker
    ```

2. **Install Dependencies:**
    ```bash
    mkdir eth-deposit-tracker
cd eth-deposit-tracker
npm init -y
npm install express ethers dotenv mongoose winston
    ```

3. **Set Up Environment Configuration:**
    - Create a `.env` file in the root directory.
    - Add your Ethereum RPC URL and other environment variables.
    - RPC_URL=your_alchemy_url
    - MONGODB_URI=your_mongodb_url

4. **Run the Application:**
    ```bash
   npm start [for both frontend and backend]
    ```

**Deposit Object:**

```json
{
    "blockNumber": "number",
    "blockTimestamp": "number",
    "fee": "string",
    "hash": "string",
    "pubkey": "string"
}
