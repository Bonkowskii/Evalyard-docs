// docs/src/content/config.ts
import { docsSchema, docsLoader } from '@astrojs/starlight/schema';
import { defineCollection } from 'astro:content';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema(),
  }),
};
