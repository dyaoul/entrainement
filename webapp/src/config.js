export const PRIZE_ADDRESS = '0xB8f1873eb30535aC77C7BD6cd9a0c571f2Eb86D5';

export const PRIZE_PROOF = {
        "proof": {
            "a": ["0x1d869340a63f6e442639fd57f317b2029e92449853fc8ff38da9e2d2f289d461", "0x0ebce8c3d1a33216e6613b4e7558a17249d8472beb7355d90ce6782a2e9f4dbe"],
            "b": [["0x22b25d1fa884907d7aada6de1270bb4efdf3297b81eaeeb77c4cfae51148227b", "0x0ca650ac026c4f30794aa27b75ac7f0e5f92769973d3a81f034bb26eabb6d5f8"], ["0x083383ddb6eec1e48621f8a1c1dc848fbed62fd77f4409550e6613b0b5499270", "0x28d40c3a1c75fa112d29876e6db9c6c43559960c42bd4cab114a71ace2dddd04"]],
            "c": ["0x0d81b85ea69ad365c0066e1e4befa955aa0e0e39e63001e0991ca272b09c133a", "0x07b6322270906b99da649b34012a337871756ba9ae96ee4f818ca30a721a3428"]
        },
        "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000000000000000000000000000002", "0x0000000000000000000000000000000000000000000000000000000000000003", "0x0000000000000000000000000000000000000000000000000000000000000004", "0x0000000000000000000000000000000000000000000000000000000000000001"]
    };

export const PRIZE_ABI = {
  "contractName": "MastermindPrize",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "contractMastermindVerifier",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "verifierAddress",
          "type": "address"
        }
      ],
      "name": "setVerifierAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256[2]",
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[5]",
          "name": "input",
          "type": "uint256[5]"
        }
      ],
      "name": "solve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "r",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.12+commit.7709ece9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"contractMastermindVerifier\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"verifierAddress\",\"type\":\"address\"}],\"name\":\"setVerifierAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256[2]\",\"name\":\"a\",\"type\":\"uint256[2]\"},{\"internalType\":\"uint256[2][2]\",\"name\":\"b\",\"type\":\"uint256[2][2]\"},{\"internalType\":\"uint256[2]\",\"name\":\"c\",\"type\":\"uint256[2]\"},{\"internalType\":\"uint256[5]\",\"name\":\"input\",\"type\":\"uint256[5]\"}],\"name\":\"solve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"r\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"approve(address,uint256)\":{\"details\":\"Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.\",\"params\":{\"to\":\"address to be approved for the given token ID\",\"tokenId\":\"uint256 ID of the token to be approved\"}},\"balanceOf(address)\":{\"details\":\"Gets the balance of the specified address.\",\"params\":{\"owner\":\"address to query the balance of\"},\"return\":\"uint256 representing the amount owned by the passed address\"},\"getApproved(uint256)\":{\"details\":\"Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.\",\"params\":{\"tokenId\":\"uint256 ID of the token to query the approval of\"},\"return\":\"address currently approved for the given token ID\"},\"isApprovedForAll(address,address)\":{\"details\":\"Tells whether an operator is approved by a given owner.\",\"params\":{\"operator\":\"operator address which you want to query the approval of\",\"owner\":\"owner address which you want to query the approval of\"},\"return\":\"bool whether the given operator is approved by the given owner\"},\"isOwner()\":{\"details\":\"Returns true if the caller is the current owner.\"},\"name()\":{\"details\":\"Gets the token name.\",\"return\":\"string representing the token name\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"Gets the owner of the specified token ID.\",\"params\":{\"tokenId\":\"uint256 ID of the token to query the owner of\"},\"return\":\"address currently marked as the owner of the given token ID\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\\\"onERC721Received(address,address,uint256,bytes)\\\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator\",\"params\":{\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\\\"onERC721Received(address,address,uint256,bytes)\\\"))`; otherwise, the transfer is reverted. Requires the _msgSender() to be the owner, approved, or operator\",\"params\":{\"_data\":\"bytes data to send along with a safe transfer check\",\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}},\"setApprovalForAll(address,bool)\":{\"details\":\"Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.\",\"params\":{\"approved\":\"representing the status of the approval to be set\",\"to\":\"operator address to set the approval\"}},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"Gets the token symbol.\",\"return\":\"string representing the token symbol\"},\"tokenByIndex(uint256)\":{\"details\":\"Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens.\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the tokens list\"},\"return\":\"uint256 token ID at the given index of the tokens list\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"Gets the token ID at a given index of the tokens list of the requested owner.\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the requested tokens list\",\"owner\":\"address owning the tokens list to be accessed\"},\"return\":\"uint256 token ID at the given index of the tokens list owned by the requested address\"},\"tokenURI(uint256)\":{\"details\":\"Returns an URI for a given token ID. Throws if the token ID does not exist. May return an empty string.\",\"params\":{\"tokenId\":\"uint256 ID of the token to query\"}},\"totalSupply()\":{\"details\":\"Gets the total amount of tokens stored by the contract.\",\"return\":\"uint256 representing the total amount of tokens\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers the ownership of a given token ID to another address. Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requires the msg.sender to be the owner, approved, or operator.\",\"params\":{\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/seb/Work/consensys-project/contracts/MastermindPrize.sol\":\"MastermindPrize\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/seb/Work/consensys-project/contracts/MastermindPrize.sol\":{\"keccak256\":\"0x7fd1806be2f8f12d13d49a9e153a7c1b243b7ed8e4615909e7d08ff9bf3a955e\",\"urls\":[\"bzz-raw://dea78536d216b8719dd96cfdcc927c715a83ec82e956ac04896843a84fcc8e0b\",\"dweb:/ipfs/QmVRUQg4YBYeQdzdg9X1UbVmdAu6vUFT6W8Hf865t4eSvS\"]},\"/Users/seb/Work/consensys-project/contracts/MastermindVerifier.sol\":{\"keccak256\":\"0xb9481f1d0e42b5e94692d68e12e34bb4536f52c29f7183fdc50868835cd62edf\",\"urls\":[\"bzz-raw://9b60f4b3cd77e0827c2f6d400a31538d706815f6f54a79c4a9eccae77675bae4\",\"dweb:/ipfs/QmNnWqkga2B9vQtGCt4RLkBDQ8nDbEH4wb9iUXfPiTSCwz\"]},\"openzeppelin-solidity/contracts/GSN/Context.sol\":{\"keccak256\":\"0x90a3995645af7562d84b9d69363ffa5ae7217714ab61e951bf7bc450f40e4061\",\"urls\":[\"bzz-raw://216ef9d6b614db4eb46970b4e84903f2534a45572dd30a79f0041f1a5830f436\",\"dweb:/ipfs/QmNPrJ4MWKUAWzKXpUqeyKRUfosaoANZAqXgvepdrCwZAG\"]},\"openzeppelin-solidity/contracts/drafts/Counters.sol\":{\"keccak256\":\"0xf1267d23aae72ba9bef7bbef542a658645e1e2a125d107978a0907f6693d43a1\",\"urls\":[\"bzz-raw://35227fc5f4ed2b123ba30d04b8887b7b8e0c492e3947663c08b2bc310e4da17e\",\"dweb:/ipfs/QmYGavckDLSHAtxSXpGgCWzAdAFdeMDDALJdeJawyqP1Ha\"]},\"openzeppelin-solidity/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0x01aedbf24e121a744262e04c7815b2a4c8ce604dee4829c5cff00943a594ccf3\",\"urls\":[\"bzz-raw://999ab32a6498d8ad8db61d47c3774aae2ff919acceebe2aeb50879bef62642c3\",\"dweb:/ipfs/QmephAYF5hoymu9qCFK6mURM2kZJCxU4ntUb4KTf1miVPT\"]},\"openzeppelin-solidity/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xe0ed10f53955c35eecb02724538650a155aa940be3f0a54cd3bde6c6b0c6e48c\",\"urls\":[\"bzz-raw://7dcfda88e3225987245908c3296f3559752647036804325ebfaa9fd1545161c3\",\"dweb:/ipfs/QmXxx5rHfLL57zdgyyyG9MMv4XGN7bpVSc2MuDcaCgto6u\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x640b6dee7a4b830bdfd52b5031a07fc2b12209f5b2e29e5d364a7d37f69d8076\",\"urls\":[\"bzz-raw://31113152e1ddb78fe7a4197f247591ca894e93f916867beb708d8e747b6cc74f\",\"dweb:/ipfs/QmbZaJyXdpsYGykVhHH9qpVGQg9DGCxE2QufbCUy3daTgq\"]},\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xecd8ab29d9a5771c3964d0cd1788c4a5098a0081b20fb275da850a22b1c59806\",\"urls\":[\"bzz-raw://696a75bc2c55407ce8251ccc7d19ecb1b7b2be1796a160a6524312babcc7e3d4\",\"dweb:/ipfs/QmQViKEp3y99h9uhRssE29TmjBKRnFMaoz3eJZ4eggggg2\"]},\"openzeppelin-solidity/contracts/token/erc721/ERC721.sol\":{\"keccak256\":\"0x250605d58768f7b91ca896baa3001f0109d1c2dd071e97edfd6d9c0ca354a49a\",\"urls\":[\"bzz-raw://d0d716ef508742bcf3887e95a2011d3fcecb87635ba18b823c884162073d0aee\",\"dweb:/ipfs/QmcuEV6mQR15VdUrBEtLT56NcPQeM654SF8WaGNKtsj6Lz\"]},\"openzeppelin-solidity/contracts/token/erc721/ERC721Enumerable.sol\":{\"keccak256\":\"0x28f4e41b86db783cd8daf9fdec839ce5930332b60f6dc9ac4992dfb584997e79\",\"urls\":[\"bzz-raw://6f1b545ec9e1f0284e86ddd4ffff353e1ab5e026bbbfaa2a5d2d791c39d7afd7\",\"dweb:/ipfs/Qmf9rVfj6LreiE7NHkkT1S7eLbSQDDY1gKd9XWERx2AN7W\"]},\"openzeppelin-solidity/contracts/token/erc721/ERC721Metadata.sol\":{\"keccak256\":\"0xb62b21b93eaf635c372306f05e273a404ae263d14c4e1e4217daf731254edc84\",\"urls\":[\"bzz-raw://7267d17afc55debcbe6be8f2922cd337f41198ee53adc263e1a01df3a9175a06\",\"dweb:/ipfs/QmTKtQs4dXX8fCDqd12d9wmxJUDzyHXXRp3AYthATkthAo\"]},\"openzeppelin-solidity/contracts/token/erc721/IERC721.sol\":{\"keccak256\":\"0x680c11bc8173eef7d5db843baaf64ce499476de2c172f6aea631dbee54bcd2e6\",\"urls\":[\"bzz-raw://0f314963ab26fb65c6f364d57900f0f1aa8f6aeb4396e327e5e5c646815f060e\",\"dweb:/ipfs/Qmf6eSUtRUF4YDxGyhQq7TVDYzuHcYEvk9Us3RVy5iZQVH\"]},\"openzeppelin-solidity/contracts/token/erc721/IERC721Enumerable.sol\":{\"keccak256\":\"0x5c573acd6c7b98d71f3c1c44d63dc17400b0fd7b26a52c9fded43b8b533dc4ec\",\"urls\":[\"bzz-raw://e23af54444d2dbfae58895339eb7b189e1ba5d0b7abde63716e7ef7da23b2fde\",\"dweb:/ipfs/QmZva7dE1SMd1yyizzc6ivSoBXXwpNveLV7iFNATNpq68Y\"]},\"openzeppelin-solidity/contracts/token/erc721/IERC721Metadata.sol\":{\"keccak256\":\"0x2b2b99dc7fe8fcd1f9427d00822b99cbc683dc21f5dd7532bd7e2281fd2c2ca2\",\"urls\":[\"bzz-raw://a8024c00e34efaf328f9592e76823c79f25fa0f6006bdf4a1e7fea204afd4773\",\"dweb:/ipfs/QmZns9jTr7843njq3J2iL2LLoWXK5mdzN1bDGd9GL3ahhD\"]},\"openzeppelin-solidity/contracts/token/erc721/IERC721Receiver.sol\":{\"keccak256\":\"0x042048c375daca04b31e31c91bbae912b84b5eb818c4e31b2deb530fd2305342\",\"urls\":[\"bzz-raw://d877a87c5e29b9ffca3e334378058c051a4e012fd3635039681003a9376baf1f\",\"dweb:/ipfs/QmR45snf93cFXtB71TZcmoGy9DbcMha8CqgkDKaLvhjXZK\"]},\"openzeppelin-solidity/contracts/utils/Address.sol\":{\"keccak256\":\"0x70df50e240407aa50915ad14f61b1a901fa335b37de20955b99ed647be756af0\",\"urls\":[\"bzz-raw://9404711f3206610c08ea97fa52c7b6b4d2e9d536e96fc4b7210aa7e24f796c36\",\"dweb:/ipfs/QmZDzpVzjoap13SuPEq5pVCrmdjoKVZnTsQPLKXAbynTTW\"]}},\"version\":1}",
  "bytecode": "0x60806040526040518060400160405280600e81526020017f4d61737465726d696e64436f696e0000000000000000000000000000000000008152506040518060400160405280600381526020017f4d4d43000000000000000000000000000000000000000000000000000000000081525062000080620001d560201b60201c565b6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3620001536301ffc9a760e01b620001dd60201b60201c565b6200016b6380ac58cd60e01b620001dd60201b60201c565b6200018363780e9d6360e01b620001dd60201b60201c565b81600a90805190602001906200019b929190620002e6565b5080600b9080519060200190620001b4929190620002e6565b50620001cd635b5e139f60e01b620001dd60201b60201c565b505062000395565b600033905090565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156200027a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200032957805160ff19168380011785556200035a565b828001600101855582156200035a579182015b82811115620003595782518255916020019190600101906200033c565b5b5090506200036991906200036d565b5090565b6200039291905b808211156200038e57600081600090555060010162000374565b5090565b90565b612d2d80620003a56000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80636352211e116100c357806395d89b411161007c57806395d89b41146107d7578063a22cb4651461085a578063b88d4fde146108aa578063c87b56dd146109af578063e985e9c514610a56578063f2fde38b14610ad25761014d565b80636352211e1461052257806370a0823114610590578063715018a6146105e85780638cfd29b9146105f25780638da5cb5b1461076b5780638f32d59b146107b55761014d565b806317e955261161011557806317e955261461034057806318160ddd1461038457806323b872dd146103a25780632f745c591461041057806342842e0e146104725780634f6ccce7146104e05761014d565b806301ffc9a71461015257806306fdde03146101b7578063081812fc1461023a578063095ea7b3146102a85780630de16a83146102f6575b600080fd5b61019d6004803603602081101561016857600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b16565b604051808215151515815260200191505060405180910390f35b6101bf610b7e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ff5780820151818401526020810190506101e4565b50505050905090810190601f16801561022c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102666004803603602081101561025057600080fd5b8101908080359060200190929190505050610c20565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102f4600480360360408110156102be57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610cbb565b005b6102fe610ea2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103826004803603602081101561035657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ec8565b005b61038c610f0c565b6040518082815260200191505060405180910390f35b61040e600480360360608110156103b857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f19565b005b61045c6004803603604081101561042657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f8f565b6040518082815260200191505060405180910390f35b6104de6004803603606081101561048857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061104e565b005b61050c600480360360208110156104f657600080fd5b810190808035906020019092919050505061106e565b6040518082815260200191505060405180910390f35b61054e6004803603602081101561053857600080fd5b81019080803590602001909291905050506110ee565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105d2600480360360208110156105a657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111b6565b6040518082815260200191505060405180910390f35b6105f061128b565b005b61075160048036036101a081101561060957600080fd5b8101908080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b828210156106be578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f8201169050808301925050505050508152602001906001019061066a565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060a001906005806020026040519081016040528092919082600560200280828437600081840152601f19601f82011690508083019250505050505091929192905050506113c4565b604051808215151515815260200191505060405180910390f35b6107736115ea565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107bd611613565b604051808215151515815260200191505060405180910390f35b6107df611671565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561081f578082015181840152602081019050610804565b50505050905090810190601f16801561084c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6108a86004803603604081101561087057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611713565b005b6109ad600480360360808110156108c057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561092757600080fd5b82018360208201111561093957600080fd5b8035906020019184600183028401116401000000008311171561095b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506118cb565b005b6109db600480360360208110156109c557600080fd5b8101908080359060200190929190505050611943565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a1b578082015181840152602081019050610a00565b50505050905090810190601f168015610a485780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610ab860048036036040811015610a6c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a56565b604051808215151515815260200191505060405180910390f35b610b1460048036036020811015610ae857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611aea565b005b600060016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6060600a8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c165780601f10610beb57610100808354040283529160200191610c16565b820191906000526020600020905b815481529060010190602001808311610bf957829003601f168201915b5050505050905090565b6000610c2b82611b70565b610c80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612bf7602c913960400191505060405180910390fd5b6003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610cc6826110ee565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612c7b6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610d6c611be2565b73ffffffffffffffffffffffffffffffffffffffff161480610d9b5750610d9a81610d95611be2565b611a56565b5b610df0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180612b6c6038913960400191505060405180910390fd5b826003600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600880549050905090565b610f2a610f24611be2565b82611bea565b610f7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612c9c6031913960400191505060405180910390fd5b610f8a838383611cde565b505050565b6000610f9a836111b6565b8210610ff1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180612a99602b913960400191505060405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061103b57fe5b9060005260206000200154905092915050565b611069838383604051806020016040528060008152506118cb565b505050565b6000611078610f0c565b82106110cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612ccd602c913960400191505060405180910390fd5b600882815481106110dc57fe5b90600052602060002001549050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156111ad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612bce6029913960400191505060405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561123d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612ba4602a913960400191505060405180910390fd5b611284600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d02565b9050919050565b611293611613565b611305576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600080600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166333a5bae4878787876040518563ffffffff1660e01b81526004018085600260200280838360005b83811015611443578082015181840152602081019050611428565b505050509050018460026000925b818410156114975782846020020151600260200280838360005b8381101561148657808201518184015260208101905061146b565b505050509050019260010192611451565b9250505083600260200280838360005b838110156114c25780820151818401526020810190506114a7565b5050505090500182600560200280838360005b838110156114f05780820151818401526020810190506114d5565b50505050905001945050505050602060405180830381600087803b15801561151757600080fd5b505af115801561152b573d6000803e3d6000fd5b505050506040513d602081101561154157600080fd5b81019080805190602001909291905050509050806115c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f496e636f727265637420736f6c7574696f6e000000000000000000000000000081525060200191505060405180910390fd5b600060016115d3610f0c565b0190506115e03382611d10565b5050949350505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611655611be2565b73ffffffffffffffffffffffffffffffffffffffff1614905090565b6060600b8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117095780601f106116de57610100808354040283529160200191611709565b820191906000526020600020905b8154815290600101906020018083116116ec57829003601f168201915b5050505050905090565b61171b611be2565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b80600560006117c9611be2565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611876611be2565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6118dc6118d6611be2565b83611bea565b611931576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612c9c6031913960400191505060405180910390fd5b61193d84848484611d31565b50505050565b606061194e82611b70565b6119a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612c4c602f913960400191505060405180910390fd5b600c60008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a4a5780601f10611a1f57610100808354040283529160200191611a4a565b820191906000526020600020905b815481529060010190602001808311611a2d57829003601f168201915b50505050509050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611af2611613565b611b64576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b611b6d81611da3565b50565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600033905090565b6000611bf582611b70565b611c4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612b40602c913960400191505060405180910390fd5b6000611c55836110ee565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611cc457508373ffffffffffffffffffffffffffffffffffffffff16611cac84610c20565b73ffffffffffffffffffffffffffffffffffffffff16145b80611cd55750611cd48185611a56565b5b91505092915050565b611ce9838383611ee7565b611cf38382612142565b611cfd82826122e0565b505050565b600081600001549050919050565b611d1a82826123a7565b611d2482826122e0565b611d2d816125bf565b5050565b611d3c848484611cde565b611d488484848461260b565b611d9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180612ac46032913960400191505060405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611e29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612af66026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b8273ffffffffffffffffffffffffffffffffffffffff16611f07826110ee565b73ffffffffffffffffffffffffffffffffffffffff1614611f73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612c236029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611ff9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612b1c6024913960400191505060405180910390fd5b612002816127fb565b612049600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206128b9565b612090600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206128dc565b816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061219a6001600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506128f290919063ffffffff16565b9050600060076000848152602001908152602001600020549050818114612287576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838154811061220757fe5b9060005260206000200154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838154811061225f57fe5b9060005260206000200181905550816007600083815260200190815260200160002081905550505b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036122d99190612a47565b5050505050565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506007600083815260200190815260200160002081905550600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561244a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b61245381611b70565b156124c6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061255f600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206128dc565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b600061262c8473ffffffffffffffffffffffffffffffffffffffff1661293c565b61263957600190506127f3565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a0261265f611be2565b8887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561271b578082015181840152602081019050612700565b50505050905090810190601f1680156127485780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561276a57600080fd5b505af115801561277e573d6000803e3d6000fd5b505050506040513d602081101561279457600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146128b65760006003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6128d1600182600001546128f290919063ffffffff16565b816000018190555050565b6001816000016000828254019250508190555050565b600061293483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612987565b905092915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f91506000801b821415801561297e5750808214155b92505050919050565b6000838311158290612a34576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156129f95780820151818401526020810190506129de565b50505050905090810190601f168015612a265780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b815481835581811115612a6e57818360005260206000209182019101612a6d9190612a73565b5b505050565b612a9591905b80821115612a91576000816000905550600101612a79565b5090565b9056fe455243373231456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243373231456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e6473a265627a7a7231582059e8bea27a542108d37c2f9f2c672646fc95034cd09c430c8dceab05f15ac68164736f6c634300050c0032",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061014d5760003560e01c80636352211e116100c357806395d89b411161007c57806395d89b41146107d7578063a22cb4651461085a578063b88d4fde146108aa578063c87b56dd146109af578063e985e9c514610a56578063f2fde38b14610ad25761014d565b80636352211e1461052257806370a0823114610590578063715018a6146105e85780638cfd29b9146105f25780638da5cb5b1461076b5780638f32d59b146107b55761014d565b806317e955261161011557806317e955261461034057806318160ddd1461038457806323b872dd146103a25780632f745c591461041057806342842e0e146104725780634f6ccce7146104e05761014d565b806301ffc9a71461015257806306fdde03146101b7578063081812fc1461023a578063095ea7b3146102a85780630de16a83146102f6575b600080fd5b61019d6004803603602081101561016857600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b16565b604051808215151515815260200191505060405180910390f35b6101bf610b7e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ff5780820151818401526020810190506101e4565b50505050905090810190601f16801561022c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102666004803603602081101561025057600080fd5b8101908080359060200190929190505050610c20565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102f4600480360360408110156102be57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610cbb565b005b6102fe610ea2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103826004803603602081101561035657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ec8565b005b61038c610f0c565b6040518082815260200191505060405180910390f35b61040e600480360360608110156103b857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f19565b005b61045c6004803603604081101561042657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f8f565b6040518082815260200191505060405180910390f35b6104de6004803603606081101561048857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061104e565b005b61050c600480360360208110156104f657600080fd5b810190808035906020019092919050505061106e565b6040518082815260200191505060405180910390f35b61054e6004803603602081101561053857600080fd5b81019080803590602001909291905050506110ee565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105d2600480360360208110156105a657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111b6565b6040518082815260200191505060405180910390f35b6105f061128b565b005b61075160048036036101a081101561060957600080fd5b8101908080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b828210156106be578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f8201169050808301925050505050508152602001906001019061066a565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060a001906005806020026040519081016040528092919082600560200280828437600081840152601f19601f82011690508083019250505050505091929192905050506113c4565b604051808215151515815260200191505060405180910390f35b6107736115ea565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107bd611613565b604051808215151515815260200191505060405180910390f35b6107df611671565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561081f578082015181840152602081019050610804565b50505050905090810190601f16801561084c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6108a86004803603604081101561087057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611713565b005b6109ad600480360360808110156108c057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561092757600080fd5b82018360208201111561093957600080fd5b8035906020019184600183028401116401000000008311171561095b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506118cb565b005b6109db600480360360208110156109c557600080fd5b8101908080359060200190929190505050611943565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a1b578082015181840152602081019050610a00565b50505050905090810190601f168015610a485780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610ab860048036036040811015610a6c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a56565b604051808215151515815260200191505060405180910390f35b610b1460048036036020811015610ae857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611aea565b005b600060016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6060600a8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c165780601f10610beb57610100808354040283529160200191610c16565b820191906000526020600020905b815481529060010190602001808311610bf957829003601f168201915b5050505050905090565b6000610c2b82611b70565b610c80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612bf7602c913960400191505060405180910390fd5b6003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610cc6826110ee565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612c7b6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610d6c611be2565b73ffffffffffffffffffffffffffffffffffffffff161480610d9b5750610d9a81610d95611be2565b611a56565b5b610df0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180612b6c6038913960400191505060405180910390fd5b826003600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600880549050905090565b610f2a610f24611be2565b82611bea565b610f7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612c9c6031913960400191505060405180910390fd5b610f8a838383611cde565b505050565b6000610f9a836111b6565b8210610ff1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180612a99602b913960400191505060405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061103b57fe5b9060005260206000200154905092915050565b611069838383604051806020016040528060008152506118cb565b505050565b6000611078610f0c565b82106110cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612ccd602c913960400191505060405180910390fd5b600882815481106110dc57fe5b90600052602060002001549050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156111ad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612bce6029913960400191505060405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561123d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612ba4602a913960400191505060405180910390fd5b611284600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d02565b9050919050565b611293611613565b611305576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600080600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166333a5bae4878787876040518563ffffffff1660e01b81526004018085600260200280838360005b83811015611443578082015181840152602081019050611428565b505050509050018460026000925b818410156114975782846020020151600260200280838360005b8381101561148657808201518184015260208101905061146b565b505050509050019260010192611451565b9250505083600260200280838360005b838110156114c25780820151818401526020810190506114a7565b5050505090500182600560200280838360005b838110156114f05780820151818401526020810190506114d5565b50505050905001945050505050602060405180830381600087803b15801561151757600080fd5b505af115801561152b573d6000803e3d6000fd5b505050506040513d602081101561154157600080fd5b81019080805190602001909291905050509050806115c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f496e636f727265637420736f6c7574696f6e000000000000000000000000000081525060200191505060405180910390fd5b600060016115d3610f0c565b0190506115e03382611d10565b5050949350505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611655611be2565b73ffffffffffffffffffffffffffffffffffffffff1614905090565b6060600b8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117095780601f106116de57610100808354040283529160200191611709565b820191906000526020600020905b8154815290600101906020018083116116ec57829003601f168201915b5050505050905090565b61171b611be2565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b80600560006117c9611be2565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611876611be2565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6118dc6118d6611be2565b83611bea565b611931576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612c9c6031913960400191505060405180910390fd5b61193d84848484611d31565b50505050565b606061194e82611b70565b6119a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612c4c602f913960400191505060405180910390fd5b600c60008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a4a5780601f10611a1f57610100808354040283529160200191611a4a565b820191906000526020600020905b815481529060010190602001808311611a2d57829003601f168201915b50505050509050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611af2611613565b611b64576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b611b6d81611da3565b50565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600033905090565b6000611bf582611b70565b611c4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612b40602c913960400191505060405180910390fd5b6000611c55836110ee565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611cc457508373ffffffffffffffffffffffffffffffffffffffff16611cac84610c20565b73ffffffffffffffffffffffffffffffffffffffff16145b80611cd55750611cd48185611a56565b5b91505092915050565b611ce9838383611ee7565b611cf38382612142565b611cfd82826122e0565b505050565b600081600001549050919050565b611d1a82826123a7565b611d2482826122e0565b611d2d816125bf565b5050565b611d3c848484611cde565b611d488484848461260b565b611d9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180612ac46032913960400191505060405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611e29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612af66026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b8273ffffffffffffffffffffffffffffffffffffffff16611f07826110ee565b73ffffffffffffffffffffffffffffffffffffffff1614611f73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612c236029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611ff9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612b1c6024913960400191505060405180910390fd5b612002816127fb565b612049600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206128b9565b612090600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206128dc565b816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061219a6001600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506128f290919063ffffffff16565b9050600060076000848152602001908152602001600020549050818114612287576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838154811061220757fe5b9060005260206000200154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838154811061225f57fe5b9060005260206000200181905550816007600083815260200190815260200160002081905550505b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036122d99190612a47565b5050505050565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506007600083815260200190815260200160002081905550600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561244a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b61245381611b70565b156124c6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061255f600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206128dc565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b600061262c8473ffffffffffffffffffffffffffffffffffffffff1661293c565b61263957600190506127f3565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a0261265f611be2565b8887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561271b578082015181840152602081019050612700565b50505050905090810190601f1680156127485780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561276a57600080fd5b505af115801561277e573d6000803e3d6000fd5b505050506040513d602081101561279457600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146128b65760006003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6128d1600182600001546128f290919063ffffffff16565b816000018190555050565b6001816000016000828254019250508190555050565b600061293483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612987565b905092915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f91506000801b821415801561297e5750808214155b92505050919050565b6000838311158290612a34576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156129f95780820151818401526020810190506129de565b50505050905090810190601f168015612a265780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b815481835581811115612a6e57818360005260206000209182019101612a6d9190612a73565b5b505050565b612a9591905b80821115612a91576000816000905550600101612a79565b5090565b9056fe455243373231456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243373231456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e6473a265627a7a7231582059e8bea27a542108d37c2f9f2c672646fc95034cd09c430c8dceab05f15ac68164736f6c634300050c0032",
  "sourceMap": "363:729:0:-;;;794:254:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;707:12:8;:10;;;:12;;:::i;:::-;698:6;;:21;;;;;;;;;;;;;;;;;;767:6;;;;;;;;;;;734:40;;763:1;734:40;;;;;;;;;;;;718::5;385:10;737:20;;718:18;;;:40;;:::i;:::-;2262::9;2136:10;2281:20;;2262:18;;;:40;;:::i;:::-;1357:51:10;1172:10;1376:31;;1357:18;;;:51;;:::i;:::-;874:4:11;866:5;:12;;;;;;;;;;;;:::i;:::-;;898:6;888:7;:16;;;;;;;;;;;;:::i;:::-;;992:49;728:10;1011:29;;992:18;;;:49;;:::i;:::-;794:254;;363:729:0;;788:96:3;833:15;867:10;860:17;;788:96;:::o;1442:190:5:-;1532:10;1517:25;;:11;:25;;;;;1509:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1621:4;1585:20;:33;1606:11;1585:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1442:190;:::o;363:729:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "363:729:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;363:729:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;915:133:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;915:133:5;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1153:83:11;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1153:83:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4283:200:9;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4283:200:9;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3583:415;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3583:415:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;462:41:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;508:160;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;508:160:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;2171:94:10;;;:::i;:::-;;;;;;;;;;;;;;;;;;;5929:287:9;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5929:287:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1789:229:10;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1789:229:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;6865:132:9;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6865:132:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2603:196:10;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2603:196:10;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2939:223:9;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2939:223:9;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2513:207;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2513:207:9;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1642:137:8;;;:::i;:::-;;672:418:0;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;672:418:0;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;672:418:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;672:418:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;672:418:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;672:418:0;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;857:77:8;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1208:92;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1345:87:11;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1345:87:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4776:249:9;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4776:249:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;7720:269;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;7720:269:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;7720:269:9;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7720:269:9;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7720:269:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;7720:269:9;;;;;;;;;;;;;;;:::i;:::-;;1632:202:11;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1632:202:11;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1632:202:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5347:145:9;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5347:145:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1928:107:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1928:107:8;;;;;;;;;;;;;;;;;;;:::i;:::-;;915:133:5;985:4;1008:20;:33;1029:11;1008:33;;;;;;;;;;;;;;;;;;;;;;;;;;;1001:40;;915:133;;;:::o;1153:83:11:-;1192:13;1224:5;1217:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1153:83;:::o;4283:200:9:-;4342:7;4369:16;4377:7;4369;:16::i;:::-;4361:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4452:15;:24;4468:7;4452:24;;;;;;;;;;;;;;;;;;;;;4445:31;;4283:200;;;:::o;3583:415::-;3646:13;3662:16;3670:7;3662;:16::i;:::-;3646:32;;3702:5;3696:11;;:2;:11;;;;3688:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3780:5;3764:21;;:12;:10;:12::i;:::-;:21;;;:62;;;;3789:37;3806:5;3813:12;:10;:12::i;:::-;3789:16;:37::i;:::-;3764:62;3756:152;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3946:2;3919:15;:24;3935:7;3919:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;3983:7;3979:2;3963:28;;3972:5;3963:28;;;;;;;;;;;;3583:415;;;:::o;462:41:0:-;;;;;;;;;;;;;:::o;508:160::-;648:15;619:26;;:44;;;;;;;;;;;;;;;;;;508:160;:::o;2171:94:10:-;2215:7;2241:10;:17;;;;2234:24;;2171:94;:::o;5929:287:9:-;6071:41;6090:12;:10;:12::i;:::-;6104:7;6071:18;:41::i;:::-;6063:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6177:32;6191:4;6197:2;6201:7;6177:13;:32::i;:::-;5929:287;;;:::o;1789:229:10:-;1869:7;1904:16;1914:5;1904:9;:16::i;:::-;1896:5;:24;1888:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1985:12;:19;1998:5;1985:19;;;;;;;;;;;;;;;2005:5;1985:26;;;;;;;;;;;;;;;;1978:33;;1789:229;;;;:::o;6865:132:9:-;6951:39;6968:4;6974:2;6978:7;6951:39;;;;;;;;;;;;:16;:39::i;:::-;6865:132;;;:::o;2603:196:10:-;2661:7;2696:13;:11;:13::i;:::-;2688:5;:21;2680:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2775:10;2786:5;2775:17;;;;;;;;;;;;;;;;2768:24;;2603:196;;;:::o;2939:223:9:-;2994:7;3013:13;3029:11;:20;3041:7;3029:20;;;;;;;;;;;;;;;;;;;;;3013:36;;3084:1;3067:19;;:5;:19;;;;3059:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3150:5;3143:12;;;2939:223;;;:::o;2513:207::-;2568:7;2612:1;2595:19;;:5;:19;;;;2587:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2679:34;:17;:24;2697:5;2679:24;;;;;;;;;;;;;;;:32;:34::i;:::-;2672:41;;2513:207;;;:::o;1642:137:8:-;1061:9;:7;:9::i;:::-;1053:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1740:1;1703:40;;1724:6;;;;;;;;;;;1703:40;;;;;;;;;;;;1770:1;1753:6;;:19;;;;;;;;;;;;;;;;;;1642:137::o;672:418:0:-;830:6;846:11;879:26;;;;;;;;;;;860:55;;;916:1;919;922;925:5;860:71;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;860:71:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;860:71:0;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;860:71:0;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;860:71:0;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;860:71:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;860:71:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;860:71:0;;;;;;;;;;;;;;;;846:85;;947:6;939:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;985:12;1033:1;1000:30;:28;:30::i;:::-;:34;985:49;;1042:43;1065:10;1077:7;1042:22;:43::i;:::-;672:418;;;;;;;;:::o;857:77:8:-;895:7;921:6;;;;;;;;;;;914:13;;857:77;:::o;1208:92::-;1248:4;1287:6;;;;;;;;;;;1271:22;;:12;:10;:12::i;:::-;:22;;;1264:29;;1208:92;:::o;1345:87:11:-;1386:13;1418:7;1411:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1345:87;:::o;4776:249:9:-;4861:12;:10;:12::i;:::-;4855:18;;:2;:18;;;;4847:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4953:8;4914:18;:32;4933:12;:10;:12::i;:::-;4914:32;;;;;;;;;;;;;;;:36;4947:2;4914:36;;;;;;;;;;;;;;;;:47;;;;;;;;;;;;;;;;;;5005:2;4976:42;;4991:12;:10;:12::i;:::-;4976:42;;;5009:8;4976:42;;;;;;;;;;;;;;;;;;;;;;4776:249;;:::o;7720:269::-;7834:41;7853:12;:10;:12::i;:::-;7867:7;7834:18;:41::i;:::-;7826:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7939:43;7957:4;7963:2;7967:7;7976:5;7939:17;:43::i;:::-;7720:269;;;;:::o;1632:202:11:-;1690:13;1723:16;1731:7;1723;:16::i;:::-;1715:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1808:10;:19;1819:7;1808:19;;;;;;;;;;;1801:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1632:202;;;:::o;5347:145:9:-;5427:4;5450:18;:25;5469:5;5450:25;;;;;;;;;;;;;;;:35;5476:8;5450:35;;;;;;;;;;;;;;;;;;;;;;;;;5443:42;;5347:145;;;;:::o;1928:107:8:-;1061:9;:7;:9::i;:::-;1053:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2000:28;2019:8;2000:18;:28::i;:::-;1928:107;:::o;9158:152:9:-;9215:4;9231:13;9247:11;:20;9259:7;9247:20;;;;;;;;;;;;;;;;;;;;;9231:36;;9301:1;9284:19;;:5;:19;;;;9277:26;;;9158:152;;;:::o;788:96:3:-;833:15;867:10;860:17;;788:96;:::o;9671:329:9:-;9756:4;9780:16;9788:7;9780;:16::i;:::-;9772:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9855:13;9871:16;9879:7;9871;:16::i;:::-;9855:32;;9916:5;9905:16;;:7;:16;;;:51;;;;9949:7;9925:31;;:20;9937:7;9925:11;:20::i;:::-;:31;;;9905:51;:87;;;;9960:32;9977:5;9984:7;9960:16;:32::i;:::-;9905:87;9897:96;;;9671:329;;;;:::o;3174:239:10:-;3259:38;3279:4;3285:2;3289:7;3259:19;:38::i;:::-;3308:47;3341:4;3347:7;3308:32;:47::i;:::-;3366:40;3394:2;3398:7;3366:27;:40::i;:::-;3174:239;;;:::o;1065:112:4:-;1130:7;1156;:14;;;1149:21;;1065:112;;;:::o;3670:196:10:-;3733:24;3745:2;3749:7;3733:11;:24::i;:::-;3768:40;3796:2;3800:7;3768:27;:40::i;:::-;3819;3851:7;3819:31;:40::i;:::-;3670:196;;:::o;8694:269:9:-;8803:32;8817:4;8823:2;8827:7;8803:13;:32::i;:::-;8853:48;8876:4;8882:2;8886:7;8895:5;8853:22;:48::i;:::-;8845:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8694:269;;;;:::o;2136:225:8:-;2229:1;2209:22;;:8;:22;;;;2201:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2318:8;2289:38;;2310:6;;;;;;;;;;;2289:38;;;;;;;;;;;;2346:8;2337:6;;:17;;;;;;;;;;;;;;;;;;2136:225;:::o;13281:447:9:-;13394:4;13374:24;;:16;13382:7;13374;:16::i;:::-;:24;;;13366:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13476:1;13462:16;;:2;:16;;;;13454:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13530:23;13545:7;13530:14;:23::i;:::-;13564:35;:17;:23;13582:4;13564:23;;;;;;;;;;;;;;;:33;:35::i;:::-;13609:33;:17;:21;13627:2;13609:21;;;;;;;;;;;;;;;:31;:33::i;:::-;13676:2;13653:11;:20;13665:7;13653:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;13713:7;13709:2;13694:27;;13703:4;13694:27;;;;;;;;;;;;13281:447;;;:::o;6284:1128:10:-;6546:22;6571:32;6601:1;6571:12;:18;6584:4;6571:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;6546:57;;6613:18;6634:17;:26;6652:7;6634:26;;;;;;;;;;;;6613:47;;6778:14;6764:10;:28;6760:323;;6808:19;6830:12;:18;6843:4;6830:18;;;;;;;;;;;;;;;6849:14;6830:34;;;;;;;;;;;;;;;;6808:56;;6912:11;6879:12;:18;6892:4;6879:18;;;;;;;;;;;;;;;6898:10;6879:30;;;;;;;;;;;;;;;:44;;;;7028:10;6995:17;:30;7013:11;6995:30;;;;;;;;;;;:43;;;;6760:323;;7169:12;:18;7182:4;7169:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;6284:1128;;;;:::o;5128:183::-;5241:12;:16;5254:2;5241:16;;;;;;;;;;;;;;;:23;;;;5212:17;:26;5230:7;5212:26;;;;;;;;;;;:52;;;;5274:12;:16;5287:2;5274:16;;;;;;;;;;;;;;;5296:7;5274:30;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;5274:30:10;;;;;;;;;;;;;;;;;;;;;;5128:183;;:::o;11714:327:9:-;11799:1;11785:16;;:2;:16;;;;11777:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11857:16;11865:7;11857;:16::i;:::-;11856:17;11848:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11940:2;11917:11;:20;11929:7;11917:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;11952:33;:17;:21;11970:2;11952:21;;;;;;;;;;;;;;;:31;:33::i;:::-;12026:7;12022:2;12001:33;;12018:1;12001:33;;;;;;;;;;;;11714:327;;:::o;5506:161:10:-;5609:10;:17;;;;5582:15;:24;5598:7;5582:24;;;;;;;;;;;:44;;;;5636:10;5652:7;5636:24;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;5636:24:10;;;;;;;;;;;;;;;;;;;;;;5506:161;:::o;14317:349:9:-;14438:4;14463:15;:2;:13;;;:15::i;:::-;14458:58;;14501:4;14494:11;;;;14458:58;14526:13;14558:2;14542:36;;;14579:12;:10;:12::i;:::-;14593:4;14599:7;14608:5;14542:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;14542:72:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;14542:72:9;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;14542:72:9;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14542:72:9;;;;;;;;;;;;;;;;14526:88;;754:10;14642:16;;14632:26;;;:6;:26;;;;14624:35;;;14317:349;;;;;;;:::o;14828:171::-;14927:1;14891:38;;:15;:24;14907:7;14891:24;;;;;;;;;;;;;;;;;;;;;:38;;;14887:106;;14980:1;14945:15;:24;14961:7;14945:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;14887:106;14828:171;:::o;1278:108:4:-;1358:21;1377:1;1358:7;:14;;;:18;;:21;;;;:::i;:::-;1341:7;:14;;:38;;;;1278:108;:::o;1183:89::-;1264:1;1246:7;:14;;;:19;;;;;;;;;;;1183:89;:::o;1274:134:7:-;1332:7;1358:43;1362:1;1365;1358:43;;;;;;;;;;;;;;;;;:3;:43::i;:::-;1351:50;;1274:134;;;;:::o;557:797:16:-;617:4;1062:16;1088:19;1110:66;1088:88;;;;1277:7;1265:20;1253:32;;1316:3;1304:15;;:8;:15;;:42;;;;;1335:11;1323:8;:23;;1304:42;1296:51;;;;557:797;;;:::o;1732:187:7:-;1818:7;1850:1;1845;:6;;1853:12;1837:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1837:29:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1876:9;1892:1;1888;:5;1876:17;;1911:1;1904:8;;;1732:187;;;;;:::o;363:729:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.5.0;\n\nimport 'openzeppelin-solidity/contracts/token/erc721/ERC721Enumerable.sol';\nimport 'openzeppelin-solidity/contracts/token/erc721/ERC721Metadata.sol';\nimport \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport \"./MastermindVerifier.sol\";\n\n// We are creating a non fungible ERC token to accomodate all different potential games\ncontract MastermindPrize is Ownable, ERC721Enumerable, ERC721Metadata(\"MastermindCoin\", \"MMC\") {\n  address public contractMastermindVerifier;\n\n  function setVerifierAddress(address verifierAddress) public {\n    // Only the owner can call this function\n    contractMastermindVerifier = verifierAddress;\n  }\n\n  function solve(\n          uint[2] memory a,\n          uint[2][2] memory b,\n          uint[2] memory c,\n          uint[5] memory input\n      ) public returns (bool r) {\n      bool result = MastermindVerifier(contractMastermindVerifier).verifyTx(a, b, c, input);\n      require(result, \"Incorrect solution\");\n\n      uint tokenId = ERC721Enumerable.totalSupply() + 1;\n      ERC721Enumerable._mint(msg.sender, tokenId);\n  }\n}\n",
  "sourcePath": "/Users/seb/Work/consensys-project/contracts/MastermindPrize.sol",
  "ast": {
    "absolutePath": "/Users/seb/Work/consensys-project/contracts/MastermindPrize.sol",
    "exportedSymbols": {
      "MastermindPrize": [
        83
      ]
    },
    "id": 84,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/erc721/ERC721Enumerable.sol",
        "file": "openzeppelin-solidity/contracts/token/erc721/ERC721Enumerable.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 84,
        "sourceUnit": 4143,
        "src": "25:75:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/erc721/ERC721Metadata.sol",
        "file": "openzeppelin-solidity/contracts/token/erc721/ERC721Metadata.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 84,
        "sourceUnit": 4275,
        "src": "101:73:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 84,
        "sourceUnit": 3166,
        "src": "175:63:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/seb/Work/consensys-project/contracts/MastermindVerifier.sol",
        "file": "./MastermindVerifier.sol",
        "id": 5,
        "nodeType": "ImportDirective",
        "scope": 84,
        "sourceUnit": 2690,
        "src": "239:34:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 6,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3165,
              "src": "391:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$3165",
                "typeString": "contract Ownable"
              }
            },
            "id": 7,
            "nodeType": "InheritanceSpecifier",
            "src": "391:7:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8,
              "name": "ERC721Enumerable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4142,
              "src": "400:16:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Enumerable_$4142",
                "typeString": "contract ERC721Enumerable"
              }
            },
            "id": 9,
            "nodeType": "InheritanceSpecifier",
            "src": "400:16:0"
          },
          {
            "arguments": [
              {
                "argumentTypes": null,
                "hexValue": "4d61737465726d696e64436f696e",
                "id": 11,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "string",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "433:16:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_stringliteral_3713480b0d8efbe704e06c3979d4b1039fa2a2ac69e1afa60ca93ff36810b77d",
                  "typeString": "literal_string \"MastermindCoin\""
                },
                "value": "MastermindCoin"
              },
              {
                "argumentTypes": null,
                "hexValue": "4d4d43",
                "id": 12,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "string",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "451:5:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_stringliteral_4fc1f7d1181cb702f4d7fd78bafe860596cb1496c547504a9394035f93a3c0be",
                  "typeString": "literal_string \"MMC\""
                },
                "value": "MMC"
              }
            ],
            "baseName": {
              "contractScope": null,
              "id": 10,
              "name": "ERC721Metadata",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4274,
              "src": "418:14:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Metadata_$4274",
                "typeString": "contract ERC721Metadata"
              }
            },
            "id": 13,
            "nodeType": "InheritanceSpecifier",
            "src": "418:39:0"
          }
        ],
        "contractDependencies": [
          2753,
          2854,
          2864,
          3165,
          3802,
          4142,
          4274,
          4377,
          4404,
          4427
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 83,
        "linearizedBaseContracts": [
          83,
          4274,
          4427,
          4142,
          4404,
          3802,
          4377,
          2854,
          2864,
          3165,
          2753
        ],
        "name": "MastermindPrize",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 15,
            "name": "contractMastermindVerifier",
            "nodeType": "VariableDeclaration",
            "scope": 83,
            "src": "462:41:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 14,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "462:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 24,
              "nodeType": "Block",
              "src": "568:100:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 22,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 20,
                      "name": "contractMastermindVerifier",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15,
                      "src": "619:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 21,
                      "name": "verifierAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17,
                      "src": "648:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "619:44:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 23,
                  "nodeType": "ExpressionStatement",
                  "src": "619:44:0"
                }
              ]
            },
            "documentation": null,
            "id": 25,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setVerifierAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 18,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17,
                  "name": "verifierAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 25,
                  "src": "536:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "536:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "535:25:0"
            },
            "returnParameters": {
              "id": 19,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "568:0:0"
            },
            "scope": 83,
            "src": "508:160:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 81,
              "nodeType": "Block",
              "src": "838:252:0",
              "statements": [
                {
                  "assignments": [
                    49
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 49,
                      "name": "result",
                      "nodeType": "VariableDeclaration",
                      "scope": 81,
                      "src": "846:11:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 48,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "846:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 59,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 54,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29,
                        "src": "916:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 55,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35,
                        "src": "919:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 56,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 39,
                        "src": "922:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 57,
                        "name": "input",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43,
                        "src": "925:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$5_memory_ptr",
                          "typeString": "uint256[5] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$5_memory_ptr",
                          "typeString": "uint256[5] memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 51,
                            "name": "contractMastermindVerifier",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15,
                            "src": "879:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 50,
                          "name": "MastermindVerifier",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2689,
                          "src": "860:18:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_MastermindVerifier_$2689_$",
                            "typeString": "type(contract MastermindVerifier)"
                          }
                        },
                        "id": 52,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "860:46:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MastermindVerifier_$2689",
                          "typeString": "contract MastermindVerifier"
                        }
                      },
                      "id": 53,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "verifyTx",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2688,
                      "src": "860:55:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$5_memory_ptr_$returns$_t_bool_$",
                        "typeString": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[5] memory) external returns (bool)"
                      }
                    },
                    "id": 58,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "860:71:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "846:85:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 61,
                        "name": "result",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "947:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "496e636f727265637420736f6c7574696f6e",
                        "id": 62,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "955:20:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_cafa6a1b80c2bfa8fe099ca6f245f1916eb60faae5f6b502c3e693523340585f",
                          "typeString": "literal_string \"Incorrect solution\""
                        },
                        "value": "Incorrect solution"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_cafa6a1b80c2bfa8fe099ca6f245f1916eb60faae5f6b502c3e693523340585f",
                          "typeString": "literal_string \"Incorrect solution\""
                        }
                      ],
                      "id": 60,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4536,
                        4537
                      ],
                      "referencedDeclaration": 4537,
                      "src": "939:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 63,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "939:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 64,
                  "nodeType": "ExpressionStatement",
                  "src": "939:37:0"
                },
                {
                  "assignments": [
                    66
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 66,
                      "name": "tokenId",
                      "nodeType": "VariableDeclaration",
                      "scope": 81,
                      "src": "985:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 65,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "985:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 72,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 71,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 67,
                          "name": "ERC721Enumerable",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4142,
                          "src": "1000:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC721Enumerable_$4142_$",
                            "typeString": "type(contract ERC721Enumerable)"
                          }
                        },
                        "id": 68,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "totalSupply",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3877,
                        "src": "1000:28:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 69,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1000:30:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 70,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1033:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1000:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "985:49:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 76,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4533,
                          "src": "1065:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 77,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1065:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66,
                        "src": "1077:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 73,
                        "name": "ERC721Enumerable",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4142,
                        "src": "1042:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC721Enumerable_$4142_$",
                          "typeString": "type(contract ERC721Enumerable)"
                        }
                      },
                      "id": 75,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3949,
                      "src": "1042:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 79,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1042:43:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 80,
                  "nodeType": "ExpressionStatement",
                  "src": "1042:43:0"
                }
              ]
            },
            "documentation": null,
            "id": 82,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "solve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 44,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "698:16:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "698:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 28,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 27,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "703:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "698:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "726:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                    "typeString": "uint256[2][2]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 30,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "726:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 32,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 31,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "731:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "726:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                        "typeString": "uint256[2]"
                      }
                    },
                    "id": 34,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 33,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "734:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "726:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_uint256_$2_storage_$2_storage_ptr",
                      "typeString": "uint256[2][2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "757:16:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 36,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "757:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 38,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 37,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "762:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "757:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43,
                  "name": "input",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "785:20:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$5_memory_ptr",
                    "typeString": "uint256[5]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 40,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "785:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 42,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "35",
                      "id": 41,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "790:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_5_by_1",
                        "typeString": "int_const 5"
                      },
                      "value": "5"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "785:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$5_storage_ptr",
                      "typeString": "uint256[5]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "686:127:0"
            },
            "returnParameters": {
              "id": 47,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46,
                  "name": "r",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "830:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 45,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "830:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "829:8:0"
            },
            "scope": 83,
            "src": "672:418:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 84,
        "src": "363:729:0"
      }
    ],
    "src": "0:1093:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/seb/Work/consensys-project/contracts/MastermindPrize.sol",
    "exportedSymbols": {
      "MastermindPrize": [
        83
      ]
    },
    "id": 84,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/erc721/ERC721Enumerable.sol",
        "file": "openzeppelin-solidity/contracts/token/erc721/ERC721Enumerable.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 84,
        "sourceUnit": 4143,
        "src": "25:75:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/erc721/ERC721Metadata.sol",
        "file": "openzeppelin-solidity/contracts/token/erc721/ERC721Metadata.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 84,
        "sourceUnit": 4275,
        "src": "101:73:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 84,
        "sourceUnit": 3166,
        "src": "175:63:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/seb/Work/consensys-project/contracts/MastermindVerifier.sol",
        "file": "./MastermindVerifier.sol",
        "id": 5,
        "nodeType": "ImportDirective",
        "scope": 84,
        "sourceUnit": 2690,
        "src": "239:34:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 6,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3165,
              "src": "391:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$3165",
                "typeString": "contract Ownable"
              }
            },
            "id": 7,
            "nodeType": "InheritanceSpecifier",
            "src": "391:7:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8,
              "name": "ERC721Enumerable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4142,
              "src": "400:16:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Enumerable_$4142",
                "typeString": "contract ERC721Enumerable"
              }
            },
            "id": 9,
            "nodeType": "InheritanceSpecifier",
            "src": "400:16:0"
          },
          {
            "arguments": [
              {
                "argumentTypes": null,
                "hexValue": "4d61737465726d696e64436f696e",
                "id": 11,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "string",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "433:16:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_stringliteral_3713480b0d8efbe704e06c3979d4b1039fa2a2ac69e1afa60ca93ff36810b77d",
                  "typeString": "literal_string \"MastermindCoin\""
                },
                "value": "MastermindCoin"
              },
              {
                "argumentTypes": null,
                "hexValue": "4d4d43",
                "id": 12,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "string",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "451:5:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_stringliteral_4fc1f7d1181cb702f4d7fd78bafe860596cb1496c547504a9394035f93a3c0be",
                  "typeString": "literal_string \"MMC\""
                },
                "value": "MMC"
              }
            ],
            "baseName": {
              "contractScope": null,
              "id": 10,
              "name": "ERC721Metadata",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4274,
              "src": "418:14:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Metadata_$4274",
                "typeString": "contract ERC721Metadata"
              }
            },
            "id": 13,
            "nodeType": "InheritanceSpecifier",
            "src": "418:39:0"
          }
        ],
        "contractDependencies": [
          2753,
          2854,
          2864,
          3165,
          3802,
          4142,
          4274,
          4377,
          4404,
          4427
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 83,
        "linearizedBaseContracts": [
          83,
          4274,
          4427,
          4142,
          4404,
          3802,
          4377,
          2854,
          2864,
          3165,
          2753
        ],
        "name": "MastermindPrize",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 15,
            "name": "contractMastermindVerifier",
            "nodeType": "VariableDeclaration",
            "scope": 83,
            "src": "462:41:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 14,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "462:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 24,
              "nodeType": "Block",
              "src": "568:100:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 22,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 20,
                      "name": "contractMastermindVerifier",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15,
                      "src": "619:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 21,
                      "name": "verifierAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17,
                      "src": "648:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "619:44:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 23,
                  "nodeType": "ExpressionStatement",
                  "src": "619:44:0"
                }
              ]
            },
            "documentation": null,
            "id": 25,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setVerifierAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 18,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17,
                  "name": "verifierAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 25,
                  "src": "536:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "536:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "535:25:0"
            },
            "returnParameters": {
              "id": 19,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "568:0:0"
            },
            "scope": 83,
            "src": "508:160:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 81,
              "nodeType": "Block",
              "src": "838:252:0",
              "statements": [
                {
                  "assignments": [
                    49
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 49,
                      "name": "result",
                      "nodeType": "VariableDeclaration",
                      "scope": 81,
                      "src": "846:11:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 48,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "846:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 59,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 54,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29,
                        "src": "916:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 55,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35,
                        "src": "919:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 56,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 39,
                        "src": "922:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 57,
                        "name": "input",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43,
                        "src": "925:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$5_memory_ptr",
                          "typeString": "uint256[5] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$5_memory_ptr",
                          "typeString": "uint256[5] memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 51,
                            "name": "contractMastermindVerifier",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15,
                            "src": "879:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 50,
                          "name": "MastermindVerifier",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2689,
                          "src": "860:18:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_MastermindVerifier_$2689_$",
                            "typeString": "type(contract MastermindVerifier)"
                          }
                        },
                        "id": 52,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "860:46:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MastermindVerifier_$2689",
                          "typeString": "contract MastermindVerifier"
                        }
                      },
                      "id": 53,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "verifyTx",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2688,
                      "src": "860:55:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$5_memory_ptr_$returns$_t_bool_$",
                        "typeString": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[5] memory) external returns (bool)"
                      }
                    },
                    "id": 58,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "860:71:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "846:85:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 61,
                        "name": "result",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "947:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "496e636f727265637420736f6c7574696f6e",
                        "id": 62,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "955:20:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_cafa6a1b80c2bfa8fe099ca6f245f1916eb60faae5f6b502c3e693523340585f",
                          "typeString": "literal_string \"Incorrect solution\""
                        },
                        "value": "Incorrect solution"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_cafa6a1b80c2bfa8fe099ca6f245f1916eb60faae5f6b502c3e693523340585f",
                          "typeString": "literal_string \"Incorrect solution\""
                        }
                      ],
                      "id": 60,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4536,
                        4537
                      ],
                      "referencedDeclaration": 4537,
                      "src": "939:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 63,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "939:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 64,
                  "nodeType": "ExpressionStatement",
                  "src": "939:37:0"
                },
                {
                  "assignments": [
                    66
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 66,
                      "name": "tokenId",
                      "nodeType": "VariableDeclaration",
                      "scope": 81,
                      "src": "985:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 65,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "985:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 72,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 71,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 67,
                          "name": "ERC721Enumerable",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4142,
                          "src": "1000:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC721Enumerable_$4142_$",
                            "typeString": "type(contract ERC721Enumerable)"
                          }
                        },
                        "id": 68,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "totalSupply",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3877,
                        "src": "1000:28:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 69,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1000:30:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 70,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1033:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1000:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "985:49:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 76,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4533,
                          "src": "1065:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 77,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1065:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66,
                        "src": "1077:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 73,
                        "name": "ERC721Enumerable",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4142,
                        "src": "1042:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC721Enumerable_$4142_$",
                          "typeString": "type(contract ERC721Enumerable)"
                        }
                      },
                      "id": 75,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3949,
                      "src": "1042:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 79,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1042:43:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 80,
                  "nodeType": "ExpressionStatement",
                  "src": "1042:43:0"
                }
              ]
            },
            "documentation": null,
            "id": 82,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "solve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 44,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "698:16:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "698:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 28,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 27,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "703:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "698:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "726:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                    "typeString": "uint256[2][2]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 30,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "726:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 32,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 31,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "731:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "726:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                        "typeString": "uint256[2]"
                      }
                    },
                    "id": 34,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 33,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "734:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "726:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_uint256_$2_storage_$2_storage_ptr",
                      "typeString": "uint256[2][2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "757:16:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 36,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "757:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 38,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 37,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "762:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "757:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43,
                  "name": "input",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "785:20:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$5_memory_ptr",
                    "typeString": "uint256[5]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 40,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "785:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 42,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "35",
                      "id": 41,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "790:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_5_by_1",
                        "typeString": "int_const 5"
                      },
                      "value": "5"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "785:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$5_storage_ptr",
                      "typeString": "uint256[5]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "686:127:0"
            },
            "returnParameters": {
              "id": 47,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46,
                  "name": "r",
                  "nodeType": "VariableDeclaration",
                  "scope": 82,
                  "src": "830:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 45,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "830:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "829:8:0"
            },
            "scope": 83,
            "src": "672:418:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 84,
        "src": "363:729:0"
      }
    ],
    "src": "0:1093:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.12+commit.7709ece9.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event",
          "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event",
          "signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
        },
        "0x0b74498aea845b0415417b0f5042412eb39d090dc3c984c777c8542a375f2500": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256[2]",
              "name": "real_color",
              "type": "uint256[2]"
            }
          ],
          "name": "GameAdded",
          "type": "event",
          "signature": "0x0b74498aea845b0415417b0f5042412eb39d090dc3c984c777c8542a375f2500"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event",
          "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event",
          "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
        }
      },
      "links": {},
      "address": "0xDa70c2E245B5624547db10d31DffB639c5509b12",
      "transactionHash": "0x9572d37e1883da2507189cb6e6eb7b93d81ead630f286367b7a224e0827cc1ae"
    }
  },
  "schemaVersion": "3.0.19",
  "updatedAt": "2020-01-28T06:28:47.783Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {
      "approve(address,uint256)": {
        "details": "Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.",
        "params": {
          "to": "address to be approved for the given token ID",
          "tokenId": "uint256 ID of the token to be approved"
        }
      },
      "balanceOf(address)": {
        "details": "Gets the balance of the specified address.",
        "params": {
          "owner": "address to query the balance of"
        },
        "return": "uint256 representing the amount owned by the passed address"
      },
      "getApproved(uint256)": {
        "details": "Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.",
        "params": {
          "tokenId": "uint256 ID of the token to query the approval of"
        },
        "return": "address currently approved for the given token ID"
      },
      "isApprovedForAll(address,address)": {
        "details": "Tells whether an operator is approved by a given owner.",
        "params": {
          "operator": "operator address which you want to query the approval of",
          "owner": "owner address which you want to query the approval of"
        },
        "return": "bool whether the given operator is approved by the given owner"
      },
      "isOwner()": {
        "details": "Returns true if the caller is the current owner."
      },
      "name()": {
        "details": "Gets the token name.",
        "return": "string representing the token name"
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "ownerOf(uint256)": {
        "details": "Gets the owner of the specified token ID.",
        "params": {
          "tokenId": "uint256 ID of the token to query the owner of"
        },
        "return": "address currently marked as the owner of the given token ID"
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator",
        "params": {
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the _msgSender() to be the owner, approved, or operator",
        "params": {
          "_data": "bytes data to send along with a safe transfer check",
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "setApprovalForAll(address,bool)": {
        "details": "Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.",
        "params": {
          "approved": "representing the status of the approval to be set",
          "to": "operator address to set the approval"
        }
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas."
      },
      "symbol()": {
        "details": "Gets the token symbol.",
        "return": "string representing the token symbol"
      },
      "tokenByIndex(uint256)": {
        "details": "Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens.",
        "params": {
          "index": "uint256 representing the index to be accessed of the tokens list"
        },
        "return": "uint256 token ID at the given index of the tokens list"
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "Gets the token ID at a given index of the tokens list of the requested owner.",
        "params": {
          "index": "uint256 representing the index to be accessed of the requested tokens list",
          "owner": "address owning the tokens list to be accessed"
        },
        "return": "uint256 token ID at the given index of the tokens list owned by the requested address"
      },
      "tokenURI(uint256)": {
        "details": "Returns an URI for a given token ID. Throws if the token ID does not exist. May return an empty string.",
        "params": {
          "tokenId": "uint256 ID of the token to query"
        }
      },
      "totalSupply()": {
        "details": "Gets the total amount of tokens stored by the contract.",
        "return": "uint256 representing the total amount of tokens"
      },
      "transferFrom(address,address,uint256)": {
        "details": "Transfers the ownership of a given token ID to another address. Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requires the msg.sender to be the owner, approved, or operator.",
        "params": {
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}
