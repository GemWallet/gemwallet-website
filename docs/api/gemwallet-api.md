---
id: gemwallet-api
title: GemWallet API
description: Provides the documentation on how to use GemWallet.
---

## Introduction

:::tip Recommended Reading
Before reading this section, make sure that you have the GemWallet extension installed. You can have a read to the [Getting Started](/docs/user-guide/getting-started) section.
:::

The GemWallet API is used to bridge communication between your website and the GemWallet extension.

We provide two ways of installing the extension:

- Via CDN for [browser-based applications](/docs/api/gemwallet-api#for-browser-based-applications)
- Via an NPM package for [Node.js applications](/docs/api/gemwallet-api#for-nodejs-applications)

## For browser-based applications

Install the packaged library via script tag using cdnjs, swapping in the desired version number for {version}:

```html
<script src="https://unpkg.com/@gemwallet/api@{version}/umd/gemwallet-api.js"></script>
```

After adding the library to your web pages using GemWallet, you will need to import the proper functions as explained in the guide [here](/docs/api/using-gemwallet-in-browser).

## For Node.js applications

You can either:

- Install the module using npm: `npm install @gemwallet/api`

or

- Install the module using yarn: `yarn add @gemwallet/api`

When the library is installed, you will need to import the proper functions as explained in the guide [here](/docs/api/using-gemwallet-in-node-js).

## Methods

### isInstalled

Checks if the GemWallet extension is installed in the user's browser.

:::tip
We definitely recommend that you check if the user is connected before using any of the other methods available.
:::

#### Request
This function does not require any parameters.

#### Response

```javascript
result: { 
  isInstalled: boolean 
}
```

- `isInstalled`: `true` if the user has GemWallet extension installed, `false` otherwise.

#### Examples
```javascript
import { isInstalled } from '@gemwallet/api';

isInstalled().then(response => {
  console.log(response.result.isInstalled);
});
```

Here is an example with a React web application:

```jsx
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

### getAddress

Retrieves the wallet address associated with the extension.

#### Request
This function does not require any parameters.

#### Response
The response is a Promise which resolves to an object with a `type` and `result` property.

- `type`: An enum value, could be ***response*** or ***reject***.
- `result`: 
  - `address`: The classic address of the wallet.

```javascript
type: 'response'
result: {
  address: string
}
```
or
```javascript
type: 'reject'
result: undefined
```

#### Error Handling
In case of error, the error will be thrown.

#### Examples
```javascript
import { getAddress } from '@gemwallet/api';

getAddress().then(response => {
  console.log(response.result?.address);
});
````

Here is an example with a React web application:

```jsx
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
