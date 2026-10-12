/* ============================================================
   Caractère Coiffure - animations
   Trois intentions, pas de mouvement décoratif :
   1. hiérarchie   : le rideau puis la cascade du hero disent où regarder
   2. récit        : les prestations longues défilent latéralement,
                     le bandeau rappelle ce que fait le salon
   3. retour       : survols et progression du défilement horizontal
   Tout est coupé par prefers-reduced-motion.
   ============================================================ */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGsap = typeof window.gsap !== 'undefined';

  /* ---------- consentement des contenus tiers ---------- */
  var sources = {
    /* Compte Cal.com Lunixel en attendant celui d'Elda.
       Les prestations du salon doivent y être créées. */
    cal: { src: 'https://cal.com/lunixel?embed=true', title: 'Calendrier de rendez-vous Caractère Coiffure' },
    map: { src: 'https://www.google.com/maps?q=43.4345022,6.8706645&hl=fr&z=16&output=embed', title: "Plan d'accès au salon Caractère Coiffure" }
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
      box.style.padding = '0';
      box.appendChild(f);
    });
  });

  /* ---------- barre haute : fond encre au-dessus des sections sombres ---------- */
  var topbar = document.querySelector('.topbar');
  var inkZones = document.querySelectorAll('[data-ink]');

  function syncTopbar() {
    var y = topbar.getBoundingClientRect().height * 0.6;
    var over = false;
    Array.prototype.forEach.call(inkZones, function (z) {
      var r = z.getBoundingClientRect();
      if (r.top <= y && r.bottom >= y) over = true;
    });
    topbar.classList.toggle('on-ink', over);
    topbar.classList.toggle('is-stuck', window.scrollY > 10 && !over);
  }

  /* ---------- fin du rideau ---------- */
  function openCurtain(after) {
    var curtain = document.getElementById('curtain');
    if (reduce || !hasGsap || !curtain) {
      document.body.classList.add('ready');
      if (after) after();
      return;
    }
    var tl = window.gsap.timeline({
      onComplete: function () {
        document.body.classList.add('ready');
        if (after) after();
      }
    });
    tl.to('#curtain .c-mark', { opacity: 1, y: 0, duration: .7, ease: 'power2.out' }, 0)
      .to('#curtain .c-sub', { opacity: 1, duration: .6, ease: 'power2.out' }, .22)
      .to('#curtain', { yPercent: -100, duration: .9, ease: 'power3.inOut' }, 1.05);
  }

  /* ---------- sans GSAP ou en mouvement réduit : tout est visible ---------- */
  if (reduce || !hasGsap) {
    document.body.classList.add('ready');
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) {
      el.style.opacity = 1;
    });
    window.addEventListener('scroll', syncTopbar, { passive: true });
    syncTopbar();
    return;
  }

  var gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger, window.SplitText);
  var ST = window.ScrollTrigger;

  /* ---------- défilement fluide, branché sur ScrollTrigger ---------- */
  var lenis = null;
  if (typeof window.Lenis !== 'undefined' && window.innerWidth > 820) {
    lenis = new window.Lenis({ duration: 1.05, smoothWheel: true, touchMultiplier: 1.6 });
    lenis.on('scroll', ST.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }
  /* barre haute : piloté par ScrollTrigger, pas par un écouteur de scroll */
  var headH = topbar.getBoundingClientRect().height;
  var inkCount = 0;
  Array.prototype.forEach.call(inkZones, function (zone) {
    ST.create({
      trigger: zone,
      start: 'top ' + (headH * 0.6) + 'px',
      end: 'bottom ' + (headH * 0.6) + 'px',
      onToggle: function (self) {
        inkCount += self.isActive ? 1 : -1;
        if (inkCount < 0) inkCount = 0;
        topbar.classList.toggle('on-ink', inkCount > 0);
      }
    });
  });
  ST.create({
    start: 'top -10',
    onUpdate: function (self) {
      topbar.classList.toggle('is-stuck', self.scroll() > 10 && inkCount === 0);
    }
  });

  /* ---------- hero : titre ligne par ligne, photo dézoomée ---------- */
  function heroIn() {
    var h1 = document.querySelector('.hero h1');
    var tl = gsap.timeline();

    if (h1 && window.SplitText) {
      var split = new window.SplitText(h1, { type: 'lines', linesClass: 'line-mask' });
      gsap.set(split.lines, { overflow: 'hidden' });
      var inner = split.lines.map(function (l) {
        var s = document.createElement('span');
        s.style.display = 'block';
        while (l.firstChild) s.appendChild(l.firstChild);
        l.appendChild(s);
        return s;
      });
      tl.from(inner, { yPercent: 115, duration: .95, ease: 'power3.out', stagger: .085 }, 0);
    }

    tl.to('.hero .eyebrow.reveal', { opacity: 1, duration: .7, ease: 'power2.out' }, .05)
      .to('.hero .hero-body.reveal', { opacity: 1, duration: .85, ease: 'power3.out' }, .45)
      .from('.hero .hero-body.reveal', { y: 22, duration: .85, ease: 'power3.out' }, .45)
      .to('.hero .frame .shot img', { scale: 1, duration: 1.5, ease: 'power3.out' }, .15);

    // le filet bronze se tire sous le bloc d'ancienneté
    var meta = document.querySelector('.hero-meta');
    if (meta) {
      gsap.to({ p: 0 }, {
        p: 1, duration: .9, delay: .95, ease: 'power2.inOut',
        onUpdate: function () {
          meta.style.setProperty('--draw', Math.round(this.targets()[0].p * 100) + '%');
        }
      });
    }

    // parallaxe douce de la photo du hero
    gsap.to('.hero .frame .shot img', {
      yPercent: 7, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
  }

  /* ---------- révélations au scroll ---------- */
  function reveals() {
    Array.prototype.forEach.call(document.querySelectorAll('.reveal:not(.hero .reveal)'), function (el) {
      if (el.closest('.hero')) return;
      gsap.fromTo(el, { opacity: 0, y: 26 }, {
        opacity: 1, y: 0, duration: .85, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 86%', once: true }
      });
    });

    // lignes de tarif : cascade par groupe
    Array.prototype.forEach.call(document.querySelectorAll('.price'), function (ul) {
      gsap.fromTo(ul.children, { opacity: 0, y: 14 }, {
        opacity: 1, y: 0, duration: .55, ease: 'power2.out', stagger: .05,
        scrollTrigger: { trigger: ul, start: 'top 88%', once: true }
      });
    });

    // horaires
    gsap.fromTo('.hours li', { opacity: 0, x: 18 }, {
      opacity: 1, x: 0, duration: .5, ease: 'power2.out', stagger: .055,
      scrollTrigger: { trigger: '.hours', start: 'top 85%', once: true }
    });

    // photos : dézoom à l'entrée dans le cadre
    Array.prototype.forEach.call(document.querySelectorAll('.gal .shot img'), function (img) {
      gsap.to(img, {
        scale: 1, duration: 1.25, ease: 'power3.out',
        scrollTrigger: { trigger: img, start: 'top 90%', once: true }
      });
      gsap.to(img, {
        yPercent: 6, ease: 'none',
        scrollTrigger: { trigger: img.closest('figure'), start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });
  }

  /* ---------- bandeau défilant, vitesse liée au scroll ---------- */
  function marquee() {
    var track = document.querySelector('.marquee-track');
    if (!track) return;
    var half = track.scrollWidth / 2;
    var x = gsap.quickSetter(track, 'x', 'px');
    var pos = 0, dir = 1;
    gsap.ticker.add(function () {
      pos -= 0.55 * dir;
      if (pos <= -half) pos += half;
      if (pos > 0) pos -= half;
      x(pos);
    });
    ST.create({
      trigger: '.marquee', start: 'top bottom', end: 'bottom top',
      onUpdate: function (self) { dir = self.direction; }
    });
  }

  /* ---------- prestations longues : panoramique horizontal ---------- */
  function pan() {
    var wrap = document.querySelector('.pan');
    var track = document.querySelector('.pan-track');
    var fill = document.querySelector('.pan-hint .bar i');
    if (!wrap || !track || window.innerWidth < 900) return;

    var distance = track.scrollWidth - window.innerWidth + 40;
    if (distance <= 0) return;

    gsap.to(track, {
      x: -distance, ease: 'none',
      scrollTrigger: {
        trigger: wrap,
        start: 'top top',
        end: function () { return '+=' + distance; },
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: function (self) {
          if (fill) fill.style.width = (28 + self.progress * 72) + '%';
        }
      }
    });
  }

  openCurtain(function () {
    heroIn();
    reveals();
    marquee();
    pan();
    ST.refresh();
  });
})();
