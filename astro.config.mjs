import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://ultgear.co',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  redirects: {
    '/products/universal-drying-rack': '/products/ultraportable-drying-rack',
    '/products/ultrapackable-tech-accessories': '/products/ultrapackable-travel-accessories',
    '/products/everything-else-bags': '/products/packable-keychain-tote-bag',
  },
});
