// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://iridescent-kulfi-98edd6.netlify.app',
  integrations: [preact()]
});