// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spica',
  tagline: 'Spica are cool',
  url: 'http://localhost:3000/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Set this value to '/'.
        },
        blog:false,
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
        // title: 'Spica Engine',
        logo: {
          alt: 'Spica Logo',
          src: 'img/small_logo.svg',
        },
        items: [
          {
            href: 'https://github.com/spica-engine/spica',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',

        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',

        indexName: 'YOUR_INDEX_NAME',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'localhost:3000/docs',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
      footer: {
        style: 'dark',
        logo: { src: 'img/logo.svg' },
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Pricing',
                to: 'https://spicaengine.com/pricing',
              },

            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://spica-engine.slack.com/join/shared_invite/enQtNzYzMDE3NjQ2MTkyLTA3MTg4ZTViZGI0MThiYzdhNTYxMTQxNjcwYzRjZTJhZDE4YWFhOGU5NmUzMGZiYjlmOWY2NDg5OTUxZjM2NDM#/shared-invite/email',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/HJTrRMH',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/spicaengine',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Spica, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
