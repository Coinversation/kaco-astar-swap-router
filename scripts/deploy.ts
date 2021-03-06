// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const PancakeRouter = await ethers.getContractFactory("PancakeRouter");
  const router = await PancakeRouter.deploy("0x72e86269b919Db5bDbF61cB1DeCfD6d14feC4D7F", "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720");

  await router.deployed();

  console.log("router deployed to:", router.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
