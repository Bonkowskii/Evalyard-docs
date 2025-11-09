# Evalyard Blog (Astro)

- Domain: https://blog.evalyard.com
- Add posts: put `.md`/`.mdx` files into `src/content/blog/`
- Minimal frontmatter:
```
---
title: "Tytuł"
description: "Krótki opis."
pubDate: "2025-11-09"
tags: ["LLM","benchmark"]
canonical: "https://evalyard.com/blog/tytul"  # optional
---
Treść...
```

Dev:
```
npm i
npm run dev
```
Build:
```
npm run build
# output: dist/
```
