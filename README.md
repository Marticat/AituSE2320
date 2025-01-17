# UniversityToken (AituSE2320)

This project creates an ERC-20 token based on Ethereum with additional features for displaying transaction information. The token was created for the AituSE2320 group, and its initial supply consists of 2000 tokens.

## Features

- **ERC-20 Standard**: This token follows the ERC-20 standard, which is the most widely used standard for tokens on the Ethereum blockchain.
- **Initial Supply**: 2000 tokens.
- **Functions**:
  - Retrieve the timestamp of the latest transaction in a human-readable format.
  - Get the address of the sender and receiver of the latest transaction.
  - Display transaction information via blockchain events.
  
## Functionalities

1. **ERC-20 Token**:
   - The token is called `AituSE2320`, and its symbol is `UTK`.
   - The initial token supply is 2000 UTK, which are initially owned by the contract creator.

2. **Additional Functions**:
   - `getLastTransactionTimestamp`: Returns the timestamp of the latest transaction in a human-readable format.
   - `getLastTransactionSender`: Returns the address of the sender of the latest transaction.
   - `getLastTransactionReceiver`: Returns the address of the receiver of the latest transaction.
   - All transactions are logged through the `TransactionInfo` event.

## Installation and Setup

### 1. Install Dependencies

To run the project, install all necessary dependencies:

npm install

To deploy the contract to the Holesky testnet, run the following command:

npx hardhat run scripts/deploy.js --network holesky

For testing the contract, use Hardhat and add tests in the test directory. To run the tests, use:

npx hardhat test

### 2. Deploy Contract

To deploy the contract to the Holesky testnet, run the following command:

npx hardhat run scripts/deploy.js --network holesky

This will deploy your contract to the Holesky network and output the contract address.
see 1.png 