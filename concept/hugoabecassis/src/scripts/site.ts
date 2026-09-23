/**
 * Scripts du site — volontairement minimes (aucune dépendance).
 * 1. En-tête : état « plein » au défilement
 * 2. Menu mobile (<dialog> natif)
 * 3. Apparition douce des images et des textes
 * 4. Galerie : agrandissement plein écran
 * 5. Rendez-vous : Cal.com chargé au premier clic (mode "cal")
 * 6. Formulaire de contact : motif pré-rempli, envoi, mode démonstration
 */

/* 1. En-tête */
const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
  const update = () => header.classList.toggle('is-solid', window.scrollY > 24);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* 2. Menu mobile */
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
  window.matchMedia('(min-width: 1080px)').addEventListener('change', (e) => e.matches && menu.open && menu.close());
}

/* 3. Apparitions */
const revealables = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-text]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('is-visible'));
}

/* 4. Galerie */
const lightbox = document.querySelector<HTMLDialogElement>('[data-lightbox-dialog]');
const triggers = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-lightbox]'));
if (lightbox && triggers.length) {
  const img = lightbox.querySelector<HTMLImageElement>('[data-lightbox-img]')!;
  const brief = lightbox.querySelector<HTMLElement>('[data-lightbox-brief]')!;
  const caption = lightbox.querySelector<HTMLElement>('[data-lightbox-caption]')!;
  let index = 0;
  let opener: HTMLElement | null = null;

  const show = (i: number) => {
    index = (i + triggers.length) % triggers.length;
    const t = triggers[index];
    const full = t.dataset.full;
    if (full) {
      img.src = full;
      img.alt = t.getAttribute('aria-label')?.replace(/^Agrandir : /, '') ?? '';
      img.hidden = false;
      brief.hidden = true;
    } else {
      img.hidden = true;
      brief.textContent = t.dataset.brief ?? '';
      brief.hidden = false;
    }
    caption.textContent = `${String(index + 1).padStart(2, '0')} / ${String(triggers.length).padStart(2, '0')} · ${t.dataset.caption ?? ''}`;
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
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener('close', () => opener?.focus());
}

/* 5. Cal.com — chargé uniquement au premier clic (performance, RGPD) */
declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => void) & { loaded?: boolean; ns?: Record<string, unknown>; q?: unknown[] };
    __CAL_ORIGIN__?: string;
  }
}
function loadCal(origin: string) {
  if (window.Cal) return;
  // Snippet d'intégration officiel Cal.com (file d'attente + chargement d'embed.js).
  /* eslint-disable */
  (function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) { a.q.push(ar); };
    const d = C.document;
    C.Cal = C.Cal || function (this: unknown) {
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
  Cal('init', { origin: 'https://cal.com' });
  Cal('ui', {
    theme: 'light',
    hideEventTypeDetails: false,
    layout: 'month_view',
    cssVarsPerTheme: { light: { 'cal-brand': '#1b1a17', 'cal-bg': '#f3f0e8' } },
  });
}
document.querySelectorAll<HTMLAnchorElement>('[data-booking][data-cal-link]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const calLink = a.dataset.calLink;
    if (!calLink) return;
    e.preventDefault();
    loadCal(window.__CAL_ORIGIN__ ?? 'https://app.cal.com');
    window.Cal?.('modal', { calLink, config: { layout: 'month_view' } });
  });
});

/* 6. Formulaire de contact */
const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
if (form) {
  const params = new URLSearchParams(window.location.search);
  const motif = params.get('motif');
  const select = form.querySelector<HTMLSelectElement>('select[name="motif"]');
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
      setStatus('Merci de compléter les champs obligatoires.', 'error');
      return;
    }
    const endpoint = form.dataset.endpoint;
    if (!endpoint) {
      setStatus(
        "Prototype : le formulaire n'est pas encore relié à une adresse d'envoi. Votre message n'a pas été transmis.",
        'info',
      );
      return;
    }
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    btn?.setAttribute('disabled', '');
    setStatus('Envoi en cours…', 'info');
    try {
      const res = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('Merci. Votre message a bien été envoyé : Hugo vous répondra personnellement.', 'ok');
    } catch {
      setStatus("L'envoi n'a pas abouti. Réessayez dans un instant ou écrivez directement par e-mail.", 'error');
    } finally {
      btn?.removeAttribute('disabled');
    }
  });
}

export {};
