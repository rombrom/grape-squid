import { EvmBatchProcessor } from '@subsquid/evm-processor';
import { TypeormDatabase } from '@subsquid/typeorm-store';
import { lookupArchive } from '@subsquid/archive-registry';
import * as grapesAbi from './abi/0xe1dC516B1486Aba548eecD2947A11273518434a4';
import * as presaleAbi from './abi/0xEE72F1035C706478F84AB9480E45B427Aa6B6682';
import { Transfer, TicketsBought } from './model';

const processor = new EvmBatchProcessor()
  .setDataSource({
    archive: lookupArchive('eth-mainnet'),
  })
  .setFinalityConfirmation(75) // 15 mins to finality
  .addLog({
    address: [String(process.env.GRAPES_ADDRESS)],
    topic0: [grapesAbi.events.Transfer.topic],
    range: { from: Number(process.env.GRAPES_GENESIS) },
  })
  .addLog({
    address: [String(process.env.PRESALE_ADDRESS)],
    topic0: [presaleAbi.events.TicketsBought.topic],
    range: { from: Number(process.env.PRESALE_GENESIS) },
  });

const db = new TypeormDatabase({
  stateSchema: 'eth_processor',
});

processor.run(db, async (ctx) => {
  const tickets: TicketsBought[] = [];
  const transfers: Transfer[] = [];
  for (let block of ctx.blocks) {
    for (let log of block.logs) {
      if (log.address === String(process.env.GRAPES_ADDRESS).toLowerCase()) {
        let { from, to, tokenId } = grapesAbi.events.Transfer.decode(log);
        transfers.push(
          new Transfer({
            id: log.id,
            from,
            to,
            tokenId,
          })
        );
      }

      if (log.address === String(process.env.PRESALE_ADDRESS).toLowerCase()) {
        let { count, wallet } = presaleAbi.events.TicketsBought.decode(log);
        tickets.push(
          new TicketsBought({
            id: log.id,
            count,
            wallet,
          })
        );
      }
    }
  }
  await ctx.store.insert(transfers);
  await ctx.store.insert(tickets);
});
