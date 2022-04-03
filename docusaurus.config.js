// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Crypto payments for the web',
  tagline: `GemWallet is a web extension that enables you to make fast payments on the Ripple (XRP) network via your browser. It's a safer alternative to copying and pasting private keys for use with web applications.`,
  url: 'https://gemwallet.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'GemWallet', // Usually your GitHub org/user name.
  projectName: 'gemwallet-website', // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/GemWallet/gemwallet-website/blob/master',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/GemWallet/gemwallet-website/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-ideal-image',
      {
        disableInDev: false,
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GemWallet',
        logo: {
          alt: 'GemWallet Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'user-guide/introduction',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            to: '/showcase',
            label: 'Showcase',
            position: 'left',
          },
          {
            to: '/faq',
            label: 'FAQ',
            position: 'left',
          },
          {
            href: 'https://github.com/GemWallet/gemwallet-extension',
            label: 'Star us on GitHub',
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
                label: 'User Guide',
                to: '/docs/user-guide/introduction',
              },
              {
                label: 'API Reference',
                to: '/docs/api/gemwallet-api',
              },
              {
                label: 'Playground',
                to: '/docs/playground/isConnected',
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
        copyright: `Copyright © ${new Date().getFullYear()} GemWallet`,
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
