// @ts-check
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://Vervyrvg.github.io/',  // URL de tu sitio
  base: '/Vervyrvg.github.io/',         // Base URL para GitHub Pages
  integrations: [
    mdx(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    sitemap()
  ],
  markdown: {
    shikiConfig: {
      theme: 'plastic',
      wrap: true,
    },
  },
  experimental: {
    svg: true,
  },
});
