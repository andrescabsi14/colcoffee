# ColCoffee

Coffee Supply chain & data auditing DApp.

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](./images/ftc_product_overview.png)

![truffle test](./images/ftc_farm_details.png)

![truffle test](./images/ftc_product_details.png)

![truffle test](./images/ftc_transaction_history.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/andrescabsi14/colcoffee.git
```

Install all requisite npm packages (as listed in `package.json`):

```
npm install
```

Launch contracts server:

```
npm run start
```

Launch client app:

```
cd cient && npm start
```

Your terminal should look something like this:

![truffle test](./images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
npm run contracts:compile
```

Your terminal should look something like this:

![truffle test](./images/truffle_compile.png)

This will create the smart contract artifacts in folder `build\contracts`.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
npm run contracts:migrate
```

Your terminal should look something like this:

![truffle test](./images/truffle_migrate.png)

Test smart contracts:

```
npm run test
```

All 10 tests should pass.

![truffle test](./images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm start
```

## Platform

- **Ethereum** - Ethereum is a decentralized platform that runs smart contracts

## Framework

- **Truffle** - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.
- **Ganache**

## Libraries

- **React**: Handle the UI
- **dotenv**: Store as environmental variables details to deploy at .env file.

### Network

- **Scale:** 1000 users actives on the network at a time.
- **Trust:** Participate without knowing all about each other.

### Performance

- **Ammount of data per TX:**
- **TX Throughput:** # of TX/time
  - Create and modify data
  - Query data

### Consensus

- **Arbitrator needed?** Yes
- **Who validates transactions?** All participant involved
- **Immutability of the records** No need to ammend or cancel transactions

## Database

- **Storage transactional data:** Ethereum Rinkeby testnet

## Contract Addresses

**Contract:** <a href="https://rinkeby.etherscan.io/address/0xecb80b2a02886d89a5236c449e3146693becc50b" target="_blank">0xECb80b2a02886D89A5236c449e3146693bECc50B</a>

**SupplyChain:** <a href="https://rinkeby.etherscan.io/address/0x216bb528a956a5432570093fb9353bde24cf015f#code" target="_blank">0x216bb528a956a5432570093fb9353bde24cf015f</a>

**FarmerRole:** <a href="https://rinkeby.etherscan.io/address/0x6a045066b2fdba2e7661ccad60216db98c2d5dac#code" target="_blank">0x6a045066b2fdba2e7661ccad60216db98c2d5dac</a>

**DistributorRole:** <a href="https://rinkeby.etherscan.io/address/0xe1e4a87698ece438bbdf2b6d88ff14e21f6b22cf#code" target="_blank">0xe1e4a87698ece438bbdf2b6d88ff14e21f6b22cf</a>

**RetailerRole:** <a href="https://rinkeby.etherscan.io/address/0xdcbb907ccfe7edc104d070ef900ca6b581561371#code" target="_blank">0xdcbb907ccfe7edc104d070ef900ca6b581561371</a>

**ConsumerRole:** <a href="https://rinkeby.etherscan.io/address/0x3bf9a1e925cc827ae21f8262f17f0dc911242a60#code" target="_blank">0x3bf9a1e925cc827ae21f8262f17f0dc911242a60</a>

## Transaction

**Deploy Tx:** <a href="https://rinkeby.etherscan.io/tx/0xf1f734509e49e660db72c7a275e4c27ce628e84dfabf8f426fe77a633025003e" target="_blank">0xf1f734509e49e660db72c7a275e4c27ce628e84dfabf8f426fe77a633025003e</a>

## Program version numbers

- **Truffle:** v4.1.15 (core: 4.1.15)
- **Solidity:** v0.4.25 (solc-js)
- **NodeJS:** v10.13.0
- **Web3.js:** v1.2.5

## Diagrams

![header image](https://github.com/andrescabsi14/colcoffee/blob/master/images/ColCoffeeDiagrams.svg)

## Acknowledgments

- Solidity
- Ganache-cli
- Truffle
