import {ethers} from "ethers"
import {readFile} from 'fs/promises'

const RPC_URL = "http://127.0.0.1:7545"
const PRIVATE_KEY = "644d4385379409d625ce3a4197b43da2ecd3e4851a4e59e03341df8201e595bb"

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
console.log(contract)



