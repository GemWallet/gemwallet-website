// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title:
    "Seamless Web3 Payments with GemWallet: Embrace Decentralized Crypto Transactions on the XRPL",
  tagline: `GemWallet takes you into the world of the XRP Ledger. As a decentralized, browser-based extension, GemWallet ensures fast transactions and seamless interaction with Web3 applications. Experience total privacy with our fully decentralized structure - no back-end servers, no data storage, just secure and direct transactions on the XRPL. Uncover a new level of freedom and control with GemWallet.`,
  url: "https://gemwallet.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "GemWallet", // Usually your GitHub org/user name.
  projectName: "gemwallet-website", // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/GemWallet/gemwallet-website/blob/master",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/GemWallet/gemwallet-website/blob/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-ideal-image",
      {
        disableInDev: false,
      },
    ],
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-6K1MGTVRGX",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "GemWallet",
        logo: {
          alt: "GemWallet Logo",
          src: "img/logo.svg",
          width: 32,
          height: 32,
        },
        items: [
          {
            type: "docsVersion",
            position: "left",
            label: "Documentation",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            to: "/showcase",
            label: "Showcase",
            position: "left",
          },
          {
            to: "/faq",
            label: "FAQ",
            position: "left",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            href: "https://github.com/GemWallet/gemwallet-extension",
            label: "Star us on GitHub",
            position: "right",
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "User Guide",
                to: "/docs/user-guide/introduction",
              },
              {
                label: "API Reference",
                to: "/docs/api/gemwallet-api-installation",
              },
              {
                label: "Playground",
                to: "/docs/playground/getAddress",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/gemwallet_app",
              },
              {
                label: "Discord",
                href: "https://discord.gg/CnkP9KGHBe",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UCP980esJwyzU7qU4qZQ6A5Q",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/GemWallet/gemwallet-website",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Privacy Policy",
                to: "/privacy-policy",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GemWallet`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: "img/metadata.png",
      metadata: [{ name: "og:type", content: "website" }],
    }),
};

module.exports = config;
