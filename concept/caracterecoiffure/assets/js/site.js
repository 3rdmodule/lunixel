/* ============================================================
   Caractère Coiffure
   Trois choses, pas une de plus :
   1. horaires vivants  : jour du jour surligné, ouvert ou fermé maintenant
   2. galerie           : défilement par flèches, jamais par la molette
   3. contenus tiers    : rien ne se charge avant un clic
   Aucune bibliothèque, aucun détournement du scroll.
   ============================================================ */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. horaires ---------- */
  var OPEN_H = 9, CLOSE_H = 17;          // du lundi au samedi
  var DAYS = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];

  function parisNow() {
    // Heure du salon, quel que soit le fuseau du visiteur.
    var f = new Intl.DateTimeFormat('fr-FR', {
      timeZone: 'Europe/Paris', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false
    });
    var p = {};
    f.formatToParts(new Date()).forEach(function (x) { p[x.type] = x.value; });
    var map = { dim: 0, lun: 1, mar: 2, mer: 3, jeu: 4, ven: 5, sam: 6 };
    var key = (p.weekday || '').toLowerCase().slice(0, 3);
    return {
      day: map[key],
      minutes: parseInt(p.hour, 10) * 60 + parseInt(p.minute, 10)
    };
  }

  function nextOpenDay(day) {
    for (var i = 1; i <= 7; i++) { var d = (day + i) % 7; if (d !== 0) return d; }
    return 1;
  }

  function updateHours() {
    var now = parisNow();
    if (typeof now.day !== 'number' || isNaN(now.minutes)) return;

    var open = now.day !== 0 && now.minutes >= OPEN_H * 60 && now.minutes < CLOSE_H * 60;
    var dot = document.getElementById('js-dot');
    var label = document.getElementById('js-status');
    var sub = document.getElementById('js-status-sub');
    if (!label) return;

    document.querySelector('.statusbar').classList.add('is-live');
    dot.className = 'dot ' + (open ? 'is-open' : 'is-closed');

    if (open) {
      label.textContent = 'Ouvert maintenant';
      var left = CLOSE_H * 60 - now.minutes;
      sub.textContent = left <= 60
        ? 'Fermeture dans ' + left + ' minutes'
        : 'Jusqu’à ' + CLOSE_H + 'h aujourd’hui';
    } else {
      label.textContent = 'Fermé maintenant';
      if (now.day !== 0 && now.minutes < OPEN_H * 60) {
        sub.textContent = 'Ouvre aujourd’hui à ' + OPEN_H + 'h';
      } else {
        var nd = nextOpenDay(now.day);
        var word = (nd === (now.day + 1) % 7) ? 'demain' : DAYS[nd];
        sub.textContent = 'Ouvre ' + word + ' à ' + OPEN_H + 'h';
      }
    }

    var week = document.getElementById('js-week');
    if (week) {
      Array.prototype.forEach.call(week.children, function (li) {
        var isToday = parseInt(li.getAttribute('data-day'), 10) === now.day;
        li.classList.toggle('is-today', isToday);
        var tag = li.querySelector('.today-tag');
        if (isToday && !tag) {
          tag = document.createElement('span');
          tag.className = 'today-tag';
          tag.textContent = 'aujourd’hui';
          li.querySelector('.dname').appendChild(tag);
        } else if (!isToday && tag) {
          tag.parentNode.removeChild(tag);
        }
      });
    }
  }
  updateHours();
  setInterval(updateHours, 60000);

  /* ---------- 2. galerie, flèches uniquement ---------- */
  var slider = document.querySelector('[data-slider]');
  if (slider) {
    var track = slider.querySelector('[data-track]');
    var prev = slider.querySelector('[data-prev]');
    var next = slider.querySelector('[data-next]');
    var count = slider.querySelector('[data-count]');
    var slides = track.children;

    function step() {
      return slides[0] ? slides[0].getBoundingClientRect().width + 20 : 400;
    }
    function index() {
      return Math.round(track.scrollLeft / step());
    }
    function go(dir) {
      track.scrollBy({ left: dir * step(), behavior: reduce ? 'auto' : 'smooth' });
    }
    function sync() {
      var i = Math.min(slides.length - 1, Math.max(0, index()));
      if (count) count.textContent = (i + 1) + ' / ' + slides.length;
      var max = track.scrollWidth - track.clientWidth - 2;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max;
    }
    prev.addEventListener('click', function () { go(-1); });
    next.addEventListener('click', function () { go(1); });
    track.addEventListener('scroll', function () {
      window.clearTimeout(track._t);
      track._t = window.setTimeout(sync, 90);
    }, { passive: true });
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    });
    window.addEventListener('resize', sync);
    sync();
  }

  /* ---------- 3. contenus tiers sous consentement ---------- */
  var sources = {
    /* Compte Cal.com à remplacer par celui du salon. */
    cal: { src: 'https://cal.com/lunixel?embed=true', title: 'Calendrier de rendez-vous Caractère Coiffure' },
    map: { src: 'https://www.google.com/maps?q=43.4345022,6.8706645&hl=fr&z=16&output=embed', title: 'Plan d’accès au salon Caractère Coiffure' }
  };
  Array.prototype.forEach.call(document.querySelectorAll('[data-embed]'), function (btn) {
    btn.addEventListener('click', function () {
      var cfg = sources[btn.getAttribute('data-embed')];
      if (!cfg) return;
      var box = btn.closest('.embed');
      var f = document.createElement('iframe');
      f.src = cfg.src;
      f.title = cfg.title;
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      box.innerHTML = '';
      box.classList.add('is-loaded');
      box.appendChild(f);
    });
  });

  /* ---------- apparition discrète au défilement ---------- */
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) { io.observe(el); });
  } else {
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) { el.classList.add('in'); });
  }
})();
