// Génère l'image de partage (Open Graph) public/og.jpg, 1200 × 630, avant chaque build :
// l'étiquette de luthier du site, sur papier ivoire. Texte converti en tracés (fontkit).
import { fileURLToPath } from 'node:url';
import * as fontkit from 'fontkit';
import sharp from 'sharp';

const root = new URL('../', import.meta.url);
const font = (pkg, file) => fontkit.openSync(fileURLToPath(new URL(`node_modules/${pkg}/files/${file}`, root)));

const display = font('@fontsource/bricolage-grotesque', 'bricolage-grotesque-latin-600-normal.woff');
const italic = font('@fontsource/libre-caslon-text', 'libre-caslon-text-latin-400-italic.woff');
const roman = font('@fontsource/libre-caslon-text', 'libre-caslon-text-latin-400-normal.woff');

const W = 1200, H = 630;
const ivory = '#f3f0e8', paper = '#faf7ef', ink = '#1b1a17', graphite = '#5c574f', madder = '#9a3b26';

// Texte centré, mis en forme par fontkit (crénage), converti en tracés
function centered(f, str, y, size, fill, tracking = 0) {
  const run = f.layout(str);
  const scale = size / f.unitsPerEm;
  const track = tracking * f.unitsPerEm;
  const width = (run.advanceWidth + track * (run.glyphs.length - 1)) * scale;
  let x = (W - width) / 2 / scale;
  const parts = run.glyphs.map((g, i) => {
    const pos = run.positions[i];
    const d = g.path.toSVG();
    const out = d ? `<path transform="translate(${(x + pos.xOffset) * scale} ${y}) scale(${scale} ${-scale})" d="${d}" fill="${fill}"/>` : '';
    x += pos.xAdvance + track;
    return out;
  });
  return parts.join('');
}

// Étiquette : double filet
const lw = 840, lh = 410, lx = (W - lw) / 2, ly = (H - lh) / 2;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${ivory}"/>
  <rect x="${lx}" y="${ly}" width="${lw}" height="${lh}" fill="${paper}" stroke="${ink}" stroke-width="2"/>
  <rect x="${lx + 10}" y="${ly + 10}" width="${lw - 20}" height="${lh - 20}" fill="none" stroke="${ink}" stroke-opacity="0.55" stroke-width="1.5"/>
  ${centered(display, 'Hugo Abecassis,', ly + 168, 88, ink, -0.03)}
  ${centered(italic, 'luthier', ly + 258, 76, ink)}
  <rect x="${W / 2 - 40}" y="${ly + 300}" width="80" height="2" fill="${madder}"/>
  ${centered(roman, 'ENTRETIEN · RESTAURATION · FABRICATION', ly + 356, 19, graphite, 0.16)}
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 88, mozjpeg: true }).toFile(fileURLToPath(new URL('public/og.jpg', root)));
console.log('✓ public/og.jpg');
