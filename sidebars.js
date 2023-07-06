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
      label: "API",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "api/gemwallet-api-installation",
        },
        {
          type: "doc",
          id: "api/gemwallet-api-reference",
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
          id: "playground/acceptNFTOffer",
        },
        {
          type: "doc",
          id: "playground/burnNFT",
        },
        {
          type: "doc",
          id: "playground/cancelNFTOffer",
        },
        {
          type: "doc",
          id: "playground/cancelOffer",
        },
        {
          type: "doc",
          id: "playground/createNFTOffer",
        },
        {
          type: "doc",
          id: "playground/createOffer",
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
          id: "playground/getNFT",
        },
        {
          type: "doc",
          id: "playground/getPublicKey",
        },
        {
          type: "doc",
          id: "playground/isInstalled",
        },
        {
          type: "doc",
          id: "playground/mintNFT",
        },
        {
          type: "doc",
          id: "playground/sendPayment",
        },
        {
          type: "doc",
          id: "playground/setAccount",
        },
        {
          type: "doc",
          id: "playground/setTrustline",
        },
        {
          type: "doc",
          id: "playground/signMessage",
        },
        {
          type: "doc",
          id: "playground/submitTransaction",
        }
      ],
    },
  ],
};

module.exports = sidebars;
