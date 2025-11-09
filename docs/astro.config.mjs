import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://docs.evalyard.com',
  integrations: [
    starlight({
      title: 'Evalyard Docs',
      sidebar: [
        { label: 'Getting started', autogenerate: { directory: 'getting-started' } },
        { label: 'Guides',          autogenerate: { directory: 'guides' } },
      ],
      logo: { src: './src/assets/logo.svg', replacesTitle: false },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      social: {
        github: 'https://github.com/evalyard'
      }
    }),
    sitemap(),
  ],
});
