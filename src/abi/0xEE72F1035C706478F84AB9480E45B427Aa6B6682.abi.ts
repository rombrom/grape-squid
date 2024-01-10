export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "initialOwner_"
            },
            {
                "type": "uint256",
                "name": "ticketPrice_"
            },
            {
                "type": "uint256",
                "name": "maxTicketsPerBuyer_"
            },
            {
                "type": "uint256",
                "name": "startDate_"
            },
            {
                "type": "uint256",
                "name": "endDate_"
            }
        ]
    },
    {
        "type": "error",
        "name": "AlreadyRefunded",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidAmount",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidMerkleProof",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OwnableInvalidOwner",
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableUnauthorizedAccount",
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ]
    },
    {
        "type": "error",
        "name": "RefundClosed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RefundFailed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RefundMerkleRootAlreadySet",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SaleClosed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SaleNotClosed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TicketLimitReached",
        "inputs": []
    },
    {
        "type": "error",
        "name": "WithdrawAllFailed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "WithdrawAllNotEligible",
        "inputs": []
    },
    {
        "type": "error",
        "name": "WithdrawFailed",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TicketsBought",
        "inputs": [
            {
                "type": "address",
                "name": "wallet",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "count",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TicketsRefunded",
        "inputs": [
            {
                "type": "address",
                "name": "wallet",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "count",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "balances",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "buyer"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "buyTickets",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "numberOfTickets_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "endDate",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "finalizeSale",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "refundMerkleRoot_"
            },
            {
                "type": "uint256",
                "name": "numberOfWinningTickets_"
            },
            {
                "type": "address",
                "name": "to_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "maxTicketsPerBuyer",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "refundMerkleRoot",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "refundTickets",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "ticketsToRefund_"
            },
            {
                "type": "bytes32[]",
                "name": "merkleProof_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "refunds",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "buyer"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "startDate",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "ticketPrice",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "withdrawAll",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "to_"
            }
        ],
        "outputs": []
    }
]
