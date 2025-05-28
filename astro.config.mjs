// @ts-check
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://vervyrvg.github.io',
  base: '/', // Corregido: debe ser la ruta base de tu repositorio
  output: 'static', // Necesario para GitHub Pages
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
  build: {
    format: 'directory' // Formato recomendado para GitHub Pages
  }
});
