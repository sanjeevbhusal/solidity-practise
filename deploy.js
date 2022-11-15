const RPC_URL = "http://127.0.0.1:7545"
const PRIVATE_KEY = "644d4385379409d625ce3a4197b43da2ecd3e4851a4e59e03341df8201e595bb"
import axios from "axios"
import {ethers} from "ethers"

// Doing manually using "axios"
async function manualDeploy() {
    let payload = {"method": "eth_accounts"}
    try {
        let res = await axios.post(RPC_URL, payload)
        return res.data.result
    } catch (e) {
        console.log(e)
    }
}

// Doing Using Ethers.js library
async function ethersDeploy() {
    const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
    return await provider.listAccounts()
}

let accountsList1 = await manualDeploy()
let accountsList2 = await ethersDeploy()
console.log(accountsList1.length === accountsList2.length)

