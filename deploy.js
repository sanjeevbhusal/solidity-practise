import {ethers} from "ethers"
import {readFile} from 'fs/promises'

const RPC_URL = "http://127.0.0.1:7545"
const PRIVATE_KEY = "dedf3f1187eda2022900d7e33d56b1048197e50efd7435114f3c4fbc735c92f8"


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
    return contract
}

async function main() {
    const abi = await readFile(new URL("SimpleStorage_sol_SimpleStorage.abi", import.meta.url), "utf-8")
    const binary = await readFile(new URL("SimpleStorage_sol_SimpleStorage.bin", import.meta.url), "utf-8")

    const contractFactory = await getContractFactory(RPC_URL, PRIVATE_KEY, abi, binary)
    const contract = await deployContract(contractFactory, 1)

    let numberOfZombies = await getNumberOfZombies(contract)
    console.log(numberOfZombies)

    const transactionResponse = await contract.addZombie(1, "zombie 1")
    await transactionResponse.wait(1)

    numberOfZombies = await getNumberOfZombies(contract)
    console.log(numberOfZombies)
}

await main()


// 7: 25: 18



