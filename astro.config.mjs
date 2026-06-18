// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // ⚠️ Atualize para sua URL final depois do deploy
  // (ex.: https://heigon-portfolio.pages.dev ou seu domínio próprio).
  site: 'https://heigon-portfolio.pages.dev',

  // Inglês é o idioma principal (fica na raiz "/"),
  // Português fica em "/pt".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  adapter: cloudflare()
});