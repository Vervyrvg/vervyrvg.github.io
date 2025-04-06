import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // Asegúrate de que esta línea esté presente

const siteUrl = 'https://Vervyrvg.github.io/';
const baseUrl = '/Vervyrvg.github.io';

export default defineConfig({
  site: siteUrl,
  base: baseUrl,
  integrations: [
    tailwind(),
    react(), // React integrado
  ],
  build: {
    rollupOptions: {
      // Configuración adicional si es necesario
      external: ['virtual:astro-icon'], // Si tienes módulos virtuales, asegúrate de gestionarlos adecuadamente
    },
  },
  vite: {
    // Puedes agregar configuraciones específicas de Vite si es necesario
    server: {
      hmr: true, // Habilitar HMR si estás desarrollando en local
    },
  },
  // Puedes añadir configuraciones adicionales de Browserslist aquí si es necesario
  // browserslist: ">0.2%, last 2 versions, Firefox ESR, not dead"
});
