---
id: using-gemwallet-in-browser
title: Using GemWallet in the browser
sidebar_position: 2
---

:::info
This page assumes that you have GemWallet installed.
:::

## Importing the library

Let's first import the library in the `<head>` tag of our page.

Install the packaged library via script tag using cdnjs, swapping in the desired version number for {version}. You can also replace {version} with `master` to get the last version (not recommended).

```html
<head>
  <script src="https://cdn.jsdelivr.net/gh/GemWallet/gemwallet-extension@{version}/dist/gemwallet-api.min.js"></script>
</head>
```

This will expose a global variable called `window.gemWalletApi` that will contain our library.

Now let's dig into what functionalities are available to you.

## Methods

### isConnected()

:::tip
We recommend that you check if the user is connected before using any of the other methods available.
:::
`isConnected() -> <Promise<boolean>>`

Returns `true` if the user has GemWallet extension installed, and `false` otherwise.

```javascript
gemWalletApi.isConnected().then((isConnected) => {
  if (isConnected) {
    console.log("User has GemWallet!");
  } else {
    console.log("User doesn't have GemWallet!");
  }
});
```

### getNetwork()

`getNetwork() -> <Promise<'TEST'|'MAIN'>>`

Returns `TEST` if the user is connected to the `test network`, and `MAIN` if connected to the `main network`.

```javascript
gemWalletApi.isConnected().then((isConnected) => {
  if (isConnected) {
    gemWalletApi.getNetwork().then((network) => {
      console.log(`NETWORK: ${network}`);
    });
  }
});
```

### transactionRequest()

`transactionRequest() -> <Promise<'waiting'|'pending'|'success'|'rejected'>>`

Transaction can have 4 stages:

- `waiting`: waiting for a user interaction
- `pending`: transaction is pending to be a success or rejected (in progress)
- `success`: transaction has been successful
- `rejected`: transaction has been rejected

```javascript
gemWalletApi.isConnected().then((isConnected) => {
  if (isConnected) {
    const transaction = {
      chain: "xrp",
      network: "TEST",
      transaction: "payment",
      amount: "50",
      destination: "rNvFCZXpDtGeQ3bVas95wGLN6N2stGmA9o",
      token: "xrp",
      apiVersion: 1,
    };
    gemWalletApi.transactionRequest(transaction).then((status) => {
      console.log(`TRANSACTION STATUS: ${status}`);
    });
  }
});
```
