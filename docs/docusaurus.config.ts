import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Evalyard Docs',
  tagline: 'On-device LLM benchmarking, distributed inference, mobile AI',
  url: 'https://docs.evalyard.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Evalyard',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',   // docs live at root
          editUrl: null,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        }
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/og.png',
    navbar: {
      title: 'Evalyard Docs',
      logo: { alt: 'Evalyard', src: 'img/logo.svg' },
      items: [
        { to: '/', label: 'Docs', position: 'left' },
        { href: 'https://blog.evalyard.com', label: 'Blog', position: 'left' },
        { href: 'https://evalyard.com', label: 'Home', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Evalyard',
          items: [
            {label: 'Home', href: 'https://evalyard.com'},
            {label: 'Blog', href: 'https://blog.evalyard.com'},
            {label: 'Docs', href: '/'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Evalyard`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash','json','python','typescript'],
    },
    colorMode: { defaultMode: 'dark', respectPrefersColorScheme: true },
  }),
};

export default config;
