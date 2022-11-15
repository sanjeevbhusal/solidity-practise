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
