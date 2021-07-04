/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */


const PrivateKeyProvider = require("truffle-privatekey-provider");

const gasPrice = 500000000; //process.env.GASPRICE;
const privateKey = "2a7a1d3043cec99a1b23d7dd6188a26b9626427acc10b5298f26e97efdffafbe";
const network = "http://bops.morpheuslabs.io:23036"
// const privateKey = "eaafe8a2221a1d023fe55fd9df3f6784ae91746863e279b9f7a286722cbc6d22";
// const network = "http://localhost:7545"

// const getGasPrice = async function() {
//   let err, res;
//   [err, res] = await to (axios.get('https://www.etherchain.org/api/gasPriceOracle')).then(response => response.data.standard);
//
//   if (err) {
//     gasPrice = 10000000000;
//   } else {
//     gasPrice = res;
//   }
// };
// getGasPrice();

module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    // network for unit testing
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
      gas: 5000000,
    },
    development: {              // ganache development
      provider: function() {
        // return new HDWalletProvider(mnemonic, infuraMain)
        return new PrivateKeyProvider(privateKey, network)
      },
      network_id: "*",
      gas: 6000000,
      gasPrice: gasPrice
    }
  }
};
