---
id: gemwallet-api-reference
title: Reference
description: Provides the documentation on how to use GemWallet API.
---

## Methods

### acceptNFTOffer

Accepts an existing offer for a Non-Fungible Token (NFT) through the extension.

#### Request
**Mandatory** - The function takes a payload of type `AcceptNFTOfferRequest` as an input parameter.

- All the fields from `BaseTransactionRequest`.
  - See [BaseTransactionRequest](#basetransactionrequest) for more details.
- `NFTokenSellOffer`: Identifies the NFTokenOffer that offers to sell the NFToken.
- `NFTokenBuyOffer`: Identifies the NFTokenOffer that offers to buy the NFToken.
- `NFTokenBrokerFee`: 
  This field is only valid in brokered mode, and specifies the amount that the broker keeps as part of their fee for bringing the two offers together; the remaining amount is sent to the seller of the NFToken being bought. 
  - If specified, the fee must be such that, before applying the transfer fee, the amount that the seller would receive is at least as much as the amount indicated in the sell offer.
  - Specified in one of the following formats:
    - A _string_ representing the number of XRP to deliver, in drops.
    - An _object_ where 'value' is a string representing the number of the token to deliver.
    - More technical details about the amount formats can be found [here](https://xrpl.org/basic-data-types.html#specifying-currency-amounts).

```typescript
interface AcceptNFTOfferRequest extends BaseTransactionRequest {
  // Identifies the NFTokenOffer that offers to sell the NFToken.
  NFTokenSellOffer?: string;
  // Identifies the NFTokenOffer that offers to buy the NFToken.
  NFTokenBuyOffer?: string;
  // This field is only valid in brokered mode, and specifies the amount that the broker keeps as part of their fee for
  // bringing the two offers together; the remaining amount is sent to the seller of the NFToken being bought.
  // If specified, the fee must be such that, before applying the transfer fee, the amount that the seller would receive
  // is at least as much as the amount indicated in the sell offer.
  NFTokenBrokerFee?: Amount;
}
```

```typescript
type Amount = {
  currency: string;
  issuer: string;
  value: string;
} | string;
```

More details about the amount format can be found [here](https://xrpl.org/basic-data-types.html#specifying-currency-amounts).

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
import { acceptNFTOffer } from "@gemwallet/api";

const payload = {
  NFTokenSellOffer: "Replace me!",
  fee: "199",
  memos: [
    {
      memo: {
        memoType: "4465736372697074696f6e",
        memoData: "54657374206d656d6f"
      }
    }
  ]
};

acceptNFTOffer(payload).then((response) => {
  console.log("Transaction Hash: ", response.result?.hash);
});
```

Here is an example with a React web application:

```tsx
import { isInstalled, acceptNFTOffer } from "@gemwallet/api";

function App() {
  const handleAcceptOffer = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        const payload = {
          NFTokenSellOffer: "Replace me!",
          fee: "199",
          memos: [
            {
              memo: {
                memoType: "4465736372697074696f6e",
                memoData: "54657374206d656d6f"
              }
            }
          ]
        };
        acceptNFTOffer(payload).then((response) => {
          console.log("Transaction Hash: ", response.result?.hash);
        });
      }
    });
  };

  return (
    <div className="App">
      <button onClick={handleAcceptOffer}>Accept NFT Offer</button>
    </div>
  );
}

export default App;
```

### burnNFT

Burns a Non-Fungible Token (NFT) through the extension.

#### Request
**Mandatory** - The function takes a payload of type `BurnNFTRequest` as an input parameter.

- All the fields from `BaseTransactionRequest`.
  - See [BaseTransactionRequest](#basetransactionrequest) for more details.
- `NFTokenID`: The NFToken to be removed by this transaction.
- `owner`: The owner of the NFToken to burn. 
  - Only used if that owner is different than the account sending this transaction.
  - The issuer or authorized minter can use this field to burn NFTs that have the lsfBurnable flag enabled.

```typescript
interface BurnNFTRequest extends BaseTransactionRequest {
  // The NFToken to be removed by this transaction.
  NFTokenID: string;
  // The owner of the NFToken to burn. Only used if that owner is different than the account sending this transaction.
  // The issuer or authorized minter can use this field to burn NFTs that have the lsfBurnable flag enabled.
  owner?: string;
}
```

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
import { burnNFT } from "@gemwallet/api";

const payload = {
  NFTokenID: "Replace me!",
  fee: "199",
  memos: [
    {
      memo: {
        memoType: "4465736372697074696f6e",
        memoData: "54657374206d656d6f"
      }
    }
  ]
};

burnNFT(payload).then((response) => {
  console.log("Transaction Hash: ", response.result?.hash);
});
```

Here is an example with a React web application:

```tsx
import { isInstalled, burnNFT } from "@gemwallet/api";

function App() {
  const handleBurnNFT = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        const payload = {
          NFTokenID: "Replace me!",
          fee: "199",
          memos: [
            {
              memo: {
                memoType: "4465736372697074696f6e",
                memoData: "54657374206d656d6f"
              }
            }
          ]
        };
        burnNFT(payload).then((response) => {
          console.log("Transaction Hash: ", response.result?.hash);
        });
      }
    });
  };

  return (
    <div className="App">
      <button onClick={handleBurnNFT}>Burn NFT</button>
    </div>
  );
}

export default App;
```

### cancelNFTOffer

Cancels an existing offer for a Non-Fungible Token (NFT) through the extension.

#### Request
**Mandatory** - The function takes a payload of type `CancelNFTOfferRequest` as an input parameter.

- All the fields from `BaseTransactionRequest`.
  - See [BaseTransactionRequest](#basetransactionrequest) for more details.
- `NFTokenOffers`: An array of IDs of the NFTokenOffer objects to cancel. 
  - Each entry must be a different object ID of an NFTokenOffer object; the transaction is invalid if the array contains duplicate entries.

```typescript
interface CancelNFTOfferRequest extends BaseTransactionRequest {
  // An array of IDs of the NFTokenOffer objects to cancel (not the IDs of NFToken objects, but the IDs of the
  // NFTokenOffer objects). Each entry must be a different object ID of an NFTokenOffer object; the transaction is
  // invalid if the array contains duplicate entries.
  NFTokenOffers: string[];
}
```

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
import { cancelNFTOffer } from "@gemwallet/api";

const payload = {
  NFTokenOffers: ["Replace me!"],
  fee: "199",
  memos: [
    {
      memo: {
        memoType: "4465736372697074696f6e",
        memoData: "54657374206d656d6f"
      }
    }
  ]
};

cancelNFTOffer(payload).then((response) => {
  console.log("Transaction Hash: ", response.result?.hash);
});
```

Here is an example with a React web application:

```tsx
import { isInstalled, cancelNFTOffer } from "@gemwallet/api";

function App() {
  const handleCancelNFTOffer = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        const payload = {
          NFTokenOffers: ["Replace me!"],
          fee: "199",
          memos: [
            {
              memo: {
                memoType: "4465736372697074696f6e",
                memoData: "54657374206d656d6f"
              }
            }
          ]
        };
        cancelNFTOffer(payload).then((response) => {
          console.log("Transaction Hash: ", response.result?.hash);
        });
      }
    });
  };

  return (
    <div className="App">
      <button onClick={handleCancelNFTOffer}>Cancel NFT Offer!</button>
    </div>
  );
}

export default App;
```

### cancelOffer

Cancels an existing offer through the extension.

#### Request
**Mandatory** - The function takes a payload of type `CancelOfferRequest` as an input parameter.

- All the fields from `BaseTransactionRequest`.
  - See [BaseTransactionRequest](#basetransactionrequest) for more details.
- `offerSequence`: The sequence number (or Ticket number) of a previous OfferCreate transaction. 
  - If specified, cancel any offer object in the ledger that was created by that transaction. 
  - It is not considered an error if the offer specified does not exist.

```typescript
interface CancelOfferRequest extends BaseTransactionRequest {
  // The sequence number (or Ticket number) of a previous OfferCreate transaction. If specified, cancel any offer object
  // in the ledger that was created by that transaction. It is not considered an error if the offer specified does not
  // exist.
  offerSequence: number;
}
```

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
import { cancelOffer } from "@gemwallet/api";

const payload = {
  offerSequence: 0, // Replace me!
  fee: "199",
  memos: [
    {
      memo: {
        memoType: "4465736372697074696f6e",
        memoData: "54657374206d656d6f"
      }
    }
  ]
};

cancelOffer(payload).then((response) => {
  console.log("Transaction Hash: ", response.result?.hash);
});
```

Here is an example with a React web application:

```tsx
import { isInstalled, cancelOffer } from "@gemwallet/api";

function App() {
  const handleCancelOffer = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        const payload = {
          offerSequence: 0, // Replace me!
          fee: "199",
          memos: [
            {
              memo: {
                memoType: "4465736372697074696f6e",
                memoData: "54657374206d656d6f"
              }
            }
          ]
        };
        cancelOffer(payload).then((response) => {
          console.log("Transaction Hash: ", response.result?.hash);
        });
      }
    });
  };

  return (
    <div className="App">
      <button onClick={handleCancelOffer}>Cancel Offer</button>
    </div>
  );
}

export default App;
```

### createNFTOffer

Creates a new offer for a Non-Fungible Token (NFT) through the extension.

#### Request
**Mandatory** - The function takes a payload of type `CreateNFTOfferRequest` as an input parameter.

- All the fields from `BaseTransactionRequest`.
  - See [BaseTransactionRequest](#basetransactionrequest) for more details.
- `NFTokenID`: Identifies the NFTokenID of the NFToken object that the offer references.
- `amount`: Indicates the amount expected or offered for the Token.
  - The amount must be non-zero, except when this is a sell offer and the asset is XRP. This would indicate that the current owner of the token is giving it away free, either to anyone at all, or to the account identified by the Destination field.
  - Specified in one of the following formats:
    - A _string_ representing the number of XRP to deliver, in drops.
    - An _object_ where 'value' is a string representing the number of the token to deliver.
    - More technical details about the amount formats can be found [here](https://xrpl.org/basic-data-types.html#specifying-currency-amounts).
- `owner`: Indicates the AccountID of the account that owns the corresponding NFToken. 
  - If the offer is to buy a token, this field must be present and it must be different than Account (since an offer to buy a token one already holds is meaningless). 
  - If the offer is to sell a token, this field must not be present, as the owner is, implicitly, the same as Account (since an offer to sell a token one doesn't already hold is meaningless).
- `expiration`: Indicates the time after which the offer will no longer be valid. The value is the number of seconds since the Ripple Epoch.
- `destination`: If present, indicates that this offer may only be accepted by the specified account. 
  - Attempts by other accounts to accept this offer MUST fail.
- `flags`: Flags to set on the transaction.

```typescript
interface CreateNFTOfferRequest extends BaseTransactionRequest {
  // Identifies the NFTokenID of the NFToken object that the offer references.
  NFTokenID: string;
  // Indicates the amount expected or offered for the Token.
  // The amount must be non-zero, except when this is a sell offer and the asset is XRP. This would indicate that the
  // current owner of the token is giving it away free, either to anyone at all, or to the account identified by the
  // Destination field.
  amount: Amount;
  // Indicates the AccountID of the account that owns the corresponding NFToken.
  // If the offer is to buy a token, this field must be present and it must be different than Account (since an offer
  // to buy a token one already holds is meaningless).
  // If the offer is to sell a token, this field must not be present, as the owner is, implicitly, the same as Account
  // (since an offer to sell a token one doesn't already hold is meaningless).
  owner?: string;
  // Indicates the time after which the offer will no longer be valid. The value is the number of seconds since the
  // Ripple Epoch.
  expiration?: number;
  // If present, indicates that this offer may only be accepted by the specified account. Attempts by other accounts to
  // accept this offer MUST fail.
  destination?: string;
  flags?: CreateNFTOfferFlags;
}
```

```typescript
type CreateNFTOfferFlags = {
  tfSellNFToken?: boolean;
} | number;
```

More details about the flags can be found [here](https://xrpl.org/transaction-common-fields.html#flags-field).

```typescript
type Amount = {
  currency: string;
  issuer: string;
  value: string;
} | string;
```

More details about the amount format can be found [here](https://xrpl.org/basic-data-types.html#specifying-currency-amounts).

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
import { createNFTOffer } from "@gemwallet/api";

const payload = {
  NFTokenID: "Replace me!",
  amount: 50000000, // 50 XRP
  fee: "199",
  flags: {
    tfSellNFToken: true // If enabled, indicates that the offer is a sell offer. Otherwise, it is a buy offer.
  },
  memos: [
    {
      memo: {
        memoType: "4465736372697074696f6e",
        memoData: "54657374206d656d6f"
      }
    }
  ]
};

createNFTOffer(payload).then((response) => {
  console.log("Transaction Hash: ", response.result?.hash);
});
```

Here is an example with a React web application:

```tsx
import { isInstalled, createNFTOffer } from "@gemwallet/api";

function App() {
  const handleCreateNFTOffer = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        const payload = {
          NFTokenID: "Replace me!",
          amount: 50000000, // 50 XRP
          fee: "199",
          flags: {
            tfSellNFToken: true // If enabled, indicates that the offer is a sell offer. Otherwise, it is a buy offer.
          },
          memos: [
            {
              memo: {
                memoType: "4465736372697074696f6e",
                memoData: "54657374206d656d6f"
              }
            }
          ]
        };
        createNFTOffer(payload).then((response) => {
          console.log("Transaction Hash: ", response.result?.hash);
        });
      }
    });
  };

  return (
    <div className="App">
      <button onClick={handleCreateNFTOffer}>Create NFT Offer!</button>
    </div>
  );
}

export default App;
```

### createOffer

Creates a new offer through the extension.

#### Request

**Mandatory** - The function takes a payload of type `CreateOfferRequest` as an input parameter.

- All the fields from `BaseTransactionRequest`.
  - See [BaseTransactionRequest](#basetransactionrequest) for more details.
- `flags`: Flags to set on the transaction.
- `expiration`: Time after which the Offer is no longer active, in seconds since the Ripple Epoch.
- `offerSequence`: An Offer to delete first, specified in the same way as OfferCancel.
- `takerGets`: The amount and type of currency being sold, in one of the following formats:
  - A _string_ representing the number of XRP to deliver, in drops.
  - An _object_ where 'value' is a string representing the number of the token to deliver.
  - More technical details about the amount formats can be found [here](https://xrpl.org/basic-data-types.html#specifying-currency-amounts).
- `takerPays`: The amount and type of currency being bought, in one of the following formats:
  - A _string_ representing the number of XRP to deliver, in drops.
  - An _object_ where 'value' is a string representing the number of the token to deliver.
  - More technical details about the amount formats can be found [here](https://xrpl.org/basic-data-types.html#specifying-currency-amounts).

```typescript
interface CreateOfferRequest extends BaseTransactionRequest {
  flags?: CreateOfferFlags;
  // Time after which the Offer is no longer active, in seconds since the Ripple Epoch.
  expiration?: number;
  // An Offer to delete first, specified in the same way as OfferCancel.
  offerSequence?: number;
  // The amount and type of currency being sold.
  takerGets: Amount;
  // The amount and type of currency being bought.
  takerPays: Amount;
}
```

```typescript
type OfferCreateFlagsInterface = {
    tfPassive?: boolean;
    tfImmediateOrCancel?: boolean;
    tfFillOrKill?: boolean;
    tfSell?: boolean;
} | number;
```

```typescript
type Amount = {
  currency: string;
  issuer: string;
  value: string;
} | string;
```

More details about the amount format can be found [here](https://xrpl.org/basic-data-types.html#specifying-currency-amounts).

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
import { createOffer } from "@gemwallet/api";

const payload = {
  takerGets: "10000000", // 10 XRP
  takerPays: {
    currency: "ETH",
    issuer: "rnm76Qgz4G9G4gZBJVuXVvkbt7gVD7szey",
    value: "0.1"
  },
  flags: {
    tfPassive: true
  },
  fee: "199",
  memos: [
    {
      memo: {
        memoType: "4465736372697074696f6e",
        memoData: "54657374206d656d6f"
      }
    }
  ]
};

createOffer(payload).then((response) => {
  console.log("Transaction Hash: ", response.result?.hash);
});
```

Here is an example with a React web application:

```tsx
import { isInstalled, createOffer } from "@gemwallet/api";

function App() {
  const handleCreateOffer = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        const payload = {
          takerGets: "10000000", // 10 XRP
          takerPays: {
            currency: "ETH",
            issuer: "rnm76Qgz4G9G4gZBJVuXVvkbt7gVD7szey",
            value: "0.1"
          },
          flags: {
            tfPassive: true
          },
          fee: "199",
          memos: [
            {
              memo: {
                memoType: "4465736372697074696f6e",
                memoData: "54657374206d656d6f"
              }
            }
          ]
        };
        createOffer(payload).then((response) => {
          console.log("Transaction Hash: ", response.result?.hash);
        });
      }
    });
  };

  return (
    <div className="App">
      <button onClick={handleCreateOffer}>Create Offer</button>
    </div>
  );
}

export default App;
```

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
type: "response";
result: {
  account_nfts: AccountNFToken[];
  marker: unknown;
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

### mintNFT

Mints a new Non-Fungible Token (NFT) through the extension.

#### Request

**Mandatory** - The function takes a payload of type `MintNFTRequest` as an input parameter.

- All the fields from `BaseTransactionRequest`.
  - See [BaseTransactionRequest](#basetransactionrequest) for more details.
- `flags`: Flags to be set on the transaction.
- `issuer`: Indicates the issuer of the token. 
  - Should only be specified if the account executing the transaction is not the Issuer of the token, e.g. when minting on behalf of another account.
- `NFTokenTaxon`: Indicates the taxon associated with this token. 
  - The taxon is generally a value chosen by the minter of the token and a given taxon may be used for multiple tokens. 
  - The implementation reserves taxon identifiers greater than or equal to 2147483648 (0x80000000). 
  - If you have no use for this field, set it to 0.
- `transferFee`: Specifies the fee charged by the issuer for secondary sales of the Token, if such sales are allowed. 
  - Valid values for this field are between 0 and 50000 inclusive, allowing transfer rates between 0.000% and 50.000% in increments of 0.001%. 
  - This field must NOT be present if the tfTransferable flag is not set.
- `URI`: URI that points to the data and/or metadata associated with the NFT. 
  - This field need not be an HTTP or HTTPS URL; it could be an IPFS URI, a magnet link, immediate data encoded as an RFC2379 "data" URL, or even an opaque issuer-specific encoding. 
  - The URI is NOT checked for validity, but the field is limited to a maximum length of 256 bytes. 
  - This field must be hex-encoded.

```typescript
interface MintNFTRequest extends BaseTransactionRequest {
  flags?: MintNFTFlags;
  // Indicates the issuer of the token.
  // Should only be specified if the account executing the transaction is not the Issuer of the token, e.g. when minting on behalf of another account.
  issuer?: string;
  // Indicates the taxon associated with this token. The taxon is generally a value chosen by the minter of the token
  // and a given taxon may be used for multiple tokens. The implementation reserves taxon identifiers greater than or
  // equal to 2147483648 (0x80000000). If you have no use for this field, set it to 0.
  NFTokenTaxon: number;
  // Specifies the fee charged by the issuer for secondary sales of the Token, if such sales are allowed. Valid values
  // for this field are between 0 and 50000 inclusive, allowing transfer rates between 0.000% and 50.000% in increments
  // of 0.001%. This field must NOT be present if the tfTransferable flag is not set.
  transferFee?: number;
  // URI that points to the data and/or metadata associated with the NFT. This field need not be an HTTP or HTTPS URL;
  // it could be an IPFS URI, a magnet link, immediate data encoded as an RFC2379 "data" URL, or even an opaque
  // issuer-specific encoding. The URI is NOT checked for validity, but the field is limited to a maximum length of
  // 256 bytes.
  // This field must be hex-encoded.
  URI?: string;
}
```

```typescript
type MintNFTFlags = {
  tfBurnable?: boolean;
  tfOnlyXRP?: boolean;
  tfTrustLine?: boolean;
  tfTransferable?: boolean;
} | number;
```

More details about the flags can be found [here](https://xrpl.org/transaction-common-fields.html#flags-field).

#### Response

The response is a Promise which resolves to an object with a `type` and `result` property.

- `type`: `"response" | "reject"`
- `result`:
  - `NFTokenID`: The ID of the NFT.
  - `hash`: The hash of the transaction.

```javascript
type: "response";
result: {
  NFTokenID: string;
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
import { mintNFT } from "@gemwallet/api";

const payload = {
  URI: "4d696e746564207468726f7567682047656d57616c6c657421",
  flags: {
    tfOnlyXRP: true,
    tfTransferable: true
  },
  fee: "199",
  transferFee: 3000, // 3%,
  NFTokenTaxon: 0,
  memos: [
    {
      memo: {
        memoType: "4465736372697074696f6e",
        memoData: "54657374206d656d6f"
      }
    }
  ]
};

mintNFT(payload).then((response) => {
  console.log("NFT ID: ", response.result?.NFTokenID);
  console.log("Transaction Hash: ", response.result?.hash);
});
```

Here is an example with a React web application:

```tsx
import { isInstalled, mintNFT } from "@gemwallet/api";

function App() {
  const handleMintNFT = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        const payload = {
          URI: "4d696e746564207468726f7567682047656d57616c6c657421",
          flags: {
            tfOnlyXRP: true,
            tfTransferable: true
          },
          fee: "199",
          transferFee: 3000, // 3%,
          NFTokenTaxon: 0,
          memos: [
            {
              memo: {
                memoType: "4465736372697074696f6e",
                memoData: "54657374206d656d6f"
              }
            }
          ]
        };
        mintNFT(payload).then((response) => {
          console.log("NFT ID: ", response.result?.NFTokenID);
          console.log("Transaction Hash: ", response.result?.hash);
        });
      }
    });
  };

  return (
    <div className="App">
      <button onClick={handleMintNFT}>Mint NFT!</button>
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
type Amount = {
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
type PaymentFlags = {
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

### setAccount

Sets an account through the extension.

#### Request

**Mandatory** - The function takes a payload of type `SetAccountRequest` as an input parameter.

- All the fields from `BaseTransactionRequest`.
  - See [BaseTransactionRequest](#basetransactionrequest) for more details.
- `flags`: Flags to set on the transaction.
- `clearFlag`: Unique identifier of a flag to disable for this account.
- `domain`: The domain that owns this account, as a string of hex representing the ASCII for the domain in lowercase. 
  - Cannot be more than 256 bytes in length.
- `emailHash`: An arbitrary 128-bit value. 
  - Conventionally, clients treat this as the md5 hash of an email address to use for displaying a Gravatar image.
- `messageKey`: Public key for sending encrypted messages to this account. 
  - To set the key, it must be exactly 33 bytes, with the first byte indicating the key type: 0x02 or 0x03 for secp256k1 keys, 0xED for Ed25519 keys. 
  - To remove the key, use an empty value.
- `NFTokenMinter`: Another account that can mint NFTokens for you.
- `setFlag`: Integer flag to enable for this account.
- `transferRate`: The fee to charge when users transfer this account's tokens, represented as billionths of a unit. 
  - Cannot be more than 2000000000 or less than 1000000000, except for the special case 0 meaning no fee.
- `tickSize`: Tick size to use for offers involving a currency issued by this address. 
  - The exchange rates of those offers is rounded to this many significant digits. 
  - Valid values are 3 to 15 inclusive, or 0 to disable.

```typescript
interface SetAccountRequest extends BaseTransactionRequest {
  flags?: SetAccountFlags;
  // Unique identifier of a flag to disable for this account.
  clearFlag?: number;
  // The domain that owns this account, as a string of hex representing the ASCII for the domain in lowercase.
  // Cannot be more than 256 bytes in length.
  domain?: string;
  // An arbitrary 128-bit value. Conventionally, clients treat this as the md5 hash of an email address to use for
  // displaying a Gravatar image.
  emailHash?: string;
  // Public key for sending encrypted messages to this account. To set the key, it must be exactly 33 bytes, with the
  // first byte indicating the key type: 0x02 or 0x03 for secp256k1 keys, 0xED for Ed25519 keys. To remove the key, use
  // an empty value.
  messageKey?: string;
  // Another account that can mint NFTokens for you.
  NFTokenMinter?: string;
  // Integer flag to enable for this account.
  setFlag?: AccountSetAsfFlags;
  // The fee to charge when users transfer this account's tokens, represented as billionths of a unit. Cannot be more
  // than 2000000000 or less than 1000000000, except for the special case 0 meaning no fee.
  transferRate?: number;
  // Tick size to use for offers involving a currency issued by this address. The exchange rates of those offers is
  // rounded to this many significant digits. Valid values are 3 to 15 inclusive, or 0 to disable.
  tickSize?: number;
}
```

```typescript
type AccountSetFlagsInterface = {
  tfRequireDestTag?: boolean;
  tfOptionalDestTag?: boolean;
  tfRequireAuth?: boolean;
  tfOptionalAuth?: boolean;
  tfDisallowXRP?: boolean;
  tfAllowXRP?: boolean;
} | number;
```

```typescript
enum AccountSetAsfFlags {
  asfRequireDest = 1,
  asfRequireAuth = 2,
  asfDisallowXRP = 3,
  asfDisableMaster = 4,
  asfAccountTxnID = 5,
  asfNoFreeze = 6,
  asfGlobalFreeze = 7,
  asfDefaultRipple = 8,
  asfDepositAuth = 9,
  asfAuthorizedNFTokenMinter = 10,
  asfDisallowIncomingNFTokenOffer = 12,
  asfDisallowIncomingCheck = 13,
  asfDisallowIncomingPayChan = 14,
  asfDisallowIncomingTrustline = 15
}
```

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
import { setAccount } from "@gemwallet/api";

const payload = {
  emailHash: "1D1382344586ECFF844DACFF698C2EFB",
  fee: "199",
  flags: {
    tfAllowXRP: true
  },
  memos: [
    {
      memo: {
        memoType: "4465736372697074696f6e",
        memoData: "54657374206d656d6f"
      }
    }
  ]
};

setAccount(payload).then((response) => {
  console.log("Transaction Hash: ", response.result?.hash);
});
```

Here is an example with a React web application:

```tsx
import { isInstalled, setAccount } from "@gemwallet/api";

function App() {
  const handleSetAccount = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        const payload = {
          emailHash: "1D1382344586ECFF844DACFF698C2EFB",
          fee: "199",
          flags: {
            tfAllowXRP: true
          },
          memos: [
            {
              memo: {
                memoType: "4465736372697074696f6e",
                memoData: "54657374206d656d6f"
              }
            }
          ]
        };
        setAccount(payload).then((response) => {
          console.log("Transaction Hash: ", response.result?.hash);
        });
      }
    });
  };

  return (
    <div className="App">
      <button onClick={handleSetAccount}>Set Account</button>
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
interface IssuedCurrencyAmount {
  currency: string;
  issuer: string;
  value: string;
}
```

More technical details about the currency amount formats can be found [here](https://xrpl.org/basic-data-types.html#specifying-currency-amounts).

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
type TrustSetFlags = {
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

### submitTransaction

Submits a transaction request to the XRPL network via the extension.

#### Request

**Mandatory** - The function takes a payload of type `SubmitTransactionRequest` as an input parameter.

- `transaction`: The transaction payload to submit to the XRPL network.

```typescript
interface SubmitTransactionRequest {
  transaction: Transaction;
}
```

The `Transaction` type [is defined here](https://js.xrpl.org/types/Transaction.html).

Notes:
- If the transaction field `Account` is not set, the account of the user's wallet will be used.


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
import { submitTransaction } from "@gemwallet/api";

const transaction = {
  TransactionType: "Payment",
  Destination: "rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",
  Amount: "100000",
  Memos: [
    {
      Memo: {
        MemoData: "54657374206D656D6F",
        MemoType: "4465736372697074696F6E"
      }
    }
  ]
};

submitTransaction({ transaction }).then((response) => {
  console.log(response.result?.hash);
}).catch((error) => {
  console.error("Transaction submission failed", error);
});

```

Here is an example with a React web application:

```tsx
import { submitTransaction, isInstalled } from "@gemwallet/api";

function App() {
  const handleTransaction = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        const transaction = {
          TransactionType: "Payment",
          Destination: "rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",
          Amount: "100000",
          Memos: [
            {
              Memo: {
                MemoData: "54657374206D656D6F",
                MemoType: "4465736372697074696F6E"
              }
            }
          ]
        };
        submitTransaction({ transaction }).then((response) => {
          console.log("Transaction hash: ", response.result?.hash);
        }).catch((error) => {
          console.error("Transaction submission failed", error);
        });
      }
    });
  };

  return (
    <div className="App">
      <button onClick={handleTransaction}>Submit Transaction</button>
    </div>
  );
}

export default App;

```

## Other

### BaseTransactionRequest

All the `Request` interfaces that extend the `BaseTransactionRequest` interface also include the following fields:

- `fee`: Integer amount of XRP, in drops, to be destroyed as a cost for distributing this transaction to the network.
  - Some transaction types have different minimum requirements.
  - More technical details about the drops can be found [here](https://xrpl.org/currency-formats.html#xrp-amounts).
- `sequence`: The sequence number of the account sending the transaction. 
  - A transaction is only valid if the Sequence number is exactly 1 greater than the previous transaction from the same account. 
  - The special case 0 means the transaction is using a Ticket instead.
- `accountTxnID`: Hash value identifying another transaction. 
  - If provided, this transaction is only valid if the sending account's previously-sent transaction matches the provided hash.
- `lastLedgerSequence`: Highest ledger index this transaction can appear in. 
  - Specifying this field places a strict upper limit on how long the transaction can wait to be validated or rejected.
- `memos`: Additional arbitrary information used to identify this transaction. 
  - Each attribute of each memo must be hex encoded.
  - More technical details about the memos can be found [here](https://xrpl.org/transaction-common-fields.html#memos-field).
- `signers`: Array of objects that represent a multi-signature which authorizes this transaction.
  - More technical details about the signers can be found [here](https://xrpl.org/transaction-common-fields.html#signers-field).
- `sourceTag`: Arbitrary integer used to identify the reason for this payment, or a sender on whose behalf this transaction is made. 
  - Conventionally, a refund should specify the initial payment's SourceTag as the refund payment's DestinationTag.
- `signingPubKey`: Hex representation of the public key that corresponds to the private key used to sign this transaction. 
  - If an empty string, indicates a multi-signature is present in the Signers field instead.
- `ticketSequence`: The sequence number of the ticket to use in place of a Sequence number. 
  - If this is provided, Sequence must be 0. 
  - Cannot be used with AccountTxnID.
- `txnSignature`: The signature that verifies this transaction as originating from the account it says it is from.

```typescript
interface BaseTransactionRequest {
  // Integer amount of XRP, in drops, to be destroyed as a cost for distributing this transaction to the network.
  // Some transaction types have different minimum requirements.
  fee?: string;
  // The sequence number of the account sending the transaction. A transaction is only valid if the Sequence number is
  // exactly 1 greater than the previous transaction from the same account. The special case 0 means the transaction is
  // using a Ticket instead.
  sequence?: number;
  // Hash value identifying another transaction. If provided, this transaction is only valid if the sending account's
  // previously-sent transaction matches the provided hash.
  accountTxnID?: string;
  // Highest ledger index this transaction can appear in. Specifying this field places a strict upper limit on how long
  // the transaction can wait to be validated or rejected.
  lastLedgerSequence?: number;
  // Additional arbitrary information used to identify this transaction.
  // Each attribute of each memo must be hex encoded.
  memos?: Memo[];
  // Array of objects that represent a multi-signature which authorizes this transaction.
  signers?: Signer[];
  // Arbitrary integer used to identify the reason for this payment, or a sender on whose behalf this transaction is
  // made. Conventionally, a refund should specify the initial payment's SourceTag as the refund payment's
  // DestinationTag.
  sourceTag?: number;
  // Hex representation of the public key that corresponds to the private key used to sign this transaction. If an empty
  // string, indicates a multi-signature is present in the Signers field instead.
  signingPubKey?: string;
  // The sequence number of the ticket to use in place of a Sequence number. If this is provided, Sequence must be 0.
  // Cannot be used with AccountTxnID.
  ticketSequence?: number;
  // The signature that verifies this transaction as originating from the account it says it is from.
  txnSignature?: string;
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
interface Signer {
  signer: {
    account: string;
    txnSignature: string;
    signingPubKey: string;
  };
}
```

More technical details about the signers can be found [here](https://xrpl.org/transaction-common-fields.html#signers-field).
