const {
  data: { ticketsBoughts, transfers, withdraws },
} = require('./data.json');

const AMOUNT = 500_000; // Minimum $GRAPE transferred
const DECIMALS = BigInt(1e18); // ERC20 decimals; $GRAPE has 18

const transferAddresses = new Set();
const presaleAddresses = new Set();

for (const { to } of transfers) {
  if (!transferAddresses.has(to)) transferAddresses.add(to);
}

for (const { wallet } of ticketsBoughts) {
  if (!presaleAddresses.has(wallet)) presaleAddresses.add(wallet);
}

const withdrawsWithoutNftOrPresale = withdraws.filter(
  ({ investor }) =>
    !transferAddresses.has(investor) && !presaleAddresses.has(investor)
);

const withdrawsALotOfGrape = withdrawsWithoutNftOrPresale.filter(
  ({ amount }) => BigInt(amount) / DECIMALS > AMOUNT
);

const totalStrange = withdrawsWithoutNftOrPresale.reduce(
  (total, { amount, bonusAmount }) => {
    return total + BigInt(amount) + BigInt(bonusAmount);
  },
  0n
);

console.log(
  withdrawsALotOfGrape
    .sort(({ amount: a }, { amount: b }) => Number(BigInt(b) - BigInt(a)))
    .reduce(
      (acc, { amount, investor }) => ({
        ...acc,
        [investor]: `${(BigInt(amount) / DECIMALS).toLocaleString()} $GRAPE`,
      }),
      {}
    )
);

console.log((totalStrange / DECIMALS).toLocaleString());
