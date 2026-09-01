# Studo marketing site

The public landing, pricing and product pages for **Studo**: upload your course
material and Studo turns it into a structured study system for planning,
practising and finding what you still need to learn.

Built with [Astro](https://astro.build) (static output) and
[Tailwind CSS](https://tailwindcss.com), deployed to Cloudflare.

## 🧞 Commands

Run from the project root:

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `pnpm install`  | Install dependencies                         |
| `pnpm dev`      | Start the dev server at `localhost:4321`     |
| `pnpm build`    | Build the production site to `./dist/`       |
| `pnpm preview`  | Preview the production build locally         |

## 📁 Structure

```text
public/
  screenshots/        real product screenshots (rebuilt in HTML on the pages)
  images/             SVG art + raster assets
  favicons/           icons + site.webmanifest
  og-image.png        1200×630 social share image
  robots.txt
src/
  pages/              one route per file (index, pricing, select, about,
                      courses, groups, studymodes, changelog, legal, …)
  layouts/            RootLayout (SEO/meta/schema) + MarkdownPage
  components/
    layout/           Header, Footer, NavigationMenu, PageTitle, RevealScript
    pages/            page-specific building blocks
      home/           Hero, DemoFlow, SvenCapabilities, Introduction, …
      ScreenMock.astro  light-mode HTML rebuilds of the product screenshots
  content/            legal docs in Markdown (tos, privacy)
  styles/global.css   theme, buttons, .prose, hero + reveal animations
```

Each `.astro` file in `src/pages/` maps to a route by filename.

## ✍️ Conventions

- **Layout**: every page renders inside `RootLayout.astro`, which handles the
  `<title>`, meta description, canonical, Open Graph / Twitter tags, JSON-LD and
  favicons. Pass `noindex` for unfinished pages; pass `schema` to override the
  default Organization + WebSite structured data.
- **Legal pages** live as Markdown in `src/content/` and render through
  `MarkdownPage.astro` (parsed with `marked`, styled via `.prose`).
- **Scroll reveal**: add `reveal-on-scroll` to any element and include
  `RevealScript.astro` once on the page (the home page has its own inline copy).
- **Product mockups** are rebuilt in HTML/CSS (see `ScreenMock.astro` and
  `home/SvenVisual.astro`) rather than shipped as raster screenshots.
- Shared URLs (register/login) and pricing live in `src/consts.ts`.

## 🚀 Deploy

Static build served on Cloudflare. `wrangler.toml` serves `./dist` as static
assets; build command is `pnpm run build`, output directory `dist`. The sitemap
(`/sitemap-index.xml`) excludes `noindex` routes via the filter in
`astro.config.mjs`.
