// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Crypto payments for the web',
  tagline: `GemWallet is a web extension that enables you to make fast payment on the Ripple (XRP) network via your browser. It's a safer alternative to copying and pasting private keys for use with web applications.`,
  url: 'https://gemwallet.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'GemWallet', // Usually your GitHub org/user name.
  projectName: 'gemwallet-website', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/GemWallet/gemwallet-website',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/GemWallet/gemwallet-website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Gem Wallet',
        logo: {
          alt: 'Gem Wallet Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            href: '/faq',
            label: 'FAQ',
            position: 'left',
          },
          {
            href: 'https://github.com/GemWallet/gemwallet-website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'API Reference',
                to: '/docs/intro',
              },
              {
                label: 'Playground',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/gemwallet_app',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/GemWallet/gemwallet-website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gem Wallet`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
      },
    }),
};

module.exports = config;
