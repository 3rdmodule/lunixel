import fs from 'node:fs';
import path from 'node:path';

// Liste des captures générées par scripts/prebuild.mjs (vide si elles n'ont pas pu être prises).
let manifest;
export function getCaptures(slug) {
  if (!manifest) {
    try {
      manifest = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/generated/manifest.json'), 'utf8'));
    } catch {
      manifest = {};
    }
  }
  return manifest[slug] || {};
}

export const captureSrc = (name, w, ext) => `/generated/captures/${name}-${w}.${ext}`;
