import { site } from '../config.js';
import { projects, projectPath } from '../data/projects.js';
import { metiers, metierPath } from '../data/metiers.js';

const pages = [
  '/',
  '/salons/',
  ...metiers.map(metierPath),
  '/tarifs/',
  '/realisations/',
  ...projects.filter((p) => p.kind === 'realisation').map(projectPath),
  '/concepts/',
  ...projects.filter((p) => p.kind === 'concept').map(projectPath),
  '/methode/',
  '/a-propos/',
  '/faq/',
  '/contact/',
  '/mentions-legales/',
  '/confidentialite/',
  '/conditions/',
];

export function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${site.url}${p}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
