// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract SantasMessage {
    
    function combineWithCHristmas(string memory input) public pure returns (string memory) {
        string memory christmasMessage = "Merry Christmas!";
        return string(abi.encodePacked(input, " ", christmasMessage));
    }
}


