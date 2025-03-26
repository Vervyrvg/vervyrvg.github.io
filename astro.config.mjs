import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://vervyrvg.github.io', // Agrega la URL de tu dominio aquí
  integrations: [tailwind(), react()],
});
