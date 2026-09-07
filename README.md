# 🗳️ Decentralized Voting System

A simple **Decentralized Voting System** built using **Solidity**.
This project demonstrates how a smart contract can be used to conduct a basic election and record votes on the blockchain.

## 📌 Project Overview

The Decentralized Voting System allows users to vote for candidates through a Solidity smart contract.

The smart contract:

* Stores candidate names
* Records votes
* Allows each wallet address to vote only once
* Prevents invalid voting
* Keeps voting data on the blockchain

This project is created as a **beginner-level blockchain and Solidity mini-project**.

## 🛠️ Technologies Used

* **Solidity** — Smart contract development
* **Ethereum Blockchain** — Blockchain platform
* **Remix IDE** — Smart contract compilation and deployment
* **MetaMask** — Wallet interaction
* **Git & GitHub** — Version control and project management

## ⚙️ Features

### 1. Candidate Selection

The election contains multiple candidates.

### 2. Voting

Users can vote for their preferred candidate.

### 3. One Vote Per Wallet

A wallet address can vote only once.

### 4. Vote Counting

The smart contract automatically increases the vote count for the selected candidate.

### 5. Blockchain Storage

Voting information is stored through the deployed smart contract.

## 📂 Project Structure

```text
DVS/
│
├── Election.sol
└── README.md
```

## 📝 Smart Contract

The main smart contract is:

```text
Election.sol
```

It contains the election logic, including:

* Candidates
* Vote counting
* Voter tracking
* Voting function

## 🚀 How to Run

### Step 1 — Open Remix

Open [Remix IDE](https://remix.ethereum.org/).

### Step 2 — Create the Contract

Create a file named:

```text
Election.sol
```

Copy the Solidity code from this repository into the file.

### Step 3 — Compile

Select the appropriate Solidity compiler version and compile `Election.sol`.

### Step 4 — Deploy

Deploy the contract using Remix's development blockchain environment.

### Step 5 — Vote

Use the `vote()` function and provide the candidate number.

Example:

```text
vote(0)
```

This votes for the first candidate.

## 🔐 Example

Suppose the election has:

```text
Candidate 0 → Rahul
Candidate 1 → Amit
```

If a user calls:

```text
vote(0)
```

Rahul's vote count increases by one.

If the same wallet tries to vote again, the transaction is rejected.

## 🎯 Learning Objectives

Through this project, I am learning:

* Basics of Solidity
* Smart contracts
* Blockchain-based applications
* `mapping`
* Functions
* `require()`
* `msg.sender`
* Vote counting
* Git and GitHub

## 🚧 Future Improvements

The current project is a simple beginner implementation. Future versions may include:

* More candidates
* Candidate registration
* Election start and end time
* Admin-only functions
* A frontend using HTML, CSS and JavaScript
* MetaMask integration
* Deployment to an Ethereum test network
* Better voter authentication

## 👨‍💻 Author

**Aditya**

B.Tech CSE – Data Science

This project was created for learning and exploring **Blockchain and Solidity development**.
