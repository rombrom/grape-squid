# Index Grape NFT transfers and $GRAPE seeding

This package runs two processors on Subsquid archive nodes which indexes any Grapes NFT transfers and Token Seeder withdraws. It will run a GraphQL server you can query.

The `data.json` file is a file with data returned by this query:

```gql
query TransfersAndWithdraws {
  ticketsBoughts {
    wallet
  }
  transfers {
    to
  }
  withdraws {
    amount
    bonusAmount
    investor
  }
}
```

The `npm test` script will output analyzed data from `analysis.js`.

## Setting up

With current source code in place the only things you should need to do are:

1. `npm run build`
2. `npm start`

## Adding more indexing data

Roughly follow the steps outlined on Subsquid's docs page ["Indexer from Scratch"](https://docs.subsquid.io/sdk/how-to-start/squid-from-scratch/)
