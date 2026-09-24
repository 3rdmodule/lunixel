// Télécharge les photos listées dans photos-sources/sources.json vers photos-sources/<groupe>/.
// Exécuté par le workflow manuel « Import des photos existantes » (ou en local : node scripts/import-photos.mjs).
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../photos-sources/', import.meta.url).pathname;
const { base, groups } = JSON.parse(await readFile(join(root, 'sources.json'), 'utf8'));
let ok = 0, skipped = 0, failed = 0;
for (const [group, files] of Object.entries(groups)) {
  const dir = join(root, group);
  await mkdir(dir, { recursive: true });
  for (const file of files) {
    const dest = join(dir, file);
    try { await access(dest); skipped++; continue; } catch {}
    try {
      const res = await fetch(base + file, { headers: { 'User-Agent': 'Lunixel photo import (concept Hugo Abecassis)' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await writeFile(dest, Buffer.from(await res.arrayBuffer()));
      ok++;
      console.log(`✓ ${group}/${file}`);
    } catch (e) {
      failed++;
      console.warn(`✗ ${group}/${file} : ${e.message}`);
    }
    await new Promise((r) => setTimeout(r, 250));
  }
}

// Photos d'autres sources (URL complètes) :
// reportage.json (photographe, presse)
for (const manifest of ['reportage.json']) {
  let list;
  try { list = JSON.parse(await readFile(join(root, manifest), 'utf8')); } catch (e) { if (e.code === 'ENOENT') continue; throw e; }
  const dir = join(root, list.dir);
  await mkdir(dir, { recursive: true });
  for (const p of list.photos) {
    const dest = join(dir, p.file);
    try { await access(dest); skipped++; continue; } catch {}
    try {
      const res = await fetch(p.url, { headers: { 'User-Agent': 'Mozilla/5.0 (Lunixel photo import)' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await writeFile(dest, Buffer.from(await res.arrayBuffer()));
      ok++;
      console.log(`✓ ${list.dir}/${p.file} (${p.author})`);
    } catch (e) {
      failed++;
      console.warn(`✗ ${list.dir}/${p.file} : ${e.message}`);
    }
  }
}

console.log(`Terminé : ${ok} importées, ${skipped} déjà présentes, ${failed} échecs.`);
