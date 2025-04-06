// @ts-check
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import github from "@astrojs/github"; // <-- agregar esto

// https://astro.build/config
export default defineConfig({
  site: 'https://Vervyrvg.github.io/',
  output: 'static', // <-- necesario
  adapter: github(), // <-- agregar esto
  integrations: [
    mdx(),
    react(),
    tailwind({ applyBaseStyles: false }),
    icon(),
    sitemap(),
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
