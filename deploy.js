import {ethers} from "ethers"
import {readFile} from 'fs/promises'
import * as dotenv from 'dotenv'

dotenv.config()


const PRIVATE_KEY = process.env.PRIVATE_KEY
const RPC_URL = process.env.RPC_URL


async function getContractFactory(rpcUrl, privateKey, abi, binary) {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(privateKey, provider)
    return new ethers.ContractFactory(abi, binary, wallet)
}


async function getNumberOfZombies(contract) {
    let numberOfZombies = await contract.totalZombies()
    return numberOfZombies.toString()
}

async function deployContract(contractFactory, wait = 1) {
    const contract = await contractFactory.deploy()
    await contract.deployTransaction.wait(wait)
    console.log(contract.address)
    return contract
}

async function main() {
    const abi = await readFile(new URL("SimpleStorage_sol_SimpleStorage.abi", import.meta.url), "utf-8")
    const binary = await readFile(new URL("SimpleStorage_sol_SimpleStorage.bin", import.meta.url), "utf-8")

    const contractFactory = await getContractFactory(RPC_URL, PRIVATE_KEY, abi, binary)
    const contract = await deployContract(contractFactory, 1)

    // let numberOfZombies = await getNumberOfZombies(contract)
    // console.log(numberOfZombies)
    //
    // const transactionResponse = await contract.addZombie(1, "zombie 1")
    // await transactionResponse.wait(1)
    //
    // numberOfZombies = await getNumberOfZombies(contract)
    // console.log(numberOfZombies)
}

await main()


// 8: 04: 33



