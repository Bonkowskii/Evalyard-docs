// docs/astro.config.ts
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Evalyard Docs',
      logo: { src: '/favicon.svg', alt: 'Evalyard' }, // nie używaj /logo.svg, bo go nie ma
      favicon: '/favicon.svg',

      // Przyciski w nagłówku
      topnav: [
        { text: 'Home', link: 'https://evalyard.com' },
        { text: 'Blog', link: 'https://blog.evalyard.com' },
        { text: 'Docs', link: '/' },
      ],

      // Musi być obiekt (boolean powodował błąd)
      editLink: {
        baseUrl:
          'https://github.com/Bonkowskii/Evalyard-docs/edit/main/docs/src/content/docs/',
      },

      // Autogenerate musi być na poziomie grupy, nie w items[]
      sidebar: [
        { label: 'Getting started', autogenerate: { directory: 'getting-started' } },
        { label: 'Guides',          autogenerate: { directory: 'guides' } },
      ],

      // Ikonka “GitHub” w prawym górnym rogu
      social: {
        github: 'https://github.com/Bonkowskii/Evalyard-docs',
      },
    }),
  ],
});
