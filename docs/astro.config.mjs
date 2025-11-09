import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://docs.evalyard.com',
  integrations: [
    starlight({
      title: 'Evalyard Docs',
      sidebar: [
        {
          label: 'Getting started',
          items: [{ autogenerate: { directory: 'getting-started' } }]
        },
        {
          label: 'Guides',
          items: [{ autogenerate: { directory: 'guides' } }]
        },
      ],
      logo: { src: '/logo.svg', replacesTitle: false },
      editLink: false,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      social: {
        github: 'https://github.com/evalyard'
      }
    }),
    sitemap(),
  ],
});
