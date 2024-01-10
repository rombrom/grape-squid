import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0x301fecdF050156dA30547F21C6C9e33aA779f701.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Withdraw: new LogEvent<([investor: string, amount: bigint, bonusAmount: bigint] & {investor: string, amount: bigint, bonusAmount: bigint})>(
        abi, '0xf279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b568'
    ),
}

export const functions = {
    bonusPercent: new Func<[], {}, bigint>(
        abi, '0xbecf3add'
    ),
    changeTgeDate: new Func<[tgeDate_: bigint], {tgeDate_: bigint}, []>(
        abi, '0x0d2f88ca'
    ),
    changeVestingEndDate: new Func<[vestingEndDate_: bigint], {vestingEndDate_: bigint}, []>(
        abi, '0x98ec6664'
    ),
    grapeToken: new Func<[], {}, string>(
        abi, '0x982d68de'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    signatureValidity: new Func<[], {}, bigint>(
        abi, '0x64e4b8c2'
    ),
    signerWallet: new Func<[], {}, string>(
        abi, '0x64f0d35e'
    ),
    tgeDate: new Func<[], {}, bigint>(
        abi, '0x2484dc08'
    ),
    tgeUnlockPercent: new Func<[], {}, bigint>(
        abi, '0x9b57002f'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    vestedAmount: new Func<[nftAmountPurchased_: bigint, referralAmountPurchased_: bigint], {nftAmountPurchased_: bigint, referralAmountPurchased_: bigint}, bigint>(
        abi, '0x54b547a5'
    ),
    vestingEndDate: new Func<[], {}, bigint>(
        abi, '0x3db5a524'
    ),
    withdraw: new Func<[nftAmountPurchased_: bigint, referralAmountPurchased_: bigint, applyBonus_: boolean, signature_: string, signatureTimestamp_: bigint], {nftAmountPurchased_: bigint, referralAmountPurchased_: bigint, applyBonus_: boolean, signature_: string, signatureTimestamp_: bigint}, []>(
        abi, '0xb3a908f4'
    ),
    withdrawAllGrapeToken: new Func<[], {}, []>(
        abi, '0xaac2d579'
    ),
    withdrawableAmountWithoutBonus: new Func<[investor_: string, nftAmountPurchased_: bigint, referralAmountPurchased_: bigint], {investor_: string, nftAmountPurchased_: bigint, referralAmountPurchased_: bigint}, bigint>(
        abi, '0x27d76282'
    ),
    withdraws: new Func<[investor: string], {investor: string}, bigint>(
        abi, '0x48179ee5'
    ),
}

export class Contract extends ContractBase {

    bonusPercent(): Promise<bigint> {
        return this.eth_call(functions.bonusPercent, [])
    }

    grapeToken(): Promise<string> {
        return this.eth_call(functions.grapeToken, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    signatureValidity(): Promise<bigint> {
        return this.eth_call(functions.signatureValidity, [])
    }

    signerWallet(): Promise<string> {
        return this.eth_call(functions.signerWallet, [])
    }

    tgeDate(): Promise<bigint> {
        return this.eth_call(functions.tgeDate, [])
    }

    tgeUnlockPercent(): Promise<bigint> {
        return this.eth_call(functions.tgeUnlockPercent, [])
    }

    vestedAmount(nftAmountPurchased_: bigint, referralAmountPurchased_: bigint): Promise<bigint> {
        return this.eth_call(functions.vestedAmount, [nftAmountPurchased_, referralAmountPurchased_])
    }

    vestingEndDate(): Promise<bigint> {
        return this.eth_call(functions.vestingEndDate, [])
    }

    withdrawableAmountWithoutBonus(investor_: string, nftAmountPurchased_: bigint, referralAmountPurchased_: bigint): Promise<bigint> {
        return this.eth_call(functions.withdrawableAmountWithoutBonus, [investor_, nftAmountPurchased_, referralAmountPurchased_])
    }

    withdraws(investor: string): Promise<bigint> {
        return this.eth_call(functions.withdraws, [investor])
    }
}
