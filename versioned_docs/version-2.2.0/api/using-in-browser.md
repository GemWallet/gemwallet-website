---
id: using-gemwallet-in-browser
title: Using GemWallet in the browser
description: Provides the documentation on how to use GemWallet in the browser thanks to our CDN.
---

:::info
This page assumes that you have GemWallet installed.
:::

## Importing the library

Let's first import the library in the `<head>` tag of our page.

Install the packaged library via script tag using unpkg.

```html
<head>
  <script src="https://unpkg.com/@gemwallet/api@2.2.0/umd/gemwallet-api.js"></script>
</head>
```

This will expose a global variable called `window.GemWalletApi` that will contain our library.

Now let's dig into what functionalities are available to you.

## Methods

### isConnected()

:::tip
We recommend that you check if the user is connected before using any of the other methods available.
:::
`isConnected() -> <Promise<boolean>>`

Returns `true` if the user has GemWallet extension installed, and `false` otherwise.

```javascript
GemWalletApi.isConnected().then((isConnected) => {
  if (isConnected) {
    console.log("User has GemWallet!");
  } else {
    console.log("User doesn't have GemWallet!");
  }
});
```

### getAddress()

`getAddress() -> <Promise<string|null|undefined>>`

Returns:

- `string` returns the classic address of the wallet.
- `null` user refused to share the address within GemWallet.
- `undefined` something went wrong.

Here is an example of implementation:

```javascript
GemWalletApi.isConnected().then((isConnected) => {
  if (isConnected) {
    GemWalletApi.getAddress().then((address) => {
      console.log(`Your address: ${address}`);
    });
  }
});
```

### getNetwork()

`getNetwork() -> <Promise<'Mainnet'|'Testnet'|'Devnet'|'AMM-Devnet'>>`

Returns:

- `Mainnet` if the user is connected to the `main network`.
- `Testnet` if the user is connected to the `test network`.
- `Devnet` if the user is connected to the `developer network`.
- `AMM-Devnet` if the user is connected to the `AMM Devnet`.

Here is an example of implementation:

```javascript
GemWalletApi.isConnected().then((isConnected) => {
  if (isConnected) {
    GemWalletApi.getNetwork().then((network) => {
      console.log(`Your network: ${network}`);
    });
  }
});
```

### getNFT()

`getNFT(optionalParameters) -> <Promise<AccountNFToken[]|null|undefined>>`

Take as parameter an optional object:

- `optionalParameters` object

```ts
const optionalParameters = {
  // Limit the number of NFTokens to retrieve.
  limit?: number;
  // Value from a previous paginated response.
  // Resume retrieving data where that response left off.
  marker?: unknown;
}
```

Returns:

- `AccountNFToken[]` returns an array of owned NFTs.
- `null` user refused to share owned NFTs within GemWallet.
- `undefined` something went wrong.

```ts
interface AccountNFToken {
  Flags: number;
  Issuer: string;
  NFTokenID: string;
  NFTokenTaxon: number;
  URI?: string;
  nft_serial: number;
}
```

Here is an example of implementation:

```javascript
GemWalletApi.isConnected().then((isConnected) => {
  if (isConnected) {
    GemWalletApi.getNFT().then((nfts) => {
      console.log(`Your NFTs: ${nfts}`);
    });
  }
});
```

### getPublicKey()

`getPublicKey() -> <Promise<{ publicKey: string, address: string }|null|undefined>>`

Returns:

- `{ publicKey: string, address: string }` returns the public key and the classic address of the wallet.
- `null` user refused to share the public key within GemWallet.
- `undefined` something went wrong.

Here is an example of implementation:

```javascript
GemWalletApi.isConnected().then((isConnected) => {
  if (isConnected) {
    GemWalletApi.getPublicKey().then(({ publicKey }) => {
      console.log(`Your public key: ${publicKey}`);
    });
  }
});
```

### sendPayment()

`sendPayment(payment) -> <Promise<string|null|undefined>>`

Take as parameters:

- `payment` object

```ts
const payment = {
  // 	The amount of currency to deliver
  amount: string;
  // The unique address of the account receiving the payment
  destination: string;
  // The token that can be used
  currency?: string;
  // The issuer of the token
  issuer?: string;
}
```

Returns:

- `string` returns the hash of the transaction.
- `null` user refused the payment within GemWallet.
- `undefined` something went wrong.

Here is an example of implementation for an XRP Payment:

```javascript
GemWalletApi.isConnected().then((isConnected) => {
  if (isConnected) {
    const payment = {
      amount: "10",
      destination: "rLWQskMM8EoPxaLsmuQxE5rYeP4uX7dhym",
    };
    GemWalletApi.sendPayment(payment).then((trHash) => {
      console.log("Transaction Hash: ", trHash);
    });
  }
});
```

Here is an example of implementation for an ETH Payment:

```javascript
GemWalletApi.isConnected().then((isConnected) => {
  if (isConnected) {
    const payment = {
      amount: "10",
      destination: "rLWQskMM8EoPxaLsmuQxE5rYeP4uX7dhym",
      currency: "ETH",
      issuer: "rnm76Qgz4G9G4gZBJVuXVvkbt7gVD7szey",
    };
    GemWalletApi.sendPayment(payment).then((trHash) => {
      console.log("Transaction Hash: ", trHash);
    });
  }
});
```

### signMessage()

`signMessage(message) -> <Promise<string|null|undefined>>`

Take as parameters:

- `message` string

Returns:

- `string` returns the signed message.
- `null` user refused the payment within GemWallet.
- `undefined` something went wrong.

Here is an example of implementation:

```javascript
GemWalletApi.isConnected().then((isConnected) => {
  if (isConnected) {
    GemWalletApi.signMessage("The message I want to get signed").then(
      (signedMessage) => {
        console.log("Signed message: ", signedMessage);
      }
    );
  }
});
```

### addTrustline()

`addTrustline(transaction) -> <Promise<string|null|undefined>>`

Take as parameters:

- `transaction` object

```ts
const transaction = {
  // The token to be used
  currency: string;
  // The address of the account owing the token
  issuer: string;
  // Integer amount of XRP, in drops, to be destroyed as a cost for distributing this transaction to the network.
  // Some transaction types have different minimum requirements.
  fee?: string;
  // 	The maximum amount of currency that can be exchanged to the trustline
  value: string;
}
```

Returns:

- `string`: hash of the transaction
- `null`: user refused the payment
- `undefined`: something went wrong

Here is an example with a React web application:

```javascript
GemWalletApi.isConnected().then((isConnected) => {
  if (isConnected) {
    const transaction = {
      currency: "USD",
      issuer: "rwtDvu9QDfCskWuyE2TSEt3s56RbiWUKJN",
      value: "10000000",
    };
    GemWalletApi.addTrustline(transaction).then((trHash) => {
      console.log("Transaction Hash: ", trHash);
    });
  }
});
```
