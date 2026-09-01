// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://adi-corcovado.com",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],

  adapter: netlify(),
});
