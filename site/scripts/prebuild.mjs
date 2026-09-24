// Préparation du déploiement : captures réelles des projets, images de partage et icônes.
// Si une étape échoue (site injoignable, navigateur absent…), le site se construit quand même
// et affiche un aperçu dessiné à la place de la capture.
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';
import { projects } from '../src/data/projects.js';
import { metiers } from '../src/data/metiers.js';
import { MOON_CELLS, MOON_COLORS, WORDMARK_D } from '../src/data/logo.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'public/generated');
const dirs = { cap: path.join(out, 'captures'), og: path.join(out, 'og'), icons: path.join(out, 'icons') };
for (const d of Object.values(dirs)) await fs.mkdir(d, { recursive: true });

const log = (...a) => console.log('[prebuild]', ...a);

/* ---------- Icônes ---------- */
const moonRects = (dx = 0, dy = 0, s = 1) =>
  MOON_CELLS.map(([c, r, k]) => `<rect x="${dx + c * 21 * s}" y="${dy + r * 21 * s}" width="${19 * s}" height="${19 * s}" rx="${2.6 * s}" fill="${MOON_COLORS[k]}"/>`).join('');
const iconSvg = (size, bg) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 400 400">${bg ? `<rect width="400" height="400" fill="${bg}"/>` : ''}${moonRects(64, 54)}</svg>`;
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-21 -10 313 313">${MOON_COLORS.map((col, k) => `<g fill="${col}">${MOON_CELLS.filter((c) => c[2] === k).map(([c, r]) => `<rect x="${c * 21}" y="${r * 21}" width="19" height="19" rx="2.6"/>`).join('')}</g>`).join('')}</svg>\n`;
await fs.writeFile(path.join(root, 'public/favicon.svg'), favicon);
await sharp(Buffer.from(iconSvg(180, '#1B1E3C'))).png().toFile(path.join(dirs.icons, 'apple-touch-icon.png'));
await sharp(Buffer.from(iconSvg(32))).png().toFile(path.join(dirs.icons, 'favicon-32.png'));
const iconPng = (size, bg) => sharp(Buffer.from(iconSvg(size, bg))).png().toBuffer();
await fs.writeFile(path.join(dirs.icons, 'favicon-16.png'), await iconPng(16));
await fs.writeFile(path.join(dirs.icons, 'icon-192.png'), await iconPng(192, '#1B1E3C'));
await fs.writeFile(path.join(dirs.icons, 'icon-512.png'), await iconPng(512, '#1B1E3C'));
// favicon.ico : 16, 32 et 48 px (PNG embarqués), pour les navigateurs et robots qui le demandent à la racine.
const icoImgs = await Promise.all([16, 32, 48].map(async (s) => [s, await iconPng(s)]));
const icoHead = Buffer.alloc(6);
icoHead.writeUInt16LE(0, 0);
icoHead.writeUInt16LE(1, 2);
icoHead.writeUInt16LE(icoImgs.length, 4);
let icoOffset = 6 + 16 * icoImgs.length;
const icoDir = icoImgs.map(([s, buf]) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(s, 0);
  e.writeUInt8(s, 1);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(buf.length, 8);
  e.writeUInt32LE(icoOffset, 12);
  icoOffset += buf.length;
  return e;
});
await fs.writeFile(path.join(root, 'public/favicon.ico'), Buffer.concat([icoHead, ...icoDir, ...icoImgs.map(([, b]) => b)]));
await fs.writeFile(
  path.join(root, 'public/site.webmanifest'),
  JSON.stringify(
    {
      name: 'Lunixel',
      short_name: 'Lunixel',
      icons: [
        { src: '/generated/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/generated/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      theme_color: '#1B1E3C',
      background_color: '#1B1E3C',
      display: 'browser',
    },
    null,
    2,
  ),
);
log('icônes ok');

/* ---------- Navigateur ---------- */
let browser = null;
try {
  const { chromium } = await import('playwright');
  browser = await chromium.launch(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {});
} catch (e) {
  log('navigateur indisponible, captures et images de partage ignorées :', e.message.split('\n')[0]);
}

/* ---------- Captures des projets ---------- */
const manifest = {};
async function encode(buf, name, widths) {
  const meta = await sharp(buf).metadata();
  const ws = widths.filter((w) => w <= meta.width);
  for (const w of ws) {
    await sharp(buf).resize({ width: w }).webp({ quality: 78 }).toFile(path.join(dirs.cap, `${name}-${w}.webp`));
    await sharp(buf).resize({ width: w }).avif({ quality: 50, effort: 4 }).toFile(path.join(dirs.cap, `${name}-${w}.avif`));
  }
  const max = ws[ws.length - 1];
  return { widths: ws, w: max, h: Math.round((meta.height * max) / meta.width) };
}

async function shoot(url, { mobile, scheme, offsets = [0] }) {
  const ctx = await browser.newContext({
    viewport: mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    isMobile: mobile,
    hasTouch: mobile,
    locale: 'fr-FR',
    colorScheme: scheme || 'light',
    reducedMotion: 'no-preference',
  });
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => page.goto(url, { waitUntil: 'load', timeout: 45000 }));
    await page.waitForTimeout(2500);
    const shots = [];
    for (const k of offsets) {
      await page.evaluate((y) => window.scrollTo(0, y), Math.round(k * (mobile ? 844 : 900)));
      await page.waitForTimeout(k ? 1400 : 200);
      shots.push(await page.screenshot({ type: 'png' }));
    }
    return shots;
  } finally {
    await ctx.close();
  }
}

if (browser) {
  for (const p of projects) {
    const entry = {};
    try {
      const [desk] = await shoot(p.captureUrl, { mobile: false, scheme: p.captureScheme });
      entry.desktop = await encode(desk, `${p.slug}-desktop`, [720, 1440, 2160]);
      const phones = await shoot(p.captureUrl, { mobile: true, scheme: p.captureScheme, offsets: [0, 1.05, 2.1] });
      entry.mobile = [];
      for (let i = 0; i < phones.length; i++) entry.mobile.push(await encode(phones[i], `${p.slug}-mobile-${i}`, [390, 780]));
      for (const x of p.extraCaptures || []) {
        const [shot] = await shoot(x.url, { mobile: false, scheme: p.captureScheme });
        entry.extra = { ...(entry.extra || {}), [x.key]: await encode(shot, `${p.slug}-${x.key}`, [720, 1440, 2160]) };
      }
      log('captures ok :', p.slug);
    } catch (e) {
      log('captures impossibles pour', p.slug, ':', e.message.split('\n')[0]);
    }
    if (Object.keys(entry).length) manifest[p.slug] = entry;
  }
}
await fs.writeFile(path.join(out, 'manifest.json'), JSON.stringify(manifest, null, 2));

/* ---------- Images de partage (1200 × 630) ---------- */
const fontUrl = (p) => pathToFileURL(path.join(root, 'node_modules', p)).href;
const ogPages = {
  accueil: ['Vous avez un <em>métier</em>.<br>Je m’occupe du web.', 'Sites pour salons, instituts et boutiques'],
  salons: ['Un site qui remplit votre agenda, <em>sans commission</em>.', 'Salons et instituts'],
  tarifs: ['Des prix clairs, <em>sans abonnement</em>.', 'Tarifs'],
  methode: ['De la démo gratuite à la mise en ligne.', 'Méthode'],
  'a-propos': ['Qui est derrière Lunixel.', 'À propos'],
  faq: ['Vos questions, mes réponses.', 'Questions fréquentes'],
  realisations: ['Des sites qui ressemblent à ceux qui les tiennent.', 'Réalisations'],
  concepts: ['Avant de construire, j’imagine.', 'Concepts'],
  contact: ['Votre démo <em>gratuite</em>.', 'La maquette de votre page d’accueil, offerte'],
  'mentions-legales': ['Mentions légales', 'lunixel.fr'],
  confidentialite: ['Pas de cookies, pas de pistage.', 'Confidentialité'],
  conditions: ['Les règles du site, en clair.', 'Conditions d’utilisation'],
};
for (const m of metiers) ogPages[`metiers-${m.slug}`] = [m.h1 + '.', m.label];
for (const p of projects) {
  const key = `${p.kind === 'realisation' ? 'realisations' : 'concepts'}-${p.slug}`;
  const wip = p.status === 'en-cours';
  ogPages[key] = p.kind === 'realisation' ? [p.tagline, `${wip ? 'Réalisation en cours' : 'Réalisation'} · ${p.name}`] : [p.question, `Concept · ${p.name}`];
}
const logoSvg = `<svg viewBox="85 75 1419 302" xmlns="http://www.w3.org/2000/svg" style="height:56px;width:auto;align-self:flex-start">${MOON_CELLS.map(([c, r, k]) => `<rect x="${85 + c * 21}" y="${85 + r * 21}" width="19" height="19" rx="2.6" fill="${MOON_COLORS[k]}"/>`).join('')}<path fill="#F6F2EA" d="${WORDMARK_D}"/><rect x="1010" y="83" width="38" height="38" rx="5.2" fill="#F6B940"/></svg>`;
const ogHtml = (title, label) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:D;src:url(${fontUrl('@fontsource-variable/gabarito/files/gabarito-latin-wght-normal.woff2')}) format('woff2');font-weight:400 900}
@font-face{font-family:T;src:url(${fontUrl('@fontsource-variable/hanken-grotesk/files/hanken-grotesk-latin-wght-normal.woff2')}) format('woff2');font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1200px;height:630px;background:#1B1E3C;color:#F6F2EA;font-family:T,sans-serif;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden}
.halo{position:absolute;right:-260px;top:-220px;width:900px;height:900px;background:radial-gradient(closest-side,rgba(246,185,64,.2),rgba(246,185,64,.05) 55%,transparent)}
h1{font-family:D,sans-serif;font-size:${title.length > 60 ? 60 : 72}px;line-height:1.02;letter-spacing:-.028em;font-weight:700;max-width:980px;position:relative}
em{font-style:normal;color:#FFE08A}
.foot{display:flex;justify-content:space-between;align-items:center;font-size:24px;color:#A7AACB;position:relative}
.foot b{display:inline-flex;align-items:center;gap:14px;font-weight:500}.px{width:14px;height:14px;border-radius:3px;background:#F6B940;display:inline-block}
</style></head><body><div class="halo"></div>${logoSvg}<h1>${title}</h1><div class="foot"><b><i class="px"></i>${label}</b><span>lunixel.fr</span></div></body></html>`;

if (browser) {
  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
    const tmp = path.join(out, '_og.html');
    for (const [slug, [title, label]] of Object.entries(ogPages)) {
      await fs.writeFile(tmp, ogHtml(title, label));
      await page.goto(pathToFileURL(tmp).href);
      await page.evaluate(() => document.fonts.ready);
      const png = await page.screenshot({ type: 'png' });
      await sharp(png).jpeg({ quality: 86, mozjpeg: true }).toFile(path.join(dirs.og, `${slug}.jpg`));
    }
    await fs.rm(tmp);
    log('images de partage ok');
  } catch (e) {
    log('images de partage impossibles :', e.message.split('\n')[0]);
  }
  await browser.close();
}

if (!existsSync(path.join(dirs.og, 'accueil.jpg'))) log('attention : aucune image de partage générée');
