//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

contract voting {
    uint[4] votes = [0, 0, 0, 0];

    function increaseVote(uint idx) public {
        votes[idx]++;
    }

    function getVotes(uint idx) public view returns(uint){
        return votes[idx];
    }

    function getWinner() public view returns(uint) {
        uint winner = 0;
        uint maxi = 0;

        for(uint i=0; i<votes.length; i++) {
            if(votes[i] > maxi) {
                maxi = votes[i];
                winner = i;
            }
        }

        return winner;
    }
}