require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require('@openzeppelin/hardhat-upgrades');

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

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  
  },
  networks: {
    mainnet: {
      url: process.env.MAINNET_URL || "",
      chainId: 1,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      //gas: 2518637,  // Set the Max Limit, can change based on the need
      //gasPrice: 95000000000,
      //timeout: 20000,
          
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      chainId: 3,
      accounts:
        process.env.DEV_PRIVATE_KEY !== undefined ? [process.env.DEV_PRIVATE_KEY] : [],
      //gas: 2518637,  // Set the Max Limit, can change based on the need
      //gasPrice: 95000000000,
      timeout: 20000,

    },
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      chainId: 4,
      accounts:
        process.env.DEV_PRIVATE_KEY !== undefined ? [process.env.DEV_PRIVATE_KEY] : [],
      //gas: 2518637,  // Set the Max Limit, can change based on the need
      //gasPrice: 95000000000,
      timeout: 20000,

    },
    
    bsc: {
      url: process.env.BSC_URL || "",
      chainId: 56,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      //gas: 2518637,  // Set the Max Limit, can change based on the need
      //gasPrice: 95000000000,
      timeout: 20000,

    },
    bsctest: {
      url: process.env.BSCTEST_URL || "",
      chainId: 97,
      accounts:
        process.env.DEV_PRIVATE_KEY !== undefined ? [process.env.DEV_PRIVATE_KEY] : [],
      //gas: 2518637,  // Set the Max Limit, can change based on the need
      //gasPrice: 95000000000,
      timeout: 20000,

    },

    avax_cchain: {
      url: process.env.AVAX_CCHAIN_URL || "",
      chainId: 43114,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      //gas: 2518637,  // Set the Max Limit, can change based on the need
      //gasPrice: 95000000000,
      timeout: 20000,

    },
    
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }  
};
