---
id: gemwallet-api-reference
title: Reference
description: Provides the documentation on how to use GemWallet API.
---

## Methods

### getAddress

Retrieves the wallet address associated with the extension.

#### Request

This function does not require any parameters.

#### Response

The response is a Promise which resolves to an object with a `type` and `result` property.

- `type`: `"response" | "reject"`
- `result`:
  - `address`: The classic address of the wallet.

```javascript
type: "response";
result: {
  address: string;
}
```

or

```javascript
type: "reject";
result: undefined;
```

#### Error Handling

In case of error, the error will be thrown.

#### Examples

```tsx
import { getAddress } from "@gemwallet/api";

getAddress().then((response) => {
  console.log(response.result?.address);
});
```

Here is an example with a React web application:

```tsx
import { isInstalled, getAddress } from "@gemwallet/api";

function App() {
  const handleConnect = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        getAddress().then((response) => {
          console.log(`Your address: ${response.result?.address}`);
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

### getNetwork

Retrieves the network associated with the extension.

#### Request

This function does not require any parameters.

#### Response

The response is a Promise which resolves to an object with a `type` and `result` property.

- `type`: `"response" | "reject"`
- `result`:
  - `network`: The network name as a string.

Returns:

- `Mainnet` if the user is connected to the `main network`.
- `Testnet` if the user is connected to the `test network`.
- `Devnet` if the user is connected to the `developer network`.
- `AMM-Devnet` if the user is connected to the `AMM Devnet`.

```javascript
type: "response";
result: {
  network: string;
}
```

or

```javascript
type: "reject";
result: undefined;
```

#### Error Handling

In case of error, the error will be thrown.

#### Examples

```tsx
import { getNetwork } from "@gemwallet/api";

getNetwork().then((response) => {
  console.log(response.result?.network);
});
```

Here is an example with a React web application:

```tsx
import { isInstalled, getNetwork } from "@gemwallet/api";

function App() {
  const handleConnect = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        getNetwork().then((response) => {
          console.log(`Your network: ${response.result?.network}`);
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

### getNFT

Retrieves NFTs associated with the wallet.

#### Request

**Optional** - This function requires an optional payload parameter which has properties defined by `GetNFTRequest`.

- `limit`: The maximum number of NFTs to return.
- `marker`: A value from a previous paginated response. This is used to resume retrieving data where the previous response left off.

```typescript
interface GetNFTRequest {
  // Limit the number of NFTokens to retrieve.
  limit?: number;
  // Value from a previous paginated response. Resume retrieving data where that response left off.
  marker?: unknown;
}
```

#### Response

The response is a Promise which resolves to an object with a `type` and `result` property.

- `type`: `"response" | "reject"`
- `result`:
  - `account_nfts`: AccountNFToken[] - An array of NFTs associated with the wallet.
  - `marker`: A value to be used as a marker in a subsequent request.

```javascript
type: 'response'
result: {
  account_nfts: AccountNFToken[]
  marker: unknown
}
```

```typescript
interface AccountNFToken {
  Flags: number;
  Issuer: string;
  NFTokenID: string;
  NFTokenTaxon: number;
  URI?: string;
  nft_serial: number;
}
```

or

```javascript
type: "reject";
result: undefined;
```

#### Error Handling

In case of error, the error will be thrown.

#### Examples

```tsx
import { getNFT } from "@gemwallet/api";

getNFT({ limit: 10 }).then((response) => {
  console.log(response.result?.account_nfts);
});
```

Here is an example of implementation:

```tsx
import { isInstalled, getNFT } from "@gemwallet/api";

function App() {
  const handleNFTs = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        getNFT().then((result) => {
          console.log("Your NFTs: ", result.result?.account_nfts);
        });
      }
    });
  };

  return (
    <div className="App">
      <button onClick={handleNFTs}>Show my NFTs!</button>
    </div>
  );
}

export default App;
```

### getPublicKey

Retrieves the public key associated with the wallet.

#### Request

This function does not require any parameters.

#### Response

The response is a Promise which resolves to an object with a `type` and `result` property.

- `type`: `"response" | "reject"`
- `result`:
  - `address`: Classic address of the wallet.
  - `publicKey`: Public key of the wallet.

```javascript
type: "response";
result: {
  address: string;
  publicKey: string;
}
```

or

```javascript
type: "reject";
result: undefined;
```

#### Error Handling

In case of error, the error will be thrown.

#### Examples

```tsx
import { getPublicKey } from "@gemwallet/api";

getPublicKey().then((response) => {
  console.log(`${response.result?.address} - ${response.result?.publicKey}`);
});
```

Here is an example with a React web application:

```tsx
import { isInstalled, getPublicKey } from "@gemwallet/api";

function App() {
  const handleConnect = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        getPublicKey().then((response) => {
          console.log(
            `${response.result?.address} - ${response.result?.publicKey}`
          );
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

### isInstalled

Checks if the GemWallet extension is installed in the user's browser.

:::tip
We definitely recommend that you check if the user has GemWallet installed before using any of the other methods available.
:::

#### Request

This function does not require any parameters.

#### Response

```javascript
result: {
  isInstalled: boolean;
}
```

- `isInstalled`: `true` if the user has GemWallet extension installed, `false` otherwise.

#### Examples

```tsx
import { isInstalled } from "@gemwallet/api";

isInstalled().then((response) => {
  console.log(response.result.isInstalled);
});
```

Here is an example with a React web application:

```tsx
import { isInstalled } from "@gemwallet/api";

function App() {
  const handleConnect = () => {
    isInstalled().then((response) => {
      if (!response.result.isInstalled) {
        console.log("GemWallet is not installed");
      } else {
        console.log("GemWallet is installed");
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

### sendPayment

Initiates a payment transaction through the extension.

#### Request

**Mandatory** - The function takes a payload object as an input parameter, which has properties defined by `SendPaymentRequest`.

- `amount`: The amount to deliver, in one of the following formats:
  - A _string_ representing the number of XRP to deliver, in drops.
  - An _object_ where 'value' is a string representing the number of the token to deliver.
  - More technical details about the amount formats can be found [here](https://xrpl.org/basic-data-types.html#specifying-currency-amounts).
- `destination`: The unique address of the account receiving the payment.
- `memos`: The memos to attach to the transaction. Each attribute of each memo must be hex encoded.
  - More technical details about the memos can be found [here](https://xrpl.org/transaction-common-fields.html#memos-field).
- `destinationTag`: The destination tag to attach to the transaction.
- `fee`: Integer amount of XRP, in drops, to be destroyed as a cost for distributing this transaction to the network.
  - More technical details about the drops can be found [here](https://xrpl.org/currency-formats.html#xrp-amounts).
- `flags`: Flags to set on the transaction.

```typescript
export interface SendPaymentRequest {
  // The amount to deliver, in one of the following formats:
  // - A string representing the number of XRP to deliver, in drops.
  // - An object where 'value' is a string representing the number of the token to deliver.
  amount: Amount;
  // The unique address of the account receiving the payment
  destination: string;
  // The memos to attach to the transaction
  // Each attribute of each memo must be hex encoded
  memos?: Memo[];
  // The destination tag to attach to the transaction
  destinationTag?: number;
  // Integer amount of XRP, in drops, to be destroyed as a cost for distributing this transaction to the network
  fee?: string;
  // Flags to set on the transaction
  flags?: PaymentFlags;
}
```

```typescript
interface Amount {
  currency: string;
  issuer: string;
  value: string;
} | string;
```

More details about the amount format can be found [here](https://xrpl.org/basic-data-types.html#specifying-currency-amounts).

```typescript
interface Memo {
  memo: {
    memoType?: string;
    memoData?: string;
    memoFormat?: string;
  };
}
```

More technical details about the memos can be found [here](https://xrpl.org/transaction-common-fields.html#memos-field).

```typescript
interface PaymentFlags {
  tfNoDirectRipple?: boolean;
  tfPartialPayment?: boolean;
  tfLimitQuality?: boolean;
} | number;
```

More details about the flags can be found [here](https://xrpl.org/transaction-common-fields.html#flags-field).

#### Response

The response is a Promise which resolves to an object with a `type` and `result` property.

- `type`: `"response" | "reject"`
- `result`:
  - `hash`: The hash of the transaction.

```javascript
type: "response";
result: {
  hash: string;
}
```

or

```javascript
type: "reject";
result: undefined;
```

#### Error Handling

In case of error, the error will be thrown.

#### Examples

```tsx
import { sendPayment } from "@gemwallet/api";

const payload = {
  amount: "1000000", // In drops (1 XRP)
  destination: "rLWQskMM8EoPxaLsmuQxE5rYeP4uX7dhym",
  memos: [
    {
      memo: {
        memoType: "4465736372697074696f6e",
        memoData: "54657374206d656d6f",
      },
    },
  ],
  destinationTag: 12,
  fee: "199",
  flags: {
    tfNoDirectRipple: false,
    tfPartialPayment: false,
    tfLimitQuality: false,
  },
};

sendPayment(payload).then((response) => {
  console.log(response.result?.hash);
});
```

Here is an example for an XRP Payment with a React web application:

```tsx
import { isInstalled, sendPayment } from "@gemwallet/api";

function App() {
  const handleConnect = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        const payment = {
          amount: "1000000", // In drops (1 XRP)
          destination: "rLWQskMM8EoPxaLsmuQxE5rYeP4uX7dhym",
        };
        sendPayment(payment).then((response) => {
          console.log("Transaction Hash: ", response.result?.hash);
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

Here is an example for an ETH Payment with a React web application:

```tsx
import { isInstalled, sendPayment } from "@gemwallet/api";

function App() {
  const handleConnect = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        const payment = {
          amount: {
            currency: "ETH",
            value: "0.01", // In currency
            issuer: "rnm76Qgz4G9G4gZBJVuXVvkbt7gVD7szey",
          },
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

### setTrustLine

Adds or edits a trustline within the wallet.

#### Request

**Mandatory** - The function takes a payload of type `SetTrustlineRequest` as an input parameter.

- `limitAmount`: The maximum amount of currency that can be exchanged to the trustline.
  - More technical details about the amount formats can be found [here](https://xrpl.org/basic-data-types.html#specifying-currency-amounts).
- `fee`: Integer amount of XRP, in drops, to be destroyed as a cost for distributing this transaction to the network. Some transaction types have different minimum requirements.
  - More technical details about the drops can be found [here](https://xrpl.org/currency-formats.html#xrp-amounts).
- `memos`: The memos to attach to the transaction. Each attribute of each memo must be hex encoded.
  - More technical details about the memos can be found [here](https://xrpl.org/transaction-common-fields.html#memos-field).
- `flags`: Flags to set on the transaction.

```typescript
interface SetTrustlineRequest {
  // The maximum amount of currency that can be exchanged to the trustline
  limitAmount: IssuedCurrencyAmount;
  // Integer amount of XRP, in drops, to be destroyed as a cost for distributing this transaction to the network.
  // Some transaction types have different minimum requirements.
  fee?: string;
  // The memos to attach to the transaction
  // Each attribute of each memo must be hex encoded
  memos?: Memo[];
  // Flags to set on the transaction
  flags?: TrustSetFlags;
}
```

```typescript
interface Memo {
  memo: {
    memoType?: string;
    memoData?: string;
    memoFormat?: string;
  };
}
```

More technical details about the memos can be found [here](https://xrpl.org/transaction-common-fields.html#memos-field).

```typescript
interface TrustSetFlags {
  tfSetfAuth?: boolean;
  tfSetNoRipple?: boolean;
  tfClearNoRipple?: boolean;
  tfSetFreeze?: boolean;
  tfClearFreeze?: boolean;
} | number;
```

More details about the flags can be found [here](https://xrpl.org/transaction-common-fields.html#flags-field).

#### Response

The response is a Promise which resolves to an object with a `type` and `result` property.

- `type`: `"response" | "reject"`
- `result`:
  - `hash`: The hash of the transaction.

```javascript
type: "response";
result: {
  hash: string;
}
```

or

```javascript
type: "reject";
result: undefined;
```

#### Error Handling

In case of error, the error will be thrown.

#### Examples

```tsx
import { setTrustline } from "@gemwallet/api";

const trustline = {
  limitAmount: {
    currency: "ETH",
    issuer: "rnm76Qgz4G9G4gZBJVuXVvkbt7gVD7szey",
    value: "10000000",
  },
  memos: [
    {
      memo: {
        memoType: "4465736372697074696f6e",
        memoData: "54657374206d656d6f",
      },
    },
  ],
  fee: "199",
  flags: {
    tfClearFreeze: false,
    tfClearNoRipple: false,
    tfSetFreeze: true,
    tfSetNoRipple: true,
    tfSetfAuth: false,
  },
};

setTrustline(trustline).then((response) => {
  console.log(response.result?.hash);
});
```

Here is an example with a React web application:

```tsx
import { isInstalled, addTrustline } from "@gemwallet/api";

function App() {
  const handleConnect = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        const transaction = {
          limitAmount: {
            currency: "ETH",
            issuer: "rnm76Qgz4G9G4gZBJVuXVvkbt7gVD7szey",
            value: "10000000",
          },
        };
        addTrustline(transaction).then((response) => {
          console.log("Transaction Hash: ", response.result?.hash);
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

### signMessage

Signs a message using the private key of the user's wallet.

#### Request

The function takes a message string as an input parameter.

#### Response

The response is a Promise which resolves to an object with a `type` and `result` property.

- `type`: `"response" | "reject"`
- `result`:
  - `signedMessage`: The signed message.

```javascript
type: "response";
result: {
  signedMessage: string;
}
```

or

```javascript
type: "reject";
result: undefined;
```

#### Error Handling

In case of error, the error will be thrown.

#### Examples

```tsx
import { signMessage } from "@gemwallet/api";

const message = "Hello, World!";

signMessage(message).then((response) => {
  console.log(response.result?.signedMessage);
});
```

Here is an example with a React web application:

```tsx
import { isInstalled, signMessage } from "@gemwallet/api";

function App() {
  const handleConnect = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        signMessage("The message I want to get signed").then((response) => {
          console.log("Signed message: ", response.result?.signedMessage);
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
