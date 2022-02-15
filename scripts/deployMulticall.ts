import { ethers } from "hardhat";

async function main() {
  // We get the contract to deploy
  const multicall = await ethers.getContractFactory("contracts/libraries/Multicall.sol:Multicall");
  const multi = await multicall.deploy();

  await multi.deployed();

  console.log("multicall deployed to:", multi.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
