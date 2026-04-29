/* RemitSo — main.js | global nav + mobile menu + scroll animations */

(function () {
  'use strict';

  /* ── Nav scroll class ───────────────────────────────────────────────── */
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* ── Mobile menu ────────────────────────────────────────────────────── */
  var mobileMenuBtn   = document.getElementById('mobileMenuBtn');
  var mobileMenu      = document.getElementById('mobileMenu');
  var mobileMenuClose = document.getElementById('mobileMenuClose');

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn)   mobileMenuBtn.addEventListener('click', openMenu);
  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMenu);

  /* Close on overlay click */
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function (e) {
      if (e.target === mobileMenu) closeMenu();
    });
  }

  /* ── Scroll-reveal (.sr elements) ──────────────────────────────────── */
  if ('IntersectionObserver' in window) {
    var srObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('sr-visible');
          srObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.sr').forEach(function (el) {
      srObserver.observe(el);
    });
  } else {
    /* Fallback: show all immediately */
    document.querySelectorAll('.sr').forEach(function (el) {
      el.classList.add('sr-visible');
    });
  }

})();
