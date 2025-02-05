# UniversityToken (AituSE2320) - ERC-20 Token with Transaction Information Features

UniversityToken (AituSE2320) is an Ethereum-based ERC-20 token with added functionality to provide detailed transaction information. This token was created as part of the AituSE2320 group project, with an initial supply of 2000 tokens. It showcases the use of the ERC-20 standard along with enhanced features for tracking and displaying transaction details, such as timestamps and sender/receiver addresses.

## Features

- **ERC-20 Standard**: This token follows the ERC-20 standard, which is the most widely used standard for tokens on the Ethereum blockchain.
- **Initial Supply**: 2000 tokens.
- **Functions**:
  - Retrieve the timestamp of the latest transaction in a human-readable format.
  - Get the address of the sender and receiver of the latest transaction.
  - Display transaction information via blockchain events.


## Token Details

Name: UniversityToken
Symbol: UTK
Initial Supply: 2000 UTK


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


## License

This project is licensed under the MIT License - see the LICENSE file for details.
