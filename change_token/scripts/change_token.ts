import { ethers } from "hardhat";

async function main() {
  const ChangeToken = await ethers.getContractFactory("ChangeToken");
  const changeToken = await ChangeToken.deploy("ChangeGifuToken","CGT");

  await changeToken.deployed();

  console.log(`deployed to ${changeToken.address}`);

  const amount = "10000000000000000000000000000000";
  await changeToken.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0", amount);
  console.log(`minted. amount is : ${amount}`);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
