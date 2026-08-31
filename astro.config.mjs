// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Routes that are noindex (empty/unfinished or error pages) must not appear in
// the sitemap. Keep this list in sync with pages that pass `noindex`.
const NOINDEX_PATHS = ['/contact', '/courses', '/groups', '/help-centre', '/info', '/studymodes', '/404'];

// https://astro.build/config
export default defineConfig({
  site: 'https://studo.study',
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '');
        return !NOINDEX_PATHS.includes(path);
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
