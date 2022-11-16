# RPC URL

- There has to be some nodes which are taking transactions, verifying it, adding it to the next block and finally
  adding it to blockchain.
- These Nodes expose a RPC URL (just like a API). User have to send transactions request to this RPC URL.
  You can do this via code or use third party providers like metamask.
- Whenever you create a transaction, metamask will send the details of the transaction to a particular node in
  that network. It does it via RPC URL exposed by that Node.

### Local Blockchain

- Local Blockchain such as Ganache also operates on the same principle. It will have its own RPC URL. We have to send
  transaction request to that RPC URL to perform any operations on blockchain.

## JSON RPC URL CONNECTION

- every Node which exposes a RPC Url has implemented few methods. By doing a API call with library like "axios",
  we can get any information of the blockchain.

- The information about methods available and sending in the correct format is available at:
  https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/ethereum/execution-apis/assembled-spec/openrpc.json&uiSchema%5BappBar%5D%5Bui:splitView%5D=false&uiSchema%5BappBar%5D%5Bui:input%5D=false&uiSchema%5BappBar%5D%5Bui:examplesDropdown%5D=false

### Terminology

#### Provider

- A provider is something that allows us to connect to a blockchain.
  A provider provides a very simple interface (via abstraction).
- Metamask can act as a provider as it allows us to connect to any different blockchain providers.
- Libraries like Ethers.js can also act as a provider as they have functionalities to connect to different blockchain
  providers

#### Signer

- A signer is something that allows us to sign a message or a transaction.
- A signer has access to the private key.
- Metamask can act as a signer as it allows us to perform operations and signs the operation using our private key.
- Libraries like Ethers.js can also act as a signer as they have functionalities to sign the operation using our private
  key.
- Both Metamask and Ethers allows us to choose our Max Fee, Priority Fee etc.

#### Contract Factory

- Contract Factory is available in ethers library.
- It is used to deploy the contract.
- Contract Factory needs the information about contract abi, contract binary
  and information about wallet( RPC URL, private key)
- It returns a contract object

## Deploying transaction

- After deploying a transaction, you get the contract object back.
- The contract object has a property called deployTransaction.
- This property contains information about the transaction such as nonce, transaction data, gasPrice, gasLimit
  transaction hash, blockConfirmations etc.
- deployTransaction object also has a method called wait.
- The method is used to wait for certain blocks to be added to blockchain.
-
- When you deploy your transaction, you are just creating a transaction. You get transaction information in the
- contract.deployTransaction object.
- The transaction has not yet been confirmed into the block and added to the blockchain.
- So, you can wait for few blocks to be mined. Hopefully, your transaction has been added into the blockchain by now.
- Block Explorers can also now find your contract.
- The response of the wait method will be information regarding the sender address, receiver address, gasUsed,
- in which the transaction is included, etc

### Nonce (Number only used once)

- Nonce, when talking about Blockchain mining is used to solve the puzzle for consensus mechanism.
- Nonce, when talking about Wallets talks about the unique number associated with each transaction.
- wallet.getTransactionCount() gives the current nonce number of the blockchain.

### Chain Id (Network Id)

- Each blockchain has a unique chain Id.

### Creating a transaction yourself

- While deploying a contract using ethers.js, a lot of information about the transaction such as nonce, gasPrice,
  gasLimit, chainId etc are filled automatically.
- However, we can create our own transaction object by specifying all that information and use that.
