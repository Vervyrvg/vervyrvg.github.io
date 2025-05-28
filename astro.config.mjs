import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? 
        config.site.base_url : "https://Vervyrvg.github.io",  // Asegúrate de colocar tu dominio aquí
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  output: "server",  // Salida para el servidor

  vite: { plugins: [tailwindcss()] },
  integrations: [
    react(),
    sitemap(),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],

  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",  // Tema de syntax highlighting
      wrap: true,
    },
    extendDefaultPlugins: true,
  },

  adapter: vercel(),  // Si estás usando Vercel, también puedes añadir el adaptador de Vercel
});
