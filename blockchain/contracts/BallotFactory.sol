// SPDX-License-Identifier: unlicensed
pragma solidity >=0.7.0 <0.9.0;
import "./Ballot.sol";

contract BallotFactory {
    mapping(address => address) public ownerToBallot;

    function publishNewBallot(bytes32[] memory measures) public returns (address) {
        Ballot ballot = new Ballot(measures);
        ownerToBallot[msg.sender] = address(ballot);
        return ownerToBallot[msg.sender];
    }
}