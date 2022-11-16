import {ethers} from "ethers"
import {readFile} from 'fs/promises'

const RPC_URL = "http://127.0.0.1:7545"
const PRIVATE_KEY = "d5ef53d0255868caa4bb5f0452650a06792467a8edeb667deaf9075c18ca4bfc"

// create a provider
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

// create a complete wallet (i.e. it acts as provider and signer both)
const wallet = new ethers.Wallet(PRIVATE_KEY, provider)

// get both abi and binary file. binary file is deployed in the blockchain. abi is used to create a javascript object
// to interact with the contract.
const abi = await readFile(new URL("SimpleStorage_sol_SimpleStorage.abi", import.meta.url), "utf-8")
const binary = await readFile(new URL("SimpleStorage_sol_SimpleStorage.bin", import.meta.url), "utf-8")

// create a contract factory
const contractFactory = new ethers.ContractFactory(abi, binary, wallet)

// you can pass overrides like maxGasFee, priorityFee etc to deploy function
console.log("Deploying the contract")
const contract = await contractFactory.deploy()
const transactionInformation = contract.deployTransaction
console.log("-------------------------------")
const transactionReceipt = await contract.deployTransaction.wait(1)


// 7: 12: 18



