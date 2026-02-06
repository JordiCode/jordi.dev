import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': '/portfolio',
  },
  
  trailingSlash: "never",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [preact()],
});