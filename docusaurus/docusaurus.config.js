// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MatosSphere',
  tagline: 'Secure your cloud from build to run time',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cloudmatos.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cloudmatos', // Usually your GitHub org/user name.
  projectName: 'matossphere', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          path: '../contents',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false, 
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/cloudmatos.png',
      navbar: {
        title: 'MatosSphere',
        logo: {
          alt: 'MatosSphere Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'User Guide',
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
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/cloudmatos/mycompany/?viewAsMember=true',
              },
              {
                label: 'Newsletter',
                href: 'https://www.cloudmatos.com/#',
              },
              {
                label: 'Matos community',
                href: 'https://www.cloudmatos.com/community',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Google Cloud Marketplace',
                href: 'https://console.cloud.google.com/marketplace/product/cloudmatos-public/matossphere?authuser=0&project=cloudmatos-public&folder=&organizationId=',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/cloudmatos',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://www.cloudmatos.com/">CloudMatos</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
