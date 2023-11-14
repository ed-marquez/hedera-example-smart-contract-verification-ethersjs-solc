# Run this on GitPod
💻 [Click here to run on GitPod](https://gitpod.io#https://github.com/ed-marquez/hedera-example-smart-contract-verification-ethersjs-solc)

## Instructions
- Open click the GitPod link (installs all dependencies - ethers, dotenv, solc)
- Edit the `.env_SAMPLE` file with your credentials and rename it to `.env`
- Enter the following commands in the terminal:

  `solc --bin --abi --metadata -o contracts contracts/InventoryLookup.sol`
  - You should see something like:
  - ![image](https://github.com/ed-marquez/hedera-example-smart-contract-verification-ethersjs-solc/assets/72571340/3ef24bca-f5bf-4bf4-9973-40090571c476)
  
  `node index.js`
  - You should see something like:
  - ![image](https://github.com/ed-marquez/hedera-example-smart-contract-verification-ethersjs-solc/assets/72571340/1b949f8f-9233-41f8-88b9-bcd019466539)
