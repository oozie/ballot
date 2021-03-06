// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "truffle/Assert.sol";
import "../contracts/Ballot.sol";

contract BallotTest {
   
    bytes32[] proposalNames;
   
    Ballot ballotToTest;
    function beforeAll () public {
        proposalNames.push(bytes32("candidate1"));
        ballotToTest = new Ballot(proposalNames);
    }
    
    function testCheckWinningProposal () public {
        ballotToTest.vote(0);
        Assert.equal(ballotToTest.winningProposal(), uint(0), "proposal at index 0 should be the winning proposal");
        Assert.equal(ballotToTest.winnerName(), bytes32("candidate1"), "candidate1 should be the winner name");
    }
    
    function testCheckProposalCount() public {
        Assert.equal(ballotToTest.proposalCount(), uint(1), "number of proposals should be returned");
    }
    
}
