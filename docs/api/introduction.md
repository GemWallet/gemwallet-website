---
id: gemwallet-api
title: GemWallet API
sidebar_position: 1
---

## Introduction

:::tip Recommended Reading
Before reading this section, make sure that you have GemWallet extension installed. You can have a read to the [Getting Started](/docs/user-guide/getting-started) section.
:::

The GemWallet API is used to bridge communication between your website and the GemWallet extension.

We provide two ways of installing the extension:

- Via CDN for [browser based application](/docs/api/gemwallet-api#for-browser-based-applications)
- Via an NPM package for [Node.js applications](/docs/api/gemwallet-api#for-nodejs-applications)

## For browser-based applications

Install the packaged library via script tag using cdnjs, swapping in the desired version number for {version}:

```html
<script src="https://cdn.jsdelivr.net/gh/GemWallet/gemwallet-extension@{version}/dist/gemwallet-api.min.js"></script>
```

After adding the library to your webpages using GemWallet, you will need to import the proper functions as explained in the guide [here](/docs/api/using-gemwallet-in-browser).

## For Node.js applications

You can either:

- Install the module using npm: `npm install @gemwallet/api`

or

- Install the module using yarn: `yarn add @gemwallet/api`

When the library is installed, you will need to import the proper functions as explained in the guide [here](/docs/api/using-gemwallet-in-node-js).
