const path = require('path');


module.exports = {
  title: 'Asystent domowy',
  tagline: 'Lokalny, niezawodny, szybki i prywatny.',
  url: 'https://Ai-Speaker.com',
  baseUrl: '/',
  projectName: 'AI-Speaker',
  organizationName: 'sviete',
  favicon: 'img/favicon.ico',
  plugins: [
    [
     '@docusaurus/plugin-ideal-image',
     {
       quality: 70,
       max: 1030, // max resized image's size.
       min: 640, // min resized image's size. if original is lower, use that size.
       steps: 2, // the max number of images generated between min and max (inclusive)
     },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/images/logo_ais.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(217, 130, 0)',
          },
        ],
      },
    ],
  ],
  themeConfig: {
    algolia: {
      apiKey: '147dbf3542b38e29ef7abb54fbc19372',
      indexName: 'sviete_ais',
    },
    navbar: {
      title: 'Asystent domowy',
      logo: {
        alt: 'Asystent domowy Logo',
        src: 'img/logo-responsive.svg',
      },
      items: [
        {to: 'docs/ais_bramka_index', label: 'Bramka', position: 'left'},
        {to: 'docs/ais_app_index', label: 'Aplikacja', position: 'left'},
        {to: 'docs/ais_app_player', label: 'Integracje', position: 'left'},
        {to: 'docs/ais_iot_s26', label: 'Urządzenia', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://ai-speaker.discourse.group/',
          label: 'Forum',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Zasoby',
          items: [
            {
              label: 'Repozytorium kodów GitHub',
              href: 'https://github.com/sviete',
            },
            {
              label: 'Repozytorium aktualizacji OTA',
              to: 'https://www.ai-speaker.com/ota',
            },
            {
              label: 'Repozytorium pakietów APT',
              to: 'https://www.ai-speaker.com/apt',
            },
          ],
        },
        {
          title: 'Informacje',
          items: [
            {
              label: 'Forum społeczności',
              href: 'https://ai-speaker.discourse.group/',
            },
            {
              label: 'O projekcie AI-Speaker',
              to: 'https://www.ai-speaker.com/project/',
            },
            {
              label: 'Prezentacja Asystenta',
              to: 'https://www.ai-speaker.com/project/dom/',
            },
          ],
        },
        {
          title: 'Marketing',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/AISpeaker/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCA6XfwahvzKQDx8nmhsPFTw',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI-Speaker.com`,
    },
  },
  scripts: [
  {
    src: './drift.js',
  },
],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/sviete/AIS-WWW/edit/master/',
        },
        blog: {
          editUrl:
            'https://github.com/sviete/AIS-WWW/edit/master/',
          postsPerPage: 10,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
