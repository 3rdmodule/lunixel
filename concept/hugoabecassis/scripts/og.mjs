// Génère l'image de partage (Open Graph) public/og.jpg, 1200 × 630, avant chaque build.
// Le texte est converti en tracés (opentype.js) : aucune police système nécessaire.
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';
const { parse } = opentype;
import sharp from 'sharp';

const root = new URL('../', import.meta.url);
const font = async (pkg, file) =>
  parse((await readFile(new URL(`node_modules/${pkg}/files/${file}`, root))).buffer);

const display = await font('@fontsource/bricolage-grotesque', 'bricolage-grotesque-latin-600-normal.woff');
const mono = await font('@fontsource/ibm-plex-mono', 'ibm-plex-mono-latin-400-normal.woff');

const W = 1200, H = 630, X = 80;
const ivory = '#f3f0e8', stone = '#b9b2a6', madder = '#d7866d';

// Tracé glyphe par glyphe (sans moteur de mise en forme) avec crénage
function layout(f, str, size, tracking = 0) {
  const scale = size / f.unitsPerEm;
  const glyphs = [...str].map((ch) => f.charToGlyph(ch));
  let x = 0;
  const pos = glyphs.map((g, i) => {
    const at = x;
    x += g.advanceWidth * scale + tracking * size;
    if (glyphs[i + 1]) x += f.getKerningValue(g, glyphs[i + 1]) * scale;
    return at;
  });
  return { glyphs, pos, width: x };
}
const cache = new Map();
function glyphPath(f, g, size) {
  const key = `${f.names.fullName?.en}|${g.index}|${size}`;
  if (!cache.has(key)) cache.set(key, g.getPath(0, 0, size).toPathData(2));
  return cache.get(key);
}
function text(f, str, x, y, size, fill, tracking = 0) {
  const { glyphs, pos } = layout(f, str, size, tracking);
  return glyphs
    .map((g, i) => `<path transform="translate(${(x + pos[i]).toFixed(2)} ${y})" d="${glyphPath(f, g, size)}" fill="${fill}"/>`)
    .join('');
}
const width = (f, str, size) => layout(f, str, size).width;

// Titre sur une ou deux lignes
const title = ['Hugo Abecassis,', 'luthier'];
const size = 118;
const lines = width(display, title.join(' '), size) < W - 2 * X ? [title.join(' ')] : title;
const lineH = size * 0.98;
const titleY = 330 - ((lines.length - 1) * lineH) / 2;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs><radialGradient id="g" cx="18%" cy="12%" r="120%">
    <stop offset="0" stop-color="#3b3631"/><stop offset="0.5" stop-color="#1f1d1a"/><stop offset="1" stop-color="#121110"/>
  </radialGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  ${text(mono, 'LUTHIER', X, 96, 20, stone, 0.1)}
  <rect x="${X + 108}" y="76" width="2" height="26" fill="${madder}"/>
  ${text(mono, 'NORMANDIE', X + 128, 96, 20, stone, 0.1)}
  ${lines.map((l, i) => text(display, l, X, titleY + i * lineH, size, ivory)).join('\n  ')}
  ${text(mono, 'ENTRETIEN · RESTAURATION · FABRICATION', X, 548, 20, stone, 0.08)}
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 86, mozjpeg: true }).toFile(fileURLToPath(new URL('public/og.jpg', root)));
console.log('✓ public/og.jpg');
