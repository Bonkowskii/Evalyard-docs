import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Evalyard Docs',
  tagline: 'Distributed inference & mobile LLM benchmarks',
  url: 'https://evalyard.com',
  baseUrl: '/docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'evalyard',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // docs pod /docs/
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } as Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Evalyard Docs',
      items: [
        { to: '/overview', label: 'Overview', position: 'left' },
        { href: '/', label: 'Home', position: 'right' },
        { href: '/blog/', label: 'Blog', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [{ label:'Overview', to:'/overview' }] },
        { title: 'More', items: [{ label:'Blog', to:'https://evalyard.com/blog/' }] }
      ],
      copyright: `© ${new Date().getFullYear()} Evalyard`,
    },
  },
};

export default config;
