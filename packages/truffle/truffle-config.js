require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const MNEMONIC = process.env.MNEMONIC || 'test test test test test test test test test test test junk';


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, 'https://rpc.ankr.com/eth_goerli'),
      network_id: 5,
    },
    bsc: {
      provider: () => new HDWalletProvider(MNEMONIC, 'https://bsc-dataseed.binance.org'),
      network_id: 56,
    },
    arbitrum: {
      provider: () => new HDWalletProvider(MNEMONIC, 'https://arb1.arbitrum.io/rpc'),
      network_id: 42161,
    },
    'bsc-testnet': {
      provider: () => new HDWalletProvider(MNEMONIC, 'https://bsc-testnet.publicnode.com'),
      network_id: 97,
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
      }
    }
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: process.env.etherscan,
    bscscan: process.env.bscscan
  },
};
