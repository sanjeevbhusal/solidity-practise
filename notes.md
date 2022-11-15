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