import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const { privateKey } = require('./private.json');

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    localhost: {
      url:"http://localhost:8545",
      chainId:31337,
      accounts: [privateKey],
    },
    shibuya: {
      url:"https://shibuya.public.blastapi.io",
      chainId:81,
      accounts: [privateKey],
    }
  },
};

export default config;
