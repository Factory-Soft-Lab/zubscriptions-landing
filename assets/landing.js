// Zubscriptions — portada: tema claro/oscuro y aparición al scroll.
(function () {
  var root = document.documentElement;
  var KEY = 'zub-theme';

  function systemIsLight() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  }
  function currentIsLight() {
    if (root.classList.contains('light')) return true;
    if (root.classList.contains('dark')) return false;
    return systemIsLight();
  }

  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    var sync = function () { toggle.setAttribute('aria-pressed', String(currentIsLight())); };
    sync();
    toggle.addEventListener('click', function () {
      var next = currentIsLight() ? 'dark' : 'light';
      root.classList.remove('light', 'dark');
      root.classList.add(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      sync();
    });
  }

  var items = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();
