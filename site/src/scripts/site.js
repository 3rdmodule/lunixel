// Lunixel : interactions. Tout est facultatif : sans JavaScript, le site reste complet.

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* En-tête : se compacte au défilement, se cache en descendant, revient en remontant */
const header = $('[data-header]');
if (header) {
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 24);
    const menuOpen = document.documentElement.classList.contains('menu-open');
    header.classList.toggle('is-hidden', !menuOpen && y > 480 && y > lastY + 4);
    if (y < lastY - 4 || y < 480) header.classList.remove('is-hidden');
    lastY = y;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  header.addEventListener('focusin', () => header.classList.remove('is-hidden'));
}

/* Menu mobile, avec piège à focus et fermeture par Échap */
const menu = $('[data-menu]');
const openBtn = $('[data-menu-open]');
if (menu && openBtn) {
  const closeBtn = $('[data-menu-close]', menu);
  const focusables = () => $$('a, button', menu);
  const open = () => {
    menu.hidden = false;
    document.documentElement.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
    openBtn.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(() => {
      menu.classList.add('is-open');
      closeBtn.focus();
    });
  };
  const close = () => {
    menu.classList.remove('is-open');
    document.documentElement.classList.remove('menu-open');
    document.body.style.overflow = '';
    openBtn.setAttribute('aria-expanded', 'false');
    setTimeout(() => (menu.hidden = true), reduced ? 0 : 250);
    openBtn.focus();
  };
  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (menu.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'Tab') {
      const f = focusables();
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  $$('a', menu).forEach((a) => a.addEventListener('click', () => { if (a.getAttribute('href') === location.pathname) close(); }));
}

/* Apparitions et vitrines qui s'allument */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add(e.target.hasAttribute('data-light') ? 'is-lit' : 'is-in');
      if (e.target.hasAttribute('data-reveal')) e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  },
  { rootMargin: '0px 0px -12% 0px', threshold: 0.15 }
);
$$('[data-reveal], [data-light]').forEach((el) => io.observe(el));

/* Ouverture : les vitrines s'allument l'une après l'autre, comme à la tombée du jour */
const heroLights = $$('[data-hero-light]');
heroLights.forEach((el, i) => {
  setTimeout(() => el.classList.add('is-lit'), reduced ? 0 : 450 + i * 420);
});

/* Méthode : la lune se remplit à mesure qu'on avance dans les étapes */
const method = $('[data-method]');
if (method) {
  const big = $$('.methode__big .moon-phase', method);
  const steps = $$('[data-step]', method);
  const setActive = (i) => {
    big.forEach((m, k) => m.classList.toggle('is-active', k === i));
    steps.forEach((s, k) => s.classList.toggle('is-active', k <= i));
  };
  setActive(0);
  const so = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number(e.target.dataset.step))),
    { rootMargin: '-45% 0px -45% 0px' }
  );
  steps.forEach((s) => so.observe(s));
}

/* Barre d'appel mobile : visible après l'ouverture, masquée près de l'appel final */
const bar = $('[data-mobile-cta]');
if (bar) {
  const hero = $('[data-hero]') || $('.page-hero');
  const final = $('[data-final]') || $('.site-footer');
  let heroGone = false;
  let finalIn = false;
  const link = $('a', bar);
  const update = () => {
    const show = heroGone && !finalIn;
    bar.classList.toggle('is-visible', show);
    bar.setAttribute('aria-hidden', String(!show));
    link.tabIndex = show ? 0 : -1;
  };
  if (hero) new IntersectionObserver(([e]) => { heroGone = !e.isIntersecting; update(); }).observe(hero);
  if (final) new IntersectionObserver(([e]) => { finalIn = e.isIntersecting; update(); }).observe(final);
}

/* Pied de page : le poids réel de la page et son temps d'affichage */
const perf = $('[data-perf]');
if (perf && 'performance' in window) {
  const show = () => {
    const nav = performance.getEntriesByType('navigation')[0];
    if (!nav) return;
    const res = performance.getEntriesByType('resource').filter((r) => r.name.startsWith(location.origin));
    const bytes = [nav, ...res].reduce((t, r) => t + (r.transferSize || r.encodedBodySize || 0), 0);
    const time = (nav.domContentLoadedEventEnd || nav.responseEnd) / 1000;
    if (!bytes || !time) return;
    const kb = Math.max(1, Math.round(bytes / 1024));
    $('[data-perf-text]', perf).textContent = `Cette page : ${kb.toLocaleString('fr-FR')} Ko, affichée en ${time.toLocaleString('fr-FR', { maximumFractionDigits: 1 })} s`;
    perf.hidden = false;
  };
  if (document.readyState === 'complete') setTimeout(show, 300);
  else window.addEventListener('load', () => setTimeout(show, 300));
}

/* Formulaire de contact en quatre étapes */
const form = $('[data-contact-form]');
if (form) import('./form.js').then((m) => m.initForm(form));

/* Page merci : le prénom */
const thanks = $('[data-thanks-name]');
if (thanks) {
  const name = new URLSearchParams(location.search).get('prenom');
  if (name) thanks.textContent = ` ${name.slice(0, 40)}`;
}
