export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "name"
            },
            {
                "type": "string",
                "name": "symbol"
            },
            {
                "type": "address[]",
                "name": "allowedSeaDrop"
            }
        ]
    },
    {
        "type": "error",
        "name": "AlreadyInitialized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ApprovalCallerNotOwnerNorApproved",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ApprovalQueryForNonexistentToken",
        "inputs": []
    },
    {
        "type": "error",
        "name": "BalanceQueryForZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CannotExceedMaxSupplyOfUint64",
        "inputs": [
            {
                "type": "uint256",
                "name": "newMaxSupply"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidRoyaltyBasisPoints",
        "inputs": [
            {
                "type": "uint256",
                "name": "basisPoints"
            }
        ]
    },
    {
        "type": "error",
        "name": "MintERC2309QuantityExceedsLimit",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MintQuantityExceedsMaxSupply",
        "inputs": [
            {
                "type": "uint256",
                "name": "total"
            },
            {
                "type": "uint256",
                "name": "maxSupply"
            }
        ]
    },
    {
        "type": "error",
        "name": "MintToZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MintZeroQuantity",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NewOwnerIsZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotNextOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OnlyAllowedSeaDrop",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OnlyOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OperatorNotAllowed",
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnerQueryForNonexistentToken",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OwnershipNotInitializedForExtraData",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ProvenanceHashCannotBeSetAfterMintStarted",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RoyaltyAddressCannotBeZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SignersMismatch",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TokenGatedMismatch",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TransferCallerNotOwnerNorApproved",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TransferFromIncorrectOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TransferToNonERC721ReceiverImplementer",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TransferToZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "URIQueryForNonexistentToken",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AllowedSeaDropUpdated",
        "inputs": [
            {
                "type": "address[]",
                "name": "allowedSeaDrop"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Approval",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "approved",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ApprovalForAll",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "approved",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BatchMetadataUpdate",
        "inputs": [
            {
                "type": "uint256",
                "name": "_fromTokenId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "_toTokenId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ConsecutiveTransfer",
        "inputs": [
            {
                "type": "uint256",
                "name": "fromTokenId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "toTokenId",
                "indexed": false
            },
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ContractURIUpdated",
        "inputs": [
            {
                "type": "string",
                "name": "newContractURI",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MaxSupplyUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "newMaxSupply",
                "indexed": false
            }
        ]
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
        "name": "PotentialOwnerUpdated",
        "inputs": [
            {
                "type": "address",
                "name": "newPotentialAdministrator",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ProvenanceHashUpdated",
        "inputs": [
            {
                "type": "bytes32",
                "name": "previousHash",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "newHash",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoyaltyInfoUpdated",
        "inputs": [
            {
                "type": "address",
                "name": "receiver",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "bps",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SeaDropTokenDeployed",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "OPERATOR_FILTER_REGISTRY",
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
        "name": "acceptOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "approve",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "balanceOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
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
        "name": "baseURI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "cancelOwnershipTransfer",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "contractURI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "emitBatchMetadataUpdate",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "fromTokenId"
            },
            {
                "type": "uint256",
                "name": "toTokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getApproved",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getMintStats",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "minter"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "minterNumMinted"
            },
            {
                "type": "uint256",
                "name": "currentTotalSupply"
            },
            {
                "type": "uint256",
                "name": "maxSupply"
            }
        ]
    },
    {
        "type": "function",
        "name": "isApprovedForAll",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "address",
                "name": "operator"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "maxSupply",
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
        "name": "mintSeaDrop",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "minter"
            },
            {
                "type": "uint256",
                "name": "quantity"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "multiConfigure",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "config",
                "components": [
                    {
                        "type": "uint256",
                        "name": "maxSupply"
                    },
                    {
                        "type": "string",
                        "name": "baseURI"
                    },
                    {
                        "type": "string",
                        "name": "contractURI"
                    },
                    {
                        "type": "address",
                        "name": "seaDropImpl"
                    },
                    {
                        "type": "tuple",
                        "name": "publicDrop",
                        "components": [
                            {
                                "type": "uint80",
                                "name": "mintPrice"
                            },
                            {
                                "type": "uint48",
                                "name": "startTime"
                            },
                            {
                                "type": "uint48",
                                "name": "endTime"
                            },
                            {
                                "type": "uint16",
                                "name": "maxTotalMintableByWallet"
                            },
                            {
                                "type": "uint16",
                                "name": "feeBps"
                            },
                            {
                                "type": "bool",
                                "name": "restrictFeeRecipients"
                            }
                        ]
                    },
                    {
                        "type": "string",
                        "name": "dropURI"
                    },
                    {
                        "type": "tuple",
                        "name": "allowListData",
                        "components": [
                            {
                                "type": "bytes32",
                                "name": "merkleRoot"
                            },
                            {
                                "type": "string[]",
                                "name": "publicKeyURIs"
                            },
                            {
                                "type": "string",
                                "name": "allowListURI"
                            }
                        ]
                    },
                    {
                        "type": "address",
                        "name": "creatorPayoutAddress"
                    },
                    {
                        "type": "bytes32",
                        "name": "provenanceHash"
                    },
                    {
                        "type": "address[]",
                        "name": "allowedFeeRecipients"
                    },
                    {
                        "type": "address[]",
                        "name": "disallowedFeeRecipients"
                    },
                    {
                        "type": "address[]",
                        "name": "allowedPayers"
                    },
                    {
                        "type": "address[]",
                        "name": "disallowedPayers"
                    },
                    {
                        "type": "address[]",
                        "name": "tokenGatedAllowedNftTokens"
                    },
                    {
                        "type": "tuple[]",
                        "name": "tokenGatedDropStages",
                        "components": [
                            {
                                "type": "uint80",
                                "name": "mintPrice"
                            },
                            {
                                "type": "uint16",
                                "name": "maxTotalMintableByWallet"
                            },
                            {
                                "type": "uint48",
                                "name": "startTime"
                            },
                            {
                                "type": "uint48",
                                "name": "endTime"
                            },
                            {
                                "type": "uint8",
                                "name": "dropStageIndex"
                            },
                            {
                                "type": "uint32",
                                "name": "maxTokenSupplyForStage"
                            },
                            {
                                "type": "uint16",
                                "name": "feeBps"
                            },
                            {
                                "type": "bool",
                                "name": "restrictFeeRecipients"
                            }
                        ]
                    },
                    {
                        "type": "address[]",
                        "name": "disallowedTokenGatedAllowedNftTokens"
                    },
                    {
                        "type": "address[]",
                        "name": "signers"
                    },
                    {
                        "type": "tuple[]",
                        "name": "signedMintValidationParams",
                        "components": [
                            {
                                "type": "uint80",
                                "name": "minMintPrice"
                            },
                            {
                                "type": "uint24",
                                "name": "maxMaxTotalMintableByWallet"
                            },
                            {
                                "type": "uint40",
                                "name": "minStartTime"
                            },
                            {
                                "type": "uint40",
                                "name": "maxEndTime"
                            },
                            {
                                "type": "uint40",
                                "name": "maxMaxTokenSupplyForStage"
                            },
                            {
                                "type": "uint16",
                                "name": "minFeeBps"
                            },
                            {
                                "type": "uint16",
                                "name": "maxFeeBps"
                            }
                        ]
                    },
                    {
                        "type": "address[]",
                        "name": "disallowedSigners"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "name",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
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
        "name": "ownerOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "provenanceHash",
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
        "name": "renounceOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "royaltyAddress",
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
        "name": "royaltyBasisPoints",
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
        "name": "royaltyInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            },
            {
                "type": "uint256",
                "name": "_salePrice"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "receiver"
            },
            {
                "type": "uint256",
                "name": "royaltyAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setApprovalForAll",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "bool",
                "name": "approved"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setBaseURI",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "newBaseURI"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setContractURI",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "newContractURI"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMaxSupply",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "newMaxSupply"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setProvenanceHash",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "newProvenanceHash"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setRoyaltyInfo",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "newInfo",
                "components": [
                    {
                        "type": "address",
                        "name": "royaltyAddress"
                    },
                    {
                        "type": "uint96",
                        "name": "royaltyBps"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "symbol",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "tokenURI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "totalSupply",
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
        "name": "transferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newPotentialOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateAllowList",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "seaDropImpl"
            },
            {
                "type": "tuple",
                "name": "allowListData",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "merkleRoot"
                    },
                    {
                        "type": "string[]",
                        "name": "publicKeyURIs"
                    },
                    {
                        "type": "string",
                        "name": "allowListURI"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateAllowedFeeRecipient",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "seaDropImpl"
            },
            {
                "type": "address",
                "name": "feeRecipient"
            },
            {
                "type": "bool",
                "name": "allowed"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateAllowedSeaDrop",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "allowedSeaDrop"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateCreatorPayoutAddress",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "seaDropImpl"
            },
            {
                "type": "address",
                "name": "payoutAddress"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateDropURI",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "seaDropImpl"
            },
            {
                "type": "string",
                "name": "dropURI"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updatePayer",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "seaDropImpl"
            },
            {
                "type": "address",
                "name": "payer"
            },
            {
                "type": "bool",
                "name": "allowed"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updatePublicDrop",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "seaDropImpl"
            },
            {
                "type": "tuple",
                "name": "publicDrop",
                "components": [
                    {
                        "type": "uint80",
                        "name": "mintPrice"
                    },
                    {
                        "type": "uint48",
                        "name": "startTime"
                    },
                    {
                        "type": "uint48",
                        "name": "endTime"
                    },
                    {
                        "type": "uint16",
                        "name": "maxTotalMintableByWallet"
                    },
                    {
                        "type": "uint16",
                        "name": "feeBps"
                    },
                    {
                        "type": "bool",
                        "name": "restrictFeeRecipients"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateSignedMintValidationParams",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "seaDropImpl"
            },
            {
                "type": "address",
                "name": "signer"
            },
            {
                "type": "tuple",
                "name": "signedMintValidationParams",
                "components": [
                    {
                        "type": "uint80",
                        "name": "minMintPrice"
                    },
                    {
                        "type": "uint24",
                        "name": "maxMaxTotalMintableByWallet"
                    },
                    {
                        "type": "uint40",
                        "name": "minStartTime"
                    },
                    {
                        "type": "uint40",
                        "name": "maxEndTime"
                    },
                    {
                        "type": "uint40",
                        "name": "maxMaxTokenSupplyForStage"
                    },
                    {
                        "type": "uint16",
                        "name": "minFeeBps"
                    },
                    {
                        "type": "uint16",
                        "name": "maxFeeBps"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateTokenGatedDrop",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "seaDropImpl"
            },
            {
                "type": "address",
                "name": "allowedNftToken"
            },
            {
                "type": "tuple",
                "name": "dropStage",
                "components": [
                    {
                        "type": "uint80",
                        "name": "mintPrice"
                    },
                    {
                        "type": "uint16",
                        "name": "maxTotalMintableByWallet"
                    },
                    {
                        "type": "uint48",
                        "name": "startTime"
                    },
                    {
                        "type": "uint48",
                        "name": "endTime"
                    },
                    {
                        "type": "uint8",
                        "name": "dropStageIndex"
                    },
                    {
                        "type": "uint32",
                        "name": "maxTokenSupplyForStage"
                    },
                    {
                        "type": "uint16",
                        "name": "feeBps"
                    },
                    {
                        "type": "bool",
                        "name": "restrictFeeRecipients"
                    }
                ]
            }
        ],
        "outputs": []
    }
]
