import type { APIRoute } from 'astro';
import { site as siteConfig } from '../config/site';

/**
 * robots.txt — n'a d'effet qu'à la racine d'un domaine.
 * Sous lunixel.fr/concept/hugoabecassis, c'est la balise <meta name="robots"> (noindex) qui protège le concept.
 */
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const sitemap = new URL(`${base}/sitemap-index.xml`, site).href;
  const body = siteConfig.indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`
    : `# Concept : non indexé (voir SITE_INDEXABLE)\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
