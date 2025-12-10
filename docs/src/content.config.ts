// docs/src/content.config.ts
import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),     // ładuje pliki z src/content/docs/**
    schema: docsSchema(),     // ogarnia frontmatter (title, description, sidebar, itd.)
  }),
};
