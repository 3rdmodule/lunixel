/**
 * Scripts du site, volontairement courts et sans dépendance.
 * 1. Menu mobile (<dialog> natif)
 * 2. Filet de chargement (si la page suivante tarde)
 * 3. Galerie : agrandissement plein écran
 * 4. Rendez-vous : Cal.com chargé au premier clic, fenêtre par-dessus le site
 * 5. Formulaire de contact
 */

/* 1. Menu mobile */
const menu = document.querySelector<HTMLDialogElement>('[data-menu]');
const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
if (menu && openBtn) {
  openBtn.addEventListener('click', () => {
    menu.showModal();
    openBtn.setAttribute('aria-expanded', 'true');
  });
  menu.querySelector('[data-menu-close]')?.addEventListener('click', () => menu.close());
  menu.addEventListener('close', () => {
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.focus();
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => menu.close()));
}

/* 2. Filet de chargement : apparaît seulement si la navigation dépasse 250 ms */
const string = document.querySelector<HTMLElement>('[data-string]');
if (string) {
  let timer: number | undefined;
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if ((a.target && a.target !== '_self') || a.hasAttribute('download') || a.hasAttribute('data-booking')) return;
    const to = new URL(a.href, location.href);
    if (to.origin !== location.origin || (to.pathname === location.pathname && to.hash)) return;
    timer = window.setTimeout(() => string.classList.add('is-on'), 250);
  });
  window.addEventListener('pageshow', () => {
    clearTimeout(timer);
    string.classList.remove('is-on');
  });
}

/* 3. Galerie */
const lightbox = document.querySelector<HTMLDialogElement>('[data-lightbox-dialog]');
const triggers = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-lightbox]'));
if (lightbox && triggers.length) {
  const img = lightbox.querySelector<HTMLImageElement>('[data-lightbox-img]')!;
  const caption = lightbox.querySelector<HTMLElement>('[data-lightbox-caption]')!;
  let index = 0;
  let opener: HTMLElement | null = null;
  const show = (i: number) => {
    index = (i + triggers.length) % triggers.length;
    const t = triggers[index];
    img.src = t.dataset.full ?? '';
    img.alt = t.getAttribute('aria-label')?.replace(/^Agrandir : /, '') ?? '';
    caption.textContent = `${index + 1} / ${triggers.length} · ${t.dataset.caption ?? ''}`;
  };
  triggers.forEach((t, i) =>
    t.addEventListener('click', () => {
      opener = t;
      show(i);
      lightbox.showModal();
    }),
  );
  lightbox.querySelector('[data-lightbox-close]')?.addEventListener('click', () => lightbox.close());
  lightbox.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => show(index - 1));
  lightbox.querySelector('[data-lightbox-next]')?.addEventListener('click', () => show(index + 1));
  lightbox.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
  lightbox.addEventListener('click', (e) => e.target === lightbox && lightbox.close());
  lightbox.addEventListener('close', () => opener?.focus());
}

/* 4. Rendez-vous : Cal.com, chargé au premier clic (performance, RGPD) */
declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => void) & { loaded?: boolean; ns?: Record<string, unknown>; q?: unknown[] };
  }
}
const bookingConfig = document.querySelector<HTMLElement>('[data-booking-config]')?.dataset ?? {};
function loadCal() {
  if (window.Cal) return window.Cal;
  const origin = bookingConfig.origin ?? 'https://app.cal.com';
  // Snippet d'intégration officiel Cal.com : file d'attente + chargement d'embed.js
  /* eslint-disable */
  (function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) { a.q.push(ar); };
    const d = C.document;
    C.Cal = C.Cal || function () {
      const cal = C.Cal;
      const ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement('script')).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api: any = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ['initNamespace', namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, `${origin}/embed/embed.js`, 'init');
  /* eslint-enable */
  const Cal = window.Cal!;
  Cal('init', { origin });
  Cal('ui', {
    theme: 'light',
    layout: 'month_view',
    hideEventTypeDetails: false,
    cssVarsPerTheme: { light: { 'cal-brand': bookingConfig.brand ?? '#9a3b26' } },
  });
  return Cal;
}
const conceptDialog = document.querySelector<HTMLDialogElement>('[data-booking-dialog]');
conceptDialog?.querySelector('[data-booking-close]')?.addEventListener('click', () => conceptDialog.close());
conceptDialog?.addEventListener('click', (e) => e.target === conceptDialog && conceptDialog.close());
document.querySelectorAll<HTMLAnchorElement>('[data-booking]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const calLink = a.dataset.booking;
    e.preventDefault();
    if (calLink) loadCal()('modal', { calLink, config: { layout: 'month_view' } });
    else conceptDialog?.showModal();
  });
});

/* 5. Formulaire de contact */
const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
if (form) {
  const params = new URLSearchParams(location.search);
  const motif = params.get('motif');
  const select = form.querySelector<HTMLSelectElement>('select[name="objet"]');
  if (motif && select && Array.from(select.options).some((o) => o.value === motif)) select.value = motif;

  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const setStatus = (msg: string, kind: 'ok' | 'error' | 'info') => {
    if (!status) return;
    status.textContent = msg;
    status.dataset.kind = kind;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus('Merci de remplir les champs obligatoires.', 'error');
      return;
    }
    const endpoint = form.dataset.endpoint;
    if (!endpoint) {
      setStatus("Concept : le formulaire n'est pas encore relié à une adresse. Votre message n'a pas été envoyé.", 'info');
      return;
    }
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    btn?.setAttribute('disabled', '');
    btn?.classList.add('is-loading');
    setStatus('Envoi…', 'info');
    try {
      const res = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('Merci, votre message est bien parti. Hugo vous répond lui-même.', 'ok');
    } catch {
      setStatus("L'envoi n'a pas marché. Réessayez dans un moment.", 'error');
    } finally {
      btn?.removeAttribute('disabled');
      btn?.classList.remove('is-loading');
    }
  });
}

export {};
