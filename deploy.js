const RPC_URL = "http://127.0.0.1:7545"
import axios from "axios"

function deploy() {
    let payload = {'params': [0, true], "method": "eth_getBlockByNumber"}
    axios.post(RPC_URL, payload).then(res => console.log(res.data.result)).catch(err => console.log(err))
}

deploy()