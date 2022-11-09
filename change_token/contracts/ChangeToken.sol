// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";
import "hardhat/console.sol";

contract ChangeToken is ERC20PresetMinterPauser{
    /** 
    * constructor
    */
    constructor(string memory name,string memory symbol) ERC20PresetMinterPauser(name,symbol) {}
}