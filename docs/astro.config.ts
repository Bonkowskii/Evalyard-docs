import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Evalyard Docs',

      // ❗ Używamy ścieżek względnych do zasobów w src/assets (ESM import)
      logo: { src: './src/assets/favicon.svg', alt: 'Evalyard' },
      favicon: './src/assets/favicon.svg',

      // Link "Edytuj tę stronę"
      editLink: {
        baseUrl: 'https://github.com/Bonkowskii/Evalyard-docs/edit/main/docs/src/content/docs/',
      },

      // Linki w headerze — robimy przez własny komponent nagłówka
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
      },

      // Sidebar autogenerowany z folderów
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
