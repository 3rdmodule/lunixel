/**
 * Construit une URL interne compatible avec le chemin de base (BASE_PATH).
 * url('/atelier/') → '/concept/hugoabecassis/atelier/' (concept) ou '/atelier/' (domaine propre).
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = '/'): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${clean}`;
}

/** URL absolue (canonical, Open Graph, JSON-LD). */
export function absoluteUrl(path = '/', site?: URL | string): string {
  const origin = site ? new URL(site.toString()).origin : '';
  return `${origin}${url(path)}`;
}

/** Retire le chemin de base d'un pathname (pour comparer au menu). */
export function stripBase(pathname: string): string {
  const p = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  return p || '/';
}
