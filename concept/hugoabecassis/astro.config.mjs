// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import frenchTypography from './src/lib/french-typography.mjs';

/**
 * Le site est 100 % statique (compatible GitHub Pages).
 * Tout ce qui dépend de l'hébergement passe par des variables d'environnement :
 *   SITE_URL   https://lunixel.fr            → futur : https://hugoabecassis.fr
 *   BASE_PATH  /concept/hugoabecassis        → futur : /
 * Aucun lien interne n'est écrit en dur : voir src/lib/url.ts.
 */
const SITE_URL = (process.env.SITE_URL || 'https://lunixel.fr').replace(/\/$/, '');
const RAW_BASE = process.env.BASE_PATH ?? '/concept/hugoabecassis';
const BASE_PATH = RAW_BASE === '' || RAW_BASE === '/' ? '/' : `/${RAW_BASE.replace(/^\/|\/$/g, '')}`;

const fontsource = (pkg, file) => `./node_modules/${pkg}/files/${file}`;

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  integrations: [
    sitemap({ filter: (page) => !page.includes('/mentions-legales/') }),
    frenchTypography(),
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Instrument Serif',
      cssVariable: '--font-serif',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          { src: [fontsource('@fontsource/instrument-serif', 'instrument-serif-latin-400-normal.woff2')], weight: 400, style: 'normal' },
          { src: [fontsource('@fontsource/instrument-serif', 'instrument-serif-latin-400-italic.woff2')], weight: 400, style: 'italic' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Instrument Sans',
      cssVariable: '--font-sans',
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
      options: {
        variants: [
          { src: [fontsource('@fontsource-variable/instrument-sans', 'instrument-sans-latin-wght-normal.woff2')], weight: '400 700', style: 'normal' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      fallbacks: ['ui-monospace', 'monospace'],
      options: {
        variants: [
          { src: [fontsource('@fontsource/ibm-plex-mono', 'ibm-plex-mono-latin-400-normal.woff2')], weight: 400, style: 'normal' },
        ],
      },
    },
  ],
});
