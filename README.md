# Source Code Sea
---

A Decentralized platform to tokenise source codes as NFTs and sell them to generate revenue.

![logo](/public/logo.png?raw=true)

---

Source code is the fundamental component of a computer program that is created by a programmer. We wanted to find a sustainable way for code ownership to be recognized and adhered to. Source Code Sea does exactly that. Source code sea allows you to buy and sell source codes. The decentralized application is built using Celo Blockchain and the smart contract is deployed on the Celo Alfajores Test Network.

Any user can register as a programmer on the platform and tokenize their program as Non-Fungible Tokens or NFTs. This assigns a unique ownership for the content, which cannot be reproduced by anyone else. The off chain data of these NFTs will be stored in a decentralised manner on IPFS and FileCoin using NFT.Storage. NFTs can have only one owner at a time thus get exclusive ownership rights .

Now the Source code is available for sale on the platform, where other users can view and purchase them. Once a user buys an Source code from the platform, the amount is directly transferred to the owner, significantly faster than conventional methods with end-to-end encryption.
By incorporating blockchain into our project we were able to achieve tamperproof transactions which require no third-party payment system. Payment between buyers and sellers is direct, no intermediary has any role to play.

<br/>

## Steps to Run Source Code Sea DApp

### Install Requirements

Node JS - [node](https://nodejs.org/en/download/)

Celo Extension Wallet and set network as Alfajores Test Network.

### Clone the repo

```
$ git clone https://github.com/abelzach/Source-Code-Sea

$ cd Source-Code-Sea
```

### Install Dependencies

```
$ npm install -g truffle

$ npm install
```

- Create a .secret file in the root directory of the repo and enter your Celo account private key.
- Create a .env file in the root directory and set environment variable.

```
REACT_APP_NFTKEY = 'NFT.Storage API Key'
```

### Deploy Smart contract and Run the DApp

```
$ truffle migrate --network alfajores

$ npm start
```
- Visit localhost:3000 in your browser and connect your Celo extension wallet account.

---

[Project Demo Video](https://www.youtube.com/watch?v=zkpKQWOias4)
