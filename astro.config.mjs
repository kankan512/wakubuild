// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kankan512.github.io',
  base: '/wakubuild',
  vite: {
    plugins: [tailwindcss()]
  },
});
