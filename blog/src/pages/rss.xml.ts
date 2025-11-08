import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("blog")).sort(
    (a, b) => (b.data.pubDate?.getTime() || 0) - (a.data.pubDate?.getTime() || 0)
  );

  return rss({
    title: "Evalyard Blog",
    description: "On-device LLM benchmarking, distributed inference, mobile AI.",
    site: context.site?.href ?? "https://blog.evalyard.com",
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      link: `/${p.slug}/`,
      pubDate: p.data.pubDate,
    })),
  });
}
