
let provider;
let signer;
let contract;

// Put your deployed contract address here
const contractAddress = "YOUR_CONTRACT_ADDRESS";

// ABI of our Election contract
const contractABI = [
    "function vote(uint256 candidate) public",
    "function votesRahul() public view returns (uint256)",
    "function votesAmit() public view returns (uint256)",
    "function hasVoted(address) public view returns (bool)"
];


// Connect MetaMask
async function connectWallet() {

    if (!window.ethereum) {
        alert("Please install MetaMask");
        return;
    }

    provider = new ethers.BrowserProvider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    signer = await provider.getSigner();

    const address = await signer.getAddress();

    document.getElementById("wallet").innerText =
        "Wallet: " + address;

    contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
    );

    loadVotes();
}


// Vote
async function vote(candidate) {

    if (!contract) {
        alert("Connect your wallet first");
        return;
    }

    try {

        const transaction = await contract.vote(candidate);

        document.getElementById("message").innerText =
            "Transaction submitted...";

        await transaction.wait();

        document.getElementById("message").innerText =
            "Vote recorded successfully!";

        loadVotes();

    } catch (error) {

        document.getElementById("message").innerText =
            "Voting failed.";

    }
}


// Display votes
async function loadVotes() {

    const rahulVotes = await contract.votesRahul();
    const amitVotes = await contract.votesAmit();

    document.getElementById("rahulVotes").innerText =
        rahulVotes.toString();

    document.getElementById("amitVotes").innerText =
        amitVotes.toString();
}


// Connect button
document.getElementById("connectButton")
    .addEventListener("click", connectWallet);
