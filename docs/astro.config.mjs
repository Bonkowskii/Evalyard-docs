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
          items: [
            { label: 'Introduction', link: '/getting-started/intro/' },
            { label: 'Quickstart', link: '/getting-started/quickstart/' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Jobs', link: '/guides/jobs/' },
            { label: 'Devices', link: '/guides/devices/' },
            { label: 'Metrics', link: '/guides/metrics/' },
          ],
        },
      ],
      social: {
        github: 'https://github.com/evalyard',
        x: 'https://x.com/',
      },
      logo: { src: '/logo.svg', replacesTitle: false },
      editLink: { baseUrl: null },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      components: { },
    }),
    sitemap(),
  ],
});
