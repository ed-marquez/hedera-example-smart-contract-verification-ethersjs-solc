console.clear();

import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();

import { ethers, ContractFactory } from "ethers";
import fs from "fs";

const abi = fs.readFileSync("./contracts/InventoryLookup.abi").toString();
const bytecode = fs.readFileSync("./contracts/InventoryLookup.bin").toString();

const network = "testnet";
const explorerURL = `https://hashscan.io/${network}`;

const provider = new ethers.providers.JsonRpcProvider(`https://${network}.hashio.io/api`);
const signer = new ethers.Wallet(process.env.OPERATOR_PVKEY_HEX, provider);

async function main() {
	// STEP 1 ===================================
	console.log(`\nSTEP 1 ===================================\n`);
	console.log(`- Deploy the smart contract...\n`);

	let gasLimit = 4000000;

	// Parameters to pass to the constructor of the contract
	const itemName = "Spaceships";
	const itemAmount = 150;

	const newContract = new ContractFactory(abi, bytecode, signer);
	const contractDeployTx = await newContract.deploy(itemName, itemAmount, { gasLimit: gasLimit });
	const contractDeployRx = await contractDeployTx.deployTransaction.wait();
	const contractAddress = contractDeployRx.contractAddress;
	console.log(`- Contract deployed to address: ${contractAddress} ✅`);
	console.log(`- See details in HashScan: \n ${explorerURL}/address/${contractAddress} \n `);

	console.log(`
====================================================
🎉🎉 THE END - NOW JOIN: https://hedera.com/discord
====================================================\n`);
}
main();
