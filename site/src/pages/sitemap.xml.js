import { site } from '../config.js';
import { projects, projectPath } from '../data/projects.js';

const pages = ['/', '/realisations/', '/concepts/', '/services/', '/studio/', '/contact/', '/mentions-legales/', '/confidentialite/', ...projects.map(projectPath)];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${site.url}${p}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
