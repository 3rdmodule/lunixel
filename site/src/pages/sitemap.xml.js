import { site } from '../config.js';
import { projects, projectPath } from '../data/projects.js';
import { metiers, metierPath } from '../data/metiers.js';
import { guides, guidePath } from '../data/guides.js';

// lastmod seulement quand la date est connue et fiable (Google ignore les dates approximatives).
const pages = [
  ['/'],
  ['/creation-site-internet/'],
  ['/salons/'],
  ...metiers.map((m) => [metierPath(m)]),
  ['/tarifs/'],
  ['/realisations/'],
  ...projects.filter((p) => p.kind === 'realisation').map((p) => [projectPath(p)]),
  ['/concepts/'],
  ...projects.filter((p) => p.kind === 'concept').map((p) => [projectPath(p)]),
  ['/guides/', guides.map((g) => g.updated).sort().at(-1)],
  ...guides.map((g) => [guidePath(g), g.updated]),
  ['/methode/'],
  ['/a-propos/'],
  ['/faq/'],
  ['/contact/'],
  ['/mentions-legales/'],
  ['/confidentialite/'],
  ['/conditions/'],
];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(([p, d]) => `  <url><loc>${site.url}${p}</loc>${d ? `<lastmod>${d}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
