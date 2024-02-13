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

Install the packaged library via script tag using cdnjs, swapping in the desired version number for \{version\}. You can also replace \{version\} with `master` to get the last version (not recommended).

```html
<head>
  <script src="https://cdn.jsdelivr.net/gh/GemWallet/gemwallet-extension@{version}/dist/gemwallet-api.min.js"></script>
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

`getNetwork() -> <Promise<'Mainnet'|'Testnet'|'Devnet'|'NFTDevnet'>>`

Returns:

- `Mainnet` if the user is connected to the `main network`.
- `Testnet` if the user is connected to the `test network`.
- `Devnet` if the user is connected to the `developer network`.
- `NFTDevnet` if the user is connected to the `NFT Devnet`.

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

```js
const payment = {
  // The amount of currency to deliver (in drops)
  amount: string;
  // The unique address of the account receiving the payment
  destination: string;
}
```

Returns:

- `string` returns the hash of the transaction.
- `null` user refused the payment within GemWallet.
- `undefined` something went wrong.

Here is an example of implementation:

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
