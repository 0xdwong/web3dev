require('dotenv').config();
const { PROJECT_ID } = process.env;
const HDWalletProvider = require('@truffle/hdwallet-provider');
const MNEMONIC = process.env.MNEMONIC || 'test test test test test test test test test test test junk';


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
  },
  mocha: {
    timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.8.19",
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  },
};
