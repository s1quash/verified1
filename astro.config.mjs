import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://verifiedpropfirm.com',
  output: 'static',
  integrations: [react(), sitemap()],
  redirects: {
    '/prop-firms/fusion-markets': '/brokers/fusion-markets',
  },
});
