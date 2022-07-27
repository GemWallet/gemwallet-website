// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Crypto payments for the web made easy",
  tagline: `GemWallet is a web extension that enables you to make fast payments on the XRP Ledger via your browser. It's a safer alternative to copying and pasting private keys for use with web applications.`,
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
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
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
            type: "doc",
            docId: "user-guide/introduction",
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
            to: "https://github.com/GemWallet/gemwallet-extension",
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
                to: "/docs/api/gemwallet-api",
              },
              {
                label: "Playground",
                to: "/docs/playground/isConnected",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                to: "https://twitter.com/gemwallet_app",
              },
              {
                label: "Discord",
                to: "https://discord.gg/CnkP9KGHBe",
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
                to: "https://github.com/GemWallet/gemwallet-website",
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
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      image: "img/metadata.png",
      metadata: [{ name: "og:type", content: "website" }],
    }),
};

module.exports = config;
