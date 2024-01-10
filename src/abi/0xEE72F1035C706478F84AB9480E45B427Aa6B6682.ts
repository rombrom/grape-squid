import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './0xEE72F1035C706478F84AB9480E45B427Aa6B6682.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    TicketsBought: new LogEvent<([wallet: string, count: bigint] & {wallet: string, count: bigint})>(
        abi, '0xb24ee662b0a257d0321d324e737d2507fbe45df8af8d0da951f630f3754eb6a0'
    ),
    TicketsRefunded: new LogEvent<([wallet: string, count: bigint] & {wallet: string, count: bigint})>(
        abi, '0x3edd1ff272ea97def9fad80e63c2aa62496cf7dd22a8919d178b1bbe73e04ed3'
    ),
}

export const functions = {
    balances: new Func<[buyer: string], {buyer: string}, bigint>(
        abi, '0x27e235e3'
    ),
    buyTickets: new Func<[numberOfTickets_: bigint], {numberOfTickets_: bigint}, []>(
        abi, '0x2f366637'
    ),
    endDate: new Func<[], {}, bigint>(
        abi, '0xc24a0f8b'
    ),
    finalizeSale: new Func<[refundMerkleRoot_: string, numberOfWinningTickets_: bigint, to_: string], {refundMerkleRoot_: string, numberOfWinningTickets_: bigint, to_: string}, []>(
        abi, '0x5155aa08'
    ),
    maxTicketsPerBuyer: new Func<[], {}, bigint>(
        abi, '0x1b9fd7f4'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    refundMerkleRoot: new Func<[], {}, string>(
        abi, '0xdf690509'
    ),
    refundTickets: new Func<[ticketsToRefund_: bigint, merkleProof_: Array<string>], {ticketsToRefund_: bigint, merkleProof_: Array<string>}, []>(
        abi, '0xda82fb4c'
    ),
    refunds: new Func<[buyer: string], {buyer: string}, bigint>(
        abi, '0xbc3da535'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    startDate: new Func<[], {}, bigint>(
        abi, '0x0b97bc86'
    ),
    ticketPrice: new Func<[], {}, bigint>(
        abi, '0x1209b1f6'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    withdrawAll: new Func<[to_: string], {to_: string}, []>(
        abi, '0xfa09e630'
    ),
}

export class Contract extends ContractBase {

    balances(buyer: string): Promise<bigint> {
        return this.eth_call(functions.balances, [buyer])
    }

    endDate(): Promise<bigint> {
        return this.eth_call(functions.endDate, [])
    }

    maxTicketsPerBuyer(): Promise<bigint> {
        return this.eth_call(functions.maxTicketsPerBuyer, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    refundMerkleRoot(): Promise<string> {
        return this.eth_call(functions.refundMerkleRoot, [])
    }

    refunds(buyer: string): Promise<bigint> {
        return this.eth_call(functions.refunds, [buyer])
    }

    startDate(): Promise<bigint> {
        return this.eth_call(functions.startDate, [])
    }

    ticketPrice(): Promise<bigint> {
        return this.eth_call(functions.ticketPrice, [])
    }
}
