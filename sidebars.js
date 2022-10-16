/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "User Guide",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "user-guide/introduction",
        },
        {
          type: "doc",
          id: "user-guide/getting-started",
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "api/gemwallet-api",
        },
        {
          type: "doc",
          id: "api/using-gemwallet-in-browser",
        },
        {
          type: "doc",
          id: "api/using-gemwallet-in-node-js",
        },
      ],
    },
    {
      type: "category",
      label: "Playground",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "playground/isConnected",
        },
        {
          type: "doc",
          id: "playground/getAddress",
        },
        {
          type: "doc",
          id: "playground/getNetwork",
        },
        {
          type: "doc",
          id: "playground/getPublicKey",
        },
        {
          type: "doc",
          id: "playground/sendPayment",
        },
        {
          type: "doc",
          id: "playground/signMessage",
        },
      ],
    },
  ],
};

module.exports = sidebars;
