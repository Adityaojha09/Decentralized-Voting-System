
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Voting {

    struct Candidate {
        string name;
        uint voteCount;
    }

    address public owner;
    Candidate[] public candidates;

    mapping(address => bool) public hasVoted;

    constructor() {
        owner = msg.sender;
    }

    function addCandidate(string memory _name) public {
        require(msg.sender == owner, "Only owner can add candidate");

        candidates.push(Candidate(_name, 0));
    }

    function vote(uint _candidateIndex) public {
        require(!hasVoted[msg.sender], "You have already voted");
        require(_candidateIndex < candidates.length, "Invalid candidate");

        candidates[_candidateIndex].voteCount++;

        hasVoted[msg.sender] = true;
    }

    function getCandidates() public view returns (Candidate[] memory) {
        return candidates;
    }

    function getWinner() public view returns (string memory) {
        require(candidates.length > 0, "No candidates");

        uint winningIndex = 0;

        for (uint i = 1; i < candidates.length; i++) {
            if (candidates[i].voteCount > candidates[winningIndex].voteCount) {
                winningIndex = i;
            }
        }

        return candidates[winningIndex].name;
    }
}