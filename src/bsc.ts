import { EvmBatchProcessor } from '@subsquid/evm-processor';
import { TypeormDatabase } from '@subsquid/typeorm-store';
import { lookupArchive } from '@subsquid/archive-registry';
import * as abi from './abi/0x301fecdF050156dA30547F21C6C9e33aA779f701';
import { Withdraw } from './model';

const processor = new EvmBatchProcessor()
  .setDataSource({
    archive: lookupArchive('binance'),
  })
  .setFinalityConfirmation(75) // 15 mins to finality
  .addLog({
    address: [String(process.env.TOKEN_SEEDER_ADDRESS)],
    topic0: [abi.events.Withdraw.topic],
    range: { from: Number(process.env.TOKEN_SEEDER_GENESIS) },
  });

const db = new TypeormDatabase({
  stateSchema: 'bsc_processor',
});

processor.run(db, async (ctx) => {
  const withdrawals: Withdraw[] = [];
  for (let block of ctx.blocks) {
    for (let log of block.logs) {
      let { investor, amount, bonusAmount } = abi.events.Withdraw.decode(log);
      withdrawals.push(
        new Withdraw({
          id: log.id,
          investor,
          amount,
          bonusAmount,
        })
      );
    }
  }
  await ctx.store.insert(withdrawals);
});
