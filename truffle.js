const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require('fs');

const MNEMONIC = process.env.MNEMONIC_PHRASE;
const INFURA_API_KEY = process.env.INFURA_API_KEY;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 6500000,
      network_id: "*",
      gasPrice: 7000000000
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/"+INFURA_API_KEY)
      },
      network_id: 3,
      gas: 6500000
    }
  },
  mocha: {
    enableTimeouts: false,
    useColors:      true,
    bail:           false
  },
  solc: {
    optimizer: {
        enabled: true,
        runs:    200
    }
  },
  compilers: {
    solc: {
        version: "0.4.25"
    }
  }
};
