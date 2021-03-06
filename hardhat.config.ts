import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomiclabs/hardhat-solpp";
import { mnemonic, BSCSCANAPIKEY} from '../secret.json';

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    shibuyaTestnet: {
      url: "https://rpc.shibuya.astar.network:8545",
      chainId: 81,
      gasPrice: 1000000000,
      accounts: {mnemonic: mnemonic}
    },
    shidenMainnet: {
      url: "https://rpc.shiden.astar.network:8545",
      chainId: 336,
      gasPrice: 1000000000,
      accounts: {mnemonic: mnemonic}
    },
    astarMainnet: {
      url: "https://rpc.astar.network:8545/",
      chainId: 592,
      gasPrice: 1000000000,
      accounts: {mnemonic: mnemonic}
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solpp: {
    noFlatten: true
  }
};

export default config;
