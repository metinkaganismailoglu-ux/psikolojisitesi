import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { SITE } from './src/config/site';

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
