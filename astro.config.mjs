import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://ultgear.co',
  trailingSlash: 'ignore',
  redirects: { '/products/universal-drying-rack': '/products/ultraportable-drying-rack' },
});
