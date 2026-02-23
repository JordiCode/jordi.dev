import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [preact()],
});