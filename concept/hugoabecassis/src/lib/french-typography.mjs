// Intégration Astro : applique la typographie française au HTML généré.
// Espace fine insécable (U+202F) avant ; : ! ? » et après «, uniquement dans
// les nœuds texte (jamais dans <script>, <style>, <pre>, <code>, <textarea>).
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const NNBSP = ' ';
const SKIP = /^(script|style|pre|code|textarea)$/i;

export function frenchText(text) {
  return text
    .replace(/[  ]+([;:!?»])/g, `${NNBSP}$1`)
    .replace(/([«])[  ]+/g, `$1${NNBSP}`)
    .replace(/(\d)\s(€|%)/g, `$1${NNBSP}$2`)
    .replace(/([A-Za-zÀ-ÿ])(?:'|&#39;|&#x27;)([A-Za-zÀ-ÿ])/g, '$1’$2');
}

export function processHtml(html) {
  let out = '';
  let i = 0;
  const skipStack = [];
  const tagRe = /<\/?([a-zA-Z][\w-]*)[^>]*>|<!--[\s\S]*?-->|<!doctype[^>]*>/gi;
  let m;
  while ((m = tagRe.exec(html))) {
    const text = html.slice(i, m.index);
    out += skipStack.length ? text : frenchText(text);
    const tag = m[0];
    const name = m[1];
    if (name && SKIP.test(name)) {
      if (tag.startsWith('</')) skipStack.pop();
      else if (!tag.endsWith('/>')) skipStack.push(name);
    }
    out += tag;
    i = tagRe.lastIndex;
  }
  const rest = html.slice(i);
  out += skipStack.length ? rest : frenchText(rest);
  return out;
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => (e.isDirectory() ? walk(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : [])),
  );
  return files.flat();
}

export default function frenchTypography() {
  return {
    name: 'french-typography',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        for (const file of await walk(root)) {
          const html = await readFile(file, 'utf8');
          await writeFile(file, processHtml(html));
        }
      },
    },
  };
}
