import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Evalyard Docs',
      logo: { src: '/favicon.svg', alt: 'Evalyard' },
      favicon: '/favicon.svg',
      // Use a custom SiteTitle component to inject top-level links in the header.
      components: {
        SiteTitle: './src/components/SiteTitle.astro'
      },
      editLink: {
        baseUrl: 'https://github.com/Bonkowskii/Evalyard-docs/edit/main/docs/src/content/docs/',
      },
      sidebar: [
        { label: 'Getting started', autogenerate: { directory: 'getting-started' } },
        { label: 'Guides',          autogenerate: { directory: 'guides' } },
      ],
      social: {
        github: 'https://github.com/Bonkowskii/Evalyard-docs',
      },
    }),
  ],
});
