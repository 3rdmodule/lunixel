// Retouche et étalonnage des photos (exécuté avant chaque build : prebuild).
// 1. Photos d'Hugo (site du magasin) : le drapé et le mur bleus sont ramenés
//    vers un gris chaud sombre ; le bois, le vernis et les cordes restent tels quels.
// 2. Toutes les photos (y compris les reportages) reçoivent le même étalonnage
//    léger, pour s'accorder à la palette du site : balance un peu plus chaude,
//    bleus adoucis, noirs relevés vers l'ébène, blancs vers l'ivoire.
// Entrée : photos-sources/…  Sortie : src/assets/photos/… (générés, non versionnés).
import { mkdir, access, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = new URL('../', import.meta.url);
const src = (f) => fileURLToPath(new URL(`photos-sources/${f}`, root));
const outDir = fileURLToPath(new URL('src/assets/photos/', root));
// À changer quand l'étalonnage change : force la régénération des fichiers.
const VERSION = 'etalonnage-3';

// [sortie, source, agrandissement, mode ('fond' par défaut : bleu neutralisé + étalonnage)]
const PHOTOS = [
  // Instruments d'Hugo (agrandis pour les grands formats)
  ['realisations/physalis.jpg', 'physalis/14--1-__5071.jpg', 1.6],
  ['realisations/physalis-ouie.jpg', 'physalis/violon-damour-physalis--3-__2636.jpg', 1.6],
  ['realisations/physalis-chevillier.jpg', 'physalis/14--2-__5072.jpg', 1.6],
  ['realisations/physalis-fond.jpg', 'physalis/violon-damour-physalis--12-__2632.jpg', 1.6],
  ['realisations/la-jazz.jpg', 'la-jazz/lutherie-abecassis-la-jazz--3-__4576.jpg', 1.6],
  ['realisations/la-jazz-tete.jpg', 'la-jazz/20181229-115131__2340.jpg', 1.6],
  ['realisations/la-jazz-fond.jpg', 'la-jazz/20181229-115234__2348.jpg', 1.6],
  ['realisations/pinarbox.jpg', 'pinarbox-folk/20190214-112421__2959.jpg', 1.6],
  ['realisations/pinarbox-caisse.jpg', 'pinarbox-folk/20190214-112418__2958.jpg', 1.6],
  // À l'établi, 2015-2016 (mur bleu neutralisé)
  ['realisations/etapes/01.jpg', 'atelier/20150702-185210__2480.jpg', 1],
  ['realisations/etapes/02.jpg', 'atelier/20150716-171845__2483.jpg', 1],
  ['realisations/etapes/03.jpg', 'atelier/20150923-182004__2484.jpg', 1],
  ['realisations/etapes/04.jpg', 'atelier/20151104-120738__2486.jpg', 1],
  ['realisations/etapes/05.jpg', 'atelier/20151110-123727__2487.jpg', 1],
  ['realisations/etapes/06.jpg', 'atelier/20151112-083707__2488.jpg', 1],
  ['realisations/etapes/07.jpg', 'atelier/20151222-115720__2493.jpg', 1],
  ['realisations/etapes/08.jpg', 'atelier/20160102-122520__2494.jpg', 1],
  ['realisations/details/volute-2015.jpg', 'atelier/20151201-153230__2492.jpg', 1],
  ['realisations/details/volute-2016.jpg', 'atelier/20160104-182022__2495.jpg', 1],
  // Restaurations
  ['realisations/restauration/violoncelle.jpg', 'atelier/20180629-161645__3128.jpg', 1],
  ['realisations/restauration/guitare.jpg', 'atelier/l1030495__2544.jpg', 1],
  ['realisations/restauration/fente.jpg', 'atelier/l1030509__2549.jpg', 1],
  ['realisations/restauration/touche.jpg', 'atelier/l1030513__2551.jpg', 1],
  ['realisations/restauration/piece.jpg', 'atelier/l1030517__2552.jpg', 1],
  ['realisations/restauration/presses.jpg', 'atelier/l1030525__2554.jpg', 1],
  ['realisations/restauration/etiquette.jpg', 'atelier/l1030530__2556.jpg', 1],
  // Reportages (Aurélie Augé, Ouest-France) : étalonnage seul, rien n'est effacé
  ['reportage/ouest-france-2026.jpg', 'reportage/ouest-france-2026.jpg', 1, 'etalonnage'],
  ['reportage/hanamatsuri-etabli.jpg', 'reportage/hanamatsuri-etabli.jpg', 1, 'etalonnage'],
  ['reportage/hanamatsuri-travail.jpg', 'reportage/hanamatsuri-travail.jpg', 1, 'etalonnage'],
  ['reportage/hanamatsuri-detail.jpg', 'reportage/hanamatsuri-detail.jpg', 1, 'etalonnage'],
];

const clamp = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);

// Étalonnage commun : chaque canal passe du noir « ébène » au blanc « ivoire »
const BLACK = [22 / 255, 19 / 255, 16 / 255];
const WHITE = [248 / 255, 243 / 255, 234 / 255];
function grade(r, g, b) {
  // balance un peu plus chaude
  r = clamp(r * 1.025); b = clamp(b * 0.955);
  // saturation : -12 % partout, bleus nettement adoucis (mur de l'atelier : bleu ardoise)
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  let k = 0.88;
  if (d > 0) {
    let h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    h = (h * 60 + 360) % 360;
    const blue = clamp((1 - Math.abs(h - 222) / 48) * 1.4);
    k *= 1 - 0.7 * blue;
  }
  const y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  r = clamp(y + (r - y) * k); g = clamp(y + (g - y) * k); b = clamp(y + (b - y) * k);
  return [
    BLACK[0] + r * (WHITE[0] - BLACK[0]),
    BLACK[1] + g * (WHITE[1] - BLACK[1]),
    BLACK[2] + b * (WHITE[2] - BLACK[2]),
  ];
}

async function retouche(input, output, scale, mode = 'fond') {
  const img = sharp(input).rotate();
  const { data, info } = await img.clone().removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const n = width * height;

  // Masque « bleu » : teinte autour de 225°, saturation suffisante
  const mask = Buffer.alloc(n);
  for (let i = 0; i < n; i++) {
    const r = data[i * 3] / 255, g = data[i * 3 + 1] / 255, b = data[i * 3 + 2] / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
    if (!d || !max) continue;
    let h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    h = (h * 60 + 360) % 360;
    const s = d / max;
    const hue = clamp((1 - Math.abs(h - 225) / 45) * 1.8);
    const sat = clamp((s - 0.12) / 0.2);
    mask[i] = Math.round(hue * sat * 255);
  }
  const blurred = await sharp(mask, { raw: { width, height, channels: 1 } }).blur(1.2).raw().toBuffer({ resolveWithObject: true });
  const soft = blurred.data, stride = blurred.info.channels;

  const out = Buffer.alloc(n * 3);
  for (let i = 0; i < n; i++) {
    const m = mode === 'fond' ? soft[i * stride] / 255 : 0;
    const r = data[i * 3] / 255, g = data[i * 3 + 1] / 255, b = data[i * 3 + 2] / 255;
    const base = 0.085 + (0.2126 * r + 0.7152 * g + 0.0722 * b) * 0.48;
    const [gr, gg, gb] = grade(
      clamp(r * (1 - m) + base * 1.04 * m),
      clamp(g * (1 - m) + base * m),
      clamp(b * (1 - m) + base * 0.94 * m),
    );
    out[i * 3] = Math.round(gr * 255);
    out[i * 3 + 1] = Math.round(gg * 255);
    out[i * 3 + 2] = Math.round(gb * 255);
  }
  await sharp(out, { raw: { width, height, channels: 3 } })
    .resize(Math.round(width * scale), Math.round(height * scale), { kernel: 'lanczos3' })
    .sharpen(scale > 1 ? { sigma: 0.8, m1: 0.6, m2: 0.6 } : { sigma: 0.5, m1: 0.3, m2: 0.3 })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(output);
}

// Étalonnage modifié depuis le dernier passage : tout est régénéré
const stamp = outDir + '.version';
const fresh = await readFile(stamp, 'utf8').then((v) => v.trim() !== VERSION, () => true);

let done = 0;
for (const [name, file, scale, mode] of PHOTOS) {
  const output = outDir + name;
  await mkdir(dirname(output), { recursive: true });
  if (!fresh) { try { await access(output); continue; } catch {} }
  try { await access(src(file)); } catch { console.warn(`✗ source absente : ${file}`); continue; }
  await retouche(src(file), output, scale, mode);
  done++;
}
await mkdir(outDir, { recursive: true });
await writeFile(stamp, VERSION + '\n');
console.log(`✓ photos : ${done} retouchée(s) et étalonnée(s)`);
