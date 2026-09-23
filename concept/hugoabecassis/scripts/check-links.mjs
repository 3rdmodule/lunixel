// Vérifie que tous les liens et ressources internes du build existent
// et respectent le chemin de base (BASE_PATH). Usage : npm run check:links
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const RAW = process.env.BASE_PATH ?? '/concept/hugoabecassis';
const BASE = RAW === '/' || RAW === '' ? '' : `/${RAW.replace(/^\/|\/$/g, '')}`;

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

async function exists(p) {
  try {
    const s = await stat(p);
    if (s.isDirectory()) return exists(join(p, 'index.html'));
    return true;
  } catch {
    return false;
  }
}

const files = (await walk(DIST)).filter((f) => f.endsWith('.html'));
const errors = [];
const attrRe = /\s(?:href|src|srcset|content)="([^"]+)"/g;
let checked = 0;

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  for (const m of html.matchAll(attrRe)) {
    const values = m[0].includes('srcset') ? m[1].split(',').map((s) => s.trim().split(/\s+/)[0]) : [m[1]];
    for (const raw of values) {
      if (!raw || /^(https?:|mailto:|tel:|data:|javascript:)/.test(raw)) continue;
      if (raw.startsWith('#')) {
        if (!m[0].startsWith(' href')) continue;
        const id = decodeURIComponent(raw.slice(1));
        if (id && !ids.has(id)) errors.push(`${relative(DIST, file)} → ancre introuvable ${raw}`);
        continue;
      }
      if (!raw.startsWith('/')) continue; // valeurs non-URL (content="...")
      checked++;
      const path = decodeURIComponent(raw.split('#')[0].split('?')[0]);
      if (BASE && !path.startsWith(`${BASE}/`) && path !== BASE) {
        errors.push(`${relative(DIST, file)} → lien hors chemin de base : ${raw}`);
        continue;
      }
      const target = join(DIST, path.slice(BASE.length));
      if (!(await exists(target))) errors.push(`${relative(DIST, file)} → introuvable : ${raw}`);
    }
  }
}

if (errors.length) {
  console.error(`✗ ${errors.length} problème(s) sur ${checked} liens internes :`);
  for (const e of [...new Set(errors)]) console.error('  ' + e);
  process.exit(1);
}
console.log(`✓ ${checked} liens internes vérifiés dans ${files.length} pages (base : ${BASE || '/'})`);
