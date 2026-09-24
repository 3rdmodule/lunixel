// Retouche des photos d'Hugo (site du magasin : drapé bleu, mur bleu de l'atelier).
// Le bleu est ramené vers un gris chaud sombre : seules les teintes bleues sont
// touchées, le bois, le vernis et les cordes restent tels quels.
// Exécuté avant chaque build (prebuild). Entrée : photos-sources/…
// Sortie : src/assets/photos/realisations/… (fichiers générés, non versionnés).
import { mkdir, access } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = new URL('../', import.meta.url);
const src = (f) => fileURLToPath(new URL(`photos-sources/${f}`, root));
const outDir = fileURLToPath(new URL('src/assets/photos/realisations/', root));

// [sortie, source, agrandissement]
const PHOTOS = [
  // Instruments d'Hugo (agrandis pour les grands formats)
  ['physalis.jpg', 'physalis/14--1-__5071.jpg', 1.6],
  ['physalis-ouie.jpg', 'physalis/violon-damour-physalis--3-__2636.jpg', 1.6],
  ['physalis-chevillier.jpg', 'physalis/14--2-__5072.jpg', 1.6],
  ['physalis-fond.jpg', 'physalis/violon-damour-physalis--12-__2632.jpg', 1.6],
  ['la-jazz.jpg', 'la-jazz/lutherie-abecassis-la-jazz--3-__4576.jpg', 1.6],
  ['la-jazz-tete.jpg', 'la-jazz/20181229-115131__2340.jpg', 1.6],
  ['la-jazz-fond.jpg', 'la-jazz/20181229-115234__2348.jpg', 1.6],
  ['pinarbox.jpg', 'pinarbox-folk/20190214-112421__2959.jpg', 1.6],
  ['pinarbox-caisse.jpg', 'pinarbox-folk/20190214-112418__2958.jpg', 1.6],
  // À l'établi, 2015-2016 (mur bleu neutralisé)
  ['etapes/01.jpg', 'atelier/20150702-185210__2480.jpg', 1],
  ['etapes/02.jpg', 'atelier/20150716-171845__2483.jpg', 1],
  ['etapes/03.jpg', 'atelier/20150923-182004__2484.jpg', 1],
  ['etapes/04.jpg', 'atelier/20151104-120738__2486.jpg', 1],
  ['etapes/05.jpg', 'atelier/20151110-123727__2487.jpg', 1],
  ['etapes/06.jpg', 'atelier/20151112-083707__2488.jpg', 1],
  ['etapes/07.jpg', 'atelier/20151222-115720__2493.jpg', 1],
  ['etapes/08.jpg', 'atelier/20160102-122520__2494.jpg', 1],
  ['details/volute-2015.jpg', 'atelier/20151201-153230__2492.jpg', 1],
  ['details/volute-2016.jpg', 'atelier/20160104-182022__2495.jpg', 1],
  // Restaurations
  ['restauration/violoncelle.jpg', 'atelier/20180629-161645__3128.jpg', 1],
  ['restauration/guitare.jpg', 'atelier/l1030495__2544.jpg', 1],
  ['restauration/fente.jpg', 'atelier/l1030509__2549.jpg', 1],
  ['restauration/touche.jpg', 'atelier/l1030513__2551.jpg', 1],
  ['restauration/piece.jpg', 'atelier/l1030517__2552.jpg', 1],
  ['restauration/presses.jpg', 'atelier/l1030525__2554.jpg', 1],
  ['restauration/etiquette.jpg', 'atelier/l1030530__2556.jpg', 1],
];

const clamp = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);

async function retouche(input, output, scale) {
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
    const m = soft[i * stride] / 255;
    const r = data[i * 3] / 255, g = data[i * 3 + 1] / 255, b = data[i * 3 + 2] / 255;
    const base = 0.085 + (0.2126 * r + 0.7152 * g + 0.0722 * b) * 0.48;
    out[i * 3] = Math.round(clamp(r * (1 - m) + base * 1.04 * m) * 255);
    out[i * 3 + 1] = Math.round(clamp(g * (1 - m) + base * m) * 255);
    out[i * 3 + 2] = Math.round(clamp(b * (1 - m) + base * 0.94 * m) * 255);
  }
  await sharp(out, { raw: { width, height, channels: 3 } })
    .resize(Math.round(width * scale), Math.round(height * scale), { kernel: 'lanczos3' })
    .sharpen(scale > 1 ? { sigma: 0.8, m1: 0.6, m2: 0.6 } : { sigma: 0.5, m1: 0.3, m2: 0.3 })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(output);
}

let done = 0;
for (const [name, file, scale] of PHOTOS) {
  const output = outDir + name;
  await mkdir(dirname(output), { recursive: true });
  try { await access(output); continue; } catch {}
  try { await access(src(file)); } catch { console.warn(`✗ source absente : ${file}`); continue; }
  await retouche(src(file), output, scale);
  done++;
}
console.log(`✓ réalisations : ${done} retouchée(s)`);
