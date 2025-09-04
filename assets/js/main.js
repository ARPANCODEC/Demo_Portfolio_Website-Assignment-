// Year in footer
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// Dark mode toggle (Bootstrap 5.3 supports data-bs-theme)
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  const apply = (mode) => {
    root.setAttribute('data-theme', mode);
    root.setAttribute('data-bs-theme', mode);
    if (btn) {
      btn.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false');
      btn.textContent = mode === 'dark' ? '☀️ Light' : '🌙 Dark';
    }
  };
  apply(saved || 'light');
  btn?.addEventListener('click', () => {
    const next = (root.getAttribute('data-theme') === 'light') ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    apply(next);
  });
})();

// Carousel: keep autoplay OFF by default; allow opt-in
(function () {
  const root = document.getElementById('featuredCarousel');
  if (!root) return;
  const carousel = new bootstrap.Carousel(root, { interval: false, ride: false });
  const playBtn = root.parentElement.querySelector('[data-action="playpause"]');
  let playing = false;
  playBtn?.addEventListener('click', () => {
    if (playing) {
      carousel._config.interval = false;
      playing = false;
      playBtn.setAttribute('aria-pressed', 'false');
      playBtn.textContent = 'Start autoplay';
    } else {
      carousel._config.interval = 4000;
      playing = true;
      playBtn.setAttribute('aria-pressed', 'true');
      playBtn.textContent = 'Pause autoplay';
      carousel.cycle();
    }
  });
})();

// Bootstrap custom validation + char counter
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');
  const message = document.getElementById('message');
  const counter = document.getElementById('char-count');

  // Counter
  message?.addEventListener('input', () => {
    counter && (counter.textContent = `${message.value.length} / ${message.maxLength}`);
  });

  // Bootstrap validation pattern
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault(); e.stopPropagation();
      status && (status.textContent = 'Please fix the highlighted fields.');
    } else {
      e.preventDefault(); // demo only
      status && (status.textContent = 'Thanks! Your message was validated on the client.');
      form.reset();
      counter && (counter.textContent = `0 / ${message?.maxLength || 500}`);
    }
    form.classList.add('was-validated');
  }, false);
})();
