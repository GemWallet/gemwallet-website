---
id: gemwallet-api-installation
title: Installation
description: Provides the documentation on how to use install GemWallet API.
---

## Introduction

:::tip Recommended Reading
Before reading this section, make sure that you have the GemWallet extension installed. You can have a read to the [Getting Started](/docs/user-guide/getting-started) section.
:::

The GemWallet API is used to bridge communication between your website and the GemWallet extension.

We provide two ways of installing the extension:

- Via CDN for [browser-based applications](/docs/api/gemwallet-api-installation#for-browser-based-applications)
- Via an NPM package for [Node.js applications](/docs/api/gemwallet-api-installation#for-nodejs-applications)

## For browser-based applications

Install the packaged library via script tag using cdnjs, swapping in the desired version number for {version}:

```html
<script src="https://unpkg.com/@gemwallet/api@{version}/umd/gemwallet-api.js"></script>
```

## For Node.js applications

You can either:

- Install the module using npm: `npm install @gemwallet/api`

or

- Install the module using yarn: `yarn add @gemwallet/api`
