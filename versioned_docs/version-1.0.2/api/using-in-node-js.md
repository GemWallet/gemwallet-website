---
id: using-gemwallet-in-node-js
title: Using GemWallet in Node.js
description: Provides the documentation on how to use GemWallet in a Node.js application like React thanks to npm.
sidebar_position: 3
---

:::info
This page assumes that you have GemWallet installed.
:::

## Installing the library

Let's first install the library from npm:

- Install the module using npm: `npm install @gemwallet/api`

- Install the module using yarn: `yarn add @gemwallet/api`

Now let's dig into what functionalities are available to you.

## Methods

### isConnected()

:::tip
We definitely recommend that you check if the user is connected before using any of the other methods available.
:::
`isConnected() -> <Promise<boolean>>`

Returns `true` if the user has GemWallet extension installed, and `false` otherwise.

Here is an example with a React web application:

```jsx
import { isConnected } from "@gemwallet/api";

function App() {
  const handleConnect = () => {
    isConnected().then((isConnected) =>
      console.log(`Is the user having gemwallet installed? ${isConnected}`)
    );
  };
  return (
    <div className="App">
      <button onClick={handleConnect}>Click me!</button>
    </div>
  );
}

export default App;
```

### getNetwork()

`getNetwork() -> <Promise<'TEST'|'MAIN'>>`

Returns `TEST` if the user is connected to the `test network`, and `MAIN` if connected to the `main network`.

Here is an example with a React web application:

```jsx
import { isConnected, getNetwork } from "@gemwallet/api";

function App() {
  const handleConnect = () => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        getNetwork().then((network) => {
          console.log(`NETWORK: ${network}`);
        });
      }
    });
  };

  return (
    <div className="App">
      <button onClick={handleConnect}>Click me!</button>
    </div>
  );
}

export default App;
```

### transactionRequest()

`transactionRequest() -> <Promise<'waiting'|'pending'|'success'|'rejected'>>`

Transaction can have 4 stages:

- `waiting`: waiting for a user interaction
- `pending`: transaction is pending to be a success or rejected (in progress)
- `success`: transaction has been successful
- `rejected`: transaction has been rejected

Here is an example with a React web application:

```jsx
import { isConnected, transactionRequest } from "@gemwallet/api";

function App() {
  const handleConnect = () => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        const transaction = {
          chain: "xrp",
          network: "TEST",
          transaction: "payment",
          amount: "50",
          destination: "rMrXopFSnCDSd5Eej4TpeHrV7SPjKtLpo2",
          token: "xrp",
          apiVersion: 1,
        };
        transactionRequest(transaction).then((status) => {
          console.log(`TRANSACTION STATUS: ${status}`);
        });
      }
    });
  };

  return (
    <div className="App">
      <button onClick={handleConnect}>Click me!</button>
    </div>
  );
}

export default App;
```
