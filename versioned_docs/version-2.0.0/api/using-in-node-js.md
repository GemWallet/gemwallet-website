---
id: using-gemwallet-in-node-js
title: Using GemWallet in Node.js
description: Provides the documentation on how to use GemWallet in a Node.js application like React thanks to npm.
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
      console.log(`Is the user having GemWallet installed? ${isConnected}`)
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

### getAddress()

`getAddress() -> <Promise<string|null|undefined>>`

Returns:

- `string` returns the classic address of the wallet.
- `null` user refused to share the address within GemWallet.
- `undefined` something went wrong.

Here is an example with a React web application:

```jsx
import { isConnected, getAddress } from "@gemwallet/api";

function App() {
  const handleConnect = () => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        getAddress().then((address) => {
          console.log(`Your address: ${address}`);
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

### getNetwork()

`getNetwork() -> <Promise<'Mainnet'|'Testnet'|'Devnet'|'NFTDevnet'>>`

Returns:

- `Mainnet` if the user is connected to the `main network`.
- `Testnet` if the user is connected to the `test network`.
- `Devnet` if the user is connected to the `developer network`.
- `NFTDevnet` if the user is connected to the `NFT Devnet`.

Here is an example with a React web application:

```jsx
import { isConnected, getNetwork } from "@gemwallet/api";

function App() {
  const handleConnect = () => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        getNetwork().then((network) => {
          console.log(`Your network: ${network}`);
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

### getPublicKey()

`getPublicKey() -> <Promise<{ publicKey: string, address: string }|null|undefined>>`

Returns:

- `{ publicKey: string, address: string }` returns the public key and the classic address of the wallet.
- `null` user refused to share the public key within GemWallet.
- `undefined` something went wrong.

Here is an example with a React web application:

```jsx
import { isConnected, getPublicKey } from "@gemwallet/api";

function App() {
  const handleConnect = () => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        getPublicKey().then(({ publicKey }) => {
          console.log(`Your public key: ${publicKey}`);
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

Here is an example with a React web application:

```jsx
import { isConnected, sendPayment } from "@gemwallet/api";

function App() {
  const handleConnect = () => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        const payment = {
          amount: "10",
          destination: "rLWQskMM8EoPxaLsmuQxE5rYeP4uX7dhym",
        };
        sendPayment(payment).then((trHash) => {
          console.log("Transaction Hash: ", trHash);
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

### signMessage()

`signMessage(message) -> <Promise<string|null|undefined>>`

Take as parameters:

- `message` string

Returns:

- `string` returns the signed message.
- `null` user refused the payment within GemWallet.
- `undefined` something went wrong.

Here is an example with a React web application:

```jsx
import { isConnected, signMessage } from "@gemwallet/api";

function App() {
  const handleConnect = () => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        signMessage("The message I want to get signed").then(
          (signedMessage) => {
            console.log("Signed message: ", signedMessage);
          }
        );
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
