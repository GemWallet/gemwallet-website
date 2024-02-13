---
id: gemwallet-api
title: GemWallet API
description: Provides the documentation on how to use GemWallet.
---

## Introduction

:::tip Recommended Reading
Before reading this section, make sure that you have the GemWallet extension installed. You can have a read to the [Getting Started](../user-guide/getting-started) section.
:::

The GemWallet API is used to bridge communication between your website and the GemWallet extension.

We provide two ways of installing the extension:

- Via CDN for [browser-based applications](./gemwallet-api#for-browser-based-applications)
- Via an NPM package for [Node.js applications](./gemwallet-api#for-nodejs-applications)

## For browser-based applications

Install the packaged library via script tag using cdnjs, swapping in the desired version number for \{version\}:

```html
<script src="https://cdn.jsdelivr.net/gh/GemWallet/gemwallet-extension@{version}/dist/gemwallet-api.min.js"></script>
```

After adding the library to your web pages using GemWallet, you will need to import the proper functions as explained in the guide [here](./using-gemwallet-in-browser).

## For Node.js applications

You can either:

- Install the module using npm: `npm install @gemwallet/api`

or

- Install the module using yarn: `yarn add @gemwallet/api`

When the library is installed, you will need to import the proper functions as explained in the guide [here](./using-gemwallet-in-node-js).
