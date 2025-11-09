import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Evalyard Docs',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      social: { github: 'https://github.com/Bonkowskii/Evalyard-docs' },
      announcement: {
        content: '<a class="ey-btn" href="https://evalyard.com">⬅ Home</a> <a class="ey-btn ey-secondary" href="https://blog.evalyard.com">Blog</a>',
        dismissible: false
      },
      navbar: {
        logo: { src: '/favicon.svg', alt: 'Evalyard Docs' },
        links: [
          { text: 'Home', link: 'https://evalyard.com' },
          { text: 'Blog', link: 'https://blog.evalyard.com' },
          { text: 'Docs', link: '/' }
        ]
      },
      sidebar: [
        { label: 'Getting started', items: [{ autogenerate: { directory: 'getting-started' } }] },
        { label: 'Guides',          items: [{ autogenerate: { directory: 'guides' } }] }
      ],
      editLink: false
    })
  ]
});
