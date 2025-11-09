import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    canonical: z.string().url().optional(),
  }),
});

export const collections = { blog };
