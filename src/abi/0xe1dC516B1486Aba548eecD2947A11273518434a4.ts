import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0xe1dC516B1486Aba548eecD2947A11273518434a4.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AllowedSeaDropUpdated: new LogEvent<([allowedSeaDrop: Array<string>] & {allowedSeaDrop: Array<string>})>(
        abi, '0xbbd3b69c138de4d317d0bc4290282c4e1cbd1e58b579a5b4f114b598c237454d'
    ),
    Approval: new LogEvent<([owner: string, approved: string, tokenId: bigint] & {owner: string, approved: string, tokenId: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    BatchMetadataUpdate: new LogEvent<([_fromTokenId: bigint, _toTokenId: bigint] & {_fromTokenId: bigint, _toTokenId: bigint})>(
        abi, '0x6bd5c950a8d8df17f772f5af37cb3655737899cbf903264b9795592da439661c'
    ),
    ConsecutiveTransfer: new LogEvent<([fromTokenId: bigint, toTokenId: bigint, from: string, to: string] & {fromTokenId: bigint, toTokenId: bigint, from: string, to: string})>(
        abi, '0xdeaa91b6123d068f5821d0fb0678463d1a8a6079fe8af5de3ce5e896dcf9133d'
    ),
    ContractURIUpdated: new LogEvent<([newContractURI: string] & {newContractURI: string})>(
        abi, '0x905d981207a7d0b6c62cc46ab0be2a076d0298e4a86d0ab79882dbd01ac37378'
    ),
    MaxSupplyUpdated: new LogEvent<([newMaxSupply: bigint] & {newMaxSupply: bigint})>(
        abi, '0x7810bd47de260c3e9ee10061cf438099dd12256c79485f12f94dbccc981e806c'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    PotentialOwnerUpdated: new LogEvent<([newPotentialAdministrator: string] & {newPotentialAdministrator: string})>(
        abi, '0x11a3cf439fb225bfe74225716b6774765670ec1060e3796802e62139d69974da'
    ),
    ProvenanceHashUpdated: new LogEvent<([previousHash: string, newHash: string] & {previousHash: string, newHash: string})>(
        abi, '0x7c22004198bf87da0f0dab623c72e66ca1200f4454aa3b9ca30f436275428b7c'
    ),
    RoyaltyInfoUpdated: new LogEvent<([receiver: string, bps: bigint] & {receiver: string, bps: bigint})>(
        abi, '0xf21fccf4d64d86d532c4e4eb86c007b6ad57a460c27d724188625e755ec6cf6d'
    ),
    SeaDropTokenDeployed: new LogEvent<[]>(
        abi, '0xd7aca75208b9be5ffc04c6a01922020ffd62b55e68e502e317f5344960279af8'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: bigint] & {from: string, to: string, tokenId: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    OPERATOR_FILTER_REGISTRY: new Func<[], {}, string>(
        abi, '0x41f43434'
    ),
    acceptOwnership: new Func<[], {}, []>(
        abi, '0x79ba5097'
    ),
    approve: new Func<[operator: string, tokenId: bigint], {operator: string, tokenId: bigint}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, bigint>(
        abi, '0x70a08231'
    ),
    baseURI: new Func<[], {}, string>(
        abi, '0x6c0360eb'
    ),
    cancelOwnershipTransfer: new Func<[], {}, []>(
        abi, '0x23452b9c'
    ),
    contractURI: new Func<[], {}, string>(
        abi, '0xe8a3d485'
    ),
    emitBatchMetadataUpdate: new Func<[fromTokenId: bigint, toTokenId: bigint], {fromTokenId: bigint, toTokenId: bigint}, []>(
        abi, '0xa4830114'
    ),
    getApproved: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x081812fc'
    ),
    getMintStats: new Func<[minter: string], {minter: string}, ([minterNumMinted: bigint, currentTotalSupply: bigint, maxSupply: bigint] & {minterNumMinted: bigint, currentTotalSupply: bigint, maxSupply: bigint})>(
        abi, '0x840e15d4'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    maxSupply: new Func<[], {}, bigint>(
        abi, '0xd5abeb01'
    ),
    mintSeaDrop: new Func<[minter: string, quantity: bigint], {minter: string, quantity: bigint}, []>(
        abi, '0x64869dad'
    ),
    multiConfigure: new Func<[config: ([maxSupply: bigint, baseURI: string, contractURI: string, seaDropImpl: string, publicDrop: ([mintPrice: bigint, startTime: number, endTime: number, maxTotalMintableByWallet: number, feeBps: number, restrictFeeRecipients: boolean] & {mintPrice: bigint, startTime: number, endTime: number, maxTotalMintableByWallet: number, feeBps: number, restrictFeeRecipients: boolean}), dropURI: string, allowListData: ([merkleRoot: string, publicKeyURIs: Array<string>, allowListURI: string] & {merkleRoot: string, publicKeyURIs: Array<string>, allowListURI: string}), creatorPayoutAddress: string, provenanceHash: string, allowedFeeRecipients: Array<string>, disallowedFeeRecipients: Array<string>, allowedPayers: Array<string>, disallowedPayers: Array<string>, tokenGatedAllowedNftTokens: Array<string>, tokenGatedDropStages: Array<([mintPrice: bigint, maxTotalMintableByWallet: number, startTime: number, endTime: number, dropStageIndex: number, maxTokenSupplyForStage: number, feeBps: number, restrictFeeRecipients: boolean] & {mintPrice: bigint, maxTotalMintableByWallet: number, startTime: number, endTime: number, dropStageIndex: number, maxTokenSupplyForStage: number, feeBps: number, restrictFeeRecipients: boolean})>, disallowedTokenGatedAllowedNftTokens: Array<string>, signers: Array<string>, signedMintValidationParams: Array<([minMintPrice: bigint, maxMaxTotalMintableByWallet: number, minStartTime: number, maxEndTime: number, maxMaxTokenSupplyForStage: number, minFeeBps: number, maxFeeBps: number] & {minMintPrice: bigint, maxMaxTotalMintableByWallet: number, minStartTime: number, maxEndTime: number, maxMaxTokenSupplyForStage: number, minFeeBps: number, maxFeeBps: number})>, disallowedSigners: Array<string>] & {maxSupply: bigint, baseURI: string, contractURI: string, seaDropImpl: string, publicDrop: ([mintPrice: bigint, startTime: number, endTime: number, maxTotalMintableByWallet: number, feeBps: number, restrictFeeRecipients: boolean] & {mintPrice: bigint, startTime: number, endTime: number, maxTotalMintableByWallet: number, feeBps: number, restrictFeeRecipients: boolean}), dropURI: string, allowListData: ([merkleRoot: string, publicKeyURIs: Array<string>, allowListURI: string] & {merkleRoot: string, publicKeyURIs: Array<string>, allowListURI: string}), creatorPayoutAddress: string, provenanceHash: string, allowedFeeRecipients: Array<string>, disallowedFeeRecipients: Array<string>, allowedPayers: Array<string>, disallowedPayers: Array<string>, tokenGatedAllowedNftTokens: Array<string>, tokenGatedDropStages: Array<([mintPrice: bigint, maxTotalMintableByWallet: number, startTime: number, endTime: number, dropStageIndex: number, maxTokenSupplyForStage: number, feeBps: number, restrictFeeRecipients: boolean] & {mintPrice: bigint, maxTotalMintableByWallet: number, startTime: number, endTime: number, dropStageIndex: number, maxTokenSupplyForStage: number, feeBps: number, restrictFeeRecipients: boolean})>, disallowedTokenGatedAllowedNftTokens: Array<string>, signers: Array<string>, signedMintValidationParams: Array<([minMintPrice: bigint, maxMaxTotalMintableByWallet: number, minStartTime: number, maxEndTime: number, maxMaxTokenSupplyForStage: number, minFeeBps: number, maxFeeBps: number] & {minMintPrice: bigint, maxMaxTotalMintableByWallet: number, minStartTime: number, maxEndTime: number, maxMaxTokenSupplyForStage: number, minFeeBps: number, maxFeeBps: number})>, disallowedSigners: Array<string>})], {config: ([maxSupply: bigint, baseURI: string, contractURI: string, seaDropImpl: string, publicDrop: ([mintPrice: bigint, startTime: number, endTime: number, maxTotalMintableByWallet: number, feeBps: number, restrictFeeRecipients: boolean] & {mintPrice: bigint, startTime: number, endTime: number, maxTotalMintableByWallet: number, feeBps: number, restrictFeeRecipients: boolean}), dropURI: string, allowListData: ([merkleRoot: string, publicKeyURIs: Array<string>, allowListURI: string] & {merkleRoot: string, publicKeyURIs: Array<string>, allowListURI: string}), creatorPayoutAddress: string, provenanceHash: string, allowedFeeRecipients: Array<string>, disallowedFeeRecipients: Array<string>, allowedPayers: Array<string>, disallowedPayers: Array<string>, tokenGatedAllowedNftTokens: Array<string>, tokenGatedDropStages: Array<([mintPrice: bigint, maxTotalMintableByWallet: number, startTime: number, endTime: number, dropStageIndex: number, maxTokenSupplyForStage: number, feeBps: number, restrictFeeRecipients: boolean] & {mintPrice: bigint, maxTotalMintableByWallet: number, startTime: number, endTime: number, dropStageIndex: number, maxTokenSupplyForStage: number, feeBps: number, restrictFeeRecipients: boolean})>, disallowedTokenGatedAllowedNftTokens: Array<string>, signers: Array<string>, signedMintValidationParams: Array<([minMintPrice: bigint, maxMaxTotalMintableByWallet: number, minStartTime: number, maxEndTime: number, maxMaxTokenSupplyForStage: number, minFeeBps: number, maxFeeBps: number] & {minMintPrice: bigint, maxMaxTotalMintableByWallet: number, minStartTime: number, maxEndTime: number, maxMaxTokenSupplyForStage: number, minFeeBps: number, maxFeeBps: number})>, disallowedSigners: Array<string>] & {maxSupply: bigint, baseURI: string, contractURI: string, seaDropImpl: string, publicDrop: ([mintPrice: bigint, startTime: number, endTime: number, maxTotalMintableByWallet: number, feeBps: number, restrictFeeRecipients: boolean] & {mintPrice: bigint, startTime: number, endTime: number, maxTotalMintableByWallet: number, feeBps: number, restrictFeeRecipients: boolean}), dropURI: string, allowListData: ([merkleRoot: string, publicKeyURIs: Array<string>, allowListURI: string] & {merkleRoot: string, publicKeyURIs: Array<string>, allowListURI: string}), creatorPayoutAddress: string, provenanceHash: string, allowedFeeRecipients: Array<string>, disallowedFeeRecipients: Array<string>, allowedPayers: Array<string>, disallowedPayers: Array<string>, tokenGatedAllowedNftTokens: Array<string>, tokenGatedDropStages: Array<([mintPrice: bigint, maxTotalMintableByWallet: number, startTime: number, endTime: number, dropStageIndex: number, maxTokenSupplyForStage: number, feeBps: number, restrictFeeRecipients: boolean] & {mintPrice: bigint, maxTotalMintableByWallet: number, startTime: number, endTime: number, dropStageIndex: number, maxTokenSupplyForStage: number, feeBps: number, restrictFeeRecipients: boolean})>, disallowedTokenGatedAllowedNftTokens: Array<string>, signers: Array<string>, signedMintValidationParams: Array<([minMintPrice: bigint, maxMaxTotalMintableByWallet: number, minStartTime: number, maxEndTime: number, maxMaxTokenSupplyForStage: number, minFeeBps: number, maxFeeBps: number] & {minMintPrice: bigint, maxMaxTotalMintableByWallet: number, minStartTime: number, maxEndTime: number, maxMaxTokenSupplyForStage: number, minFeeBps: number, maxFeeBps: number})>, disallowedSigners: Array<string>})}, []>(
        abi, '0x911f456b'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    ownerOf: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x6352211e'
    ),
    provenanceHash: new Func<[], {}, string>(
        abi, '0xc6ab67a3'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    royaltyAddress: new Func<[], {}, string>(
        abi, '0xad2f852a'
    ),
    royaltyBasisPoints: new Func<[], {}, bigint>(
        abi, '0x42260b5d'
    ),
    royaltyInfo: new Func<[_: bigint, _salePrice: bigint], {_salePrice: bigint}, ([receiver: string, royaltyAmount: bigint] & {receiver: string, royaltyAmount: bigint})>(
        abi, '0x2a55205a'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: bigint, data: string], {from: string, to: string, tokenId: bigint, data: string}, []>(
        abi, '0xb88d4fde'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    setBaseURI: new Func<[newBaseURI: string], {newBaseURI: string}, []>(
        abi, '0x55f804b3'
    ),
    setContractURI: new Func<[newContractURI: string], {newContractURI: string}, []>(
        abi, '0x938e3d7b'
    ),
    setMaxSupply: new Func<[newMaxSupply: bigint], {newMaxSupply: bigint}, []>(
        abi, '0x6f8b44b0'
    ),
    setProvenanceHash: new Func<[newProvenanceHash: string], {newProvenanceHash: string}, []>(
        abi, '0x099b6bfa'
    ),
    setRoyaltyInfo: new Func<[newInfo: ([royaltyAddress: string, royaltyBps: bigint] & {royaltyAddress: string, royaltyBps: bigint})], {newInfo: ([royaltyAddress: string, royaltyBps: bigint] & {royaltyAddress: string, royaltyBps: bigint})}, []>(
        abi, '0x44dae42c'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    tokenURI: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0xc87b56dd'
    ),
    totalSupply: new Func<[], {}, bigint>(
        abi, '0x18160ddd'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x23b872dd'
    ),
    transferOwnership: new Func<[newPotentialOwner: string], {newPotentialOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    updateAllowList: new Func<[seaDropImpl: string, allowListData: ([merkleRoot: string, publicKeyURIs: Array<string>, allowListURI: string] & {merkleRoot: string, publicKeyURIs: Array<string>, allowListURI: string})], {seaDropImpl: string, allowListData: ([merkleRoot: string, publicKeyURIs: Array<string>, allowListURI: string] & {merkleRoot: string, publicKeyURIs: Array<string>, allowListURI: string})}, []>(
        abi, '0x3680620d'
    ),
    updateAllowedFeeRecipient: new Func<[seaDropImpl: string, feeRecipient: string, allowed: boolean], {seaDropImpl: string, feeRecipient: string, allowed: boolean}, []>(
        abi, '0x48a4c101'
    ),
    updateAllowedSeaDrop: new Func<[allowedSeaDrop: Array<string>], {allowedSeaDrop: Array<string>}, []>(
        abi, '0x60c308b6'
    ),
    updateCreatorPayoutAddress: new Func<[seaDropImpl: string, payoutAddress: string], {seaDropImpl: string, payoutAddress: string}, []>(
        abi, '0x66251b69'
    ),
    updateDropURI: new Func<[seaDropImpl: string, dropURI: string], {seaDropImpl: string, dropURI: string}, []>(
        abi, '0x7a05bc82'
    ),
    updatePayer: new Func<[seaDropImpl: string, payer: string, allowed: boolean], {seaDropImpl: string, payer: string, allowed: boolean}, []>(
        abi, '0xcb743ba8'
    ),
    updatePublicDrop: new Func<[seaDropImpl: string, publicDrop: ([mintPrice: bigint, startTime: number, endTime: number, maxTotalMintableByWallet: number, feeBps: number, restrictFeeRecipients: boolean] & {mintPrice: bigint, startTime: number, endTime: number, maxTotalMintableByWallet: number, feeBps: number, restrictFeeRecipients: boolean})], {seaDropImpl: string, publicDrop: ([mintPrice: bigint, startTime: number, endTime: number, maxTotalMintableByWallet: number, feeBps: number, restrictFeeRecipients: boolean] & {mintPrice: bigint, startTime: number, endTime: number, maxTotalMintableByWallet: number, feeBps: number, restrictFeeRecipients: boolean})}, []>(
        abi, '0x1b73593c'
    ),
    updateSignedMintValidationParams: new Func<[seaDropImpl: string, signer: string, signedMintValidationParams: ([minMintPrice: bigint, maxMaxTotalMintableByWallet: number, minStartTime: number, maxEndTime: number, maxMaxTokenSupplyForStage: number, minFeeBps: number, maxFeeBps: number] & {minMintPrice: bigint, maxMaxTotalMintableByWallet: number, minStartTime: number, maxEndTime: number, maxMaxTokenSupplyForStage: number, minFeeBps: number, maxFeeBps: number})], {seaDropImpl: string, signer: string, signedMintValidationParams: ([minMintPrice: bigint, maxMaxTotalMintableByWallet: number, minStartTime: number, maxEndTime: number, maxMaxTokenSupplyForStage: number, minFeeBps: number, maxFeeBps: number] & {minMintPrice: bigint, maxMaxTotalMintableByWallet: number, minStartTime: number, maxEndTime: number, maxMaxTokenSupplyForStage: number, minFeeBps: number, maxFeeBps: number})}, []>(
        abi, '0x511aa644'
    ),
    updateTokenGatedDrop: new Func<[seaDropImpl: string, allowedNftToken: string, dropStage: ([mintPrice: bigint, maxTotalMintableByWallet: number, startTime: number, endTime: number, dropStageIndex: number, maxTokenSupplyForStage: number, feeBps: number, restrictFeeRecipients: boolean] & {mintPrice: bigint, maxTotalMintableByWallet: number, startTime: number, endTime: number, dropStageIndex: number, maxTokenSupplyForStage: number, feeBps: number, restrictFeeRecipients: boolean})], {seaDropImpl: string, allowedNftToken: string, dropStage: ([mintPrice: bigint, maxTotalMintableByWallet: number, startTime: number, endTime: number, dropStageIndex: number, maxTokenSupplyForStage: number, feeBps: number, restrictFeeRecipients: boolean] & {mintPrice: bigint, maxTotalMintableByWallet: number, startTime: number, endTime: number, dropStageIndex: number, maxTokenSupplyForStage: number, feeBps: number, restrictFeeRecipients: boolean})}, []>(
        abi, '0x7bc2be76'
    ),
}

export class Contract extends ContractBase {

    OPERATOR_FILTER_REGISTRY(): Promise<string> {
        return this.eth_call(functions.OPERATOR_FILTER_REGISTRY, [])
    }

    balanceOf(owner: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    baseURI(): Promise<string> {
        return this.eth_call(functions.baseURI, [])
    }

    contractURI(): Promise<string> {
        return this.eth_call(functions.contractURI, [])
    }

    getApproved(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    getMintStats(minter: string): Promise<([minterNumMinted: bigint, currentTotalSupply: bigint, maxSupply: bigint] & {minterNumMinted: bigint, currentTotalSupply: bigint, maxSupply: bigint})> {
        return this.eth_call(functions.getMintStats, [minter])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    maxSupply(): Promise<bigint> {
        return this.eth_call(functions.maxSupply, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    ownerOf(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    provenanceHash(): Promise<string> {
        return this.eth_call(functions.provenanceHash, [])
    }

    royaltyAddress(): Promise<string> {
        return this.eth_call(functions.royaltyAddress, [])
    }

    royaltyBasisPoints(): Promise<bigint> {
        return this.eth_call(functions.royaltyBasisPoints, [])
    }

    royaltyInfo(arg0: bigint, _salePrice: bigint): Promise<([receiver: string, royaltyAmount: bigint] & {receiver: string, royaltyAmount: bigint})> {
        return this.eth_call(functions.royaltyInfo, [arg0, _salePrice])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    tokenURI(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    totalSupply(): Promise<bigint> {
        return this.eth_call(functions.totalSupply, [])
    }
}
