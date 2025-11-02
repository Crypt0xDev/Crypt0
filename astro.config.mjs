// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://crypt0xdev.com',
  output: 'static',
  
  // Integraciones
  integrations: [sitemap()],
  
  // Configuración de i18n
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  
  // Configuración de markdown
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
  
  // Configuración del servidor de desarrollo
  server: {
    port: 4321,
    host: true,
  },
});
