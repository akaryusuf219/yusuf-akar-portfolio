/* ============================================================
   YUSUF AKAR PORTFOLIO — main.js
   Tüm interaktif özellikler, animasyonlar ve işlevler
   ============================================================ */

'use strict';

/* ——— DOM Helpers ——— */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ============================================================
   1. LOADER
   ============================================================ */
(function initLoader() {
  const loader = $('#loader');
  const progress = $('#loader-progress');
  let pct = 0;

  const tick = setInterval(() => {
    pct += Math.random() * 18 + 5;
    if (pct >= 100) {
      pct = 100;
      clearInterval(tick);
      progress.style.width = '100%';
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
        triggerHeroAnimations();
      }, 400);
    }
    progress.style.width = pct + '%';
  }, 90);

  document.body.style.overflow = 'hidden';
})();

function triggerHeroAnimations() {
  // Skill bars animate when in view — handled by IntersectionObserver below
}

/* ============================================================
   2. CUSTOM CURSOR
   ============================================================ */
(function initCursor() {
  const cursor   = $('#cursor');
  const follower = $('#cursor-follower');
  if (!cursor || !follower) return;

  let mx = -100, my = -100, fx = -100, fy = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function followLoop() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    requestAnimationFrame(followLoop);
  })();

  // Hover effect on interactive elements
  $$('a, button, input, textarea, select, .project-card, .about-card, .contact-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      follower.style.width  = '56px';
      follower.style.height = '56px';
      follower.style.opacity = '0.3';
    });
    el.addEventListener('mouseleave', () => {
      follower.style.width  = '36px';
      follower.style.height = '36px';
      follower.style.opacity = '0.5';
    });
  });
})();

/* ============================================================
   3. PARTICLES BACKGROUND
   ============================================================ */
(function initParticles() {
  const canvas = $('#particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const PARTICLE_COUNT = 65;
  const CONNECT_DIST   = 140;
  const particles = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * canvas.width;
      this.y  = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.r  = Math.random() * 1.8 + 0.6;
      this.alpha = Math.random() * 0.5 + 0.15;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width)  this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height)  this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(108,99,255,${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(108,99,255,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ============================================================
   4. NAVBAR SCROLL + ACTIVE LINK
   ============================================================ */
(function initNavbar() {
  const navbar  = $('#navbar');
  const navLinks = $$('.nav-link');
  const sections = $$('section[id]');
  const toggle  = $('#nav-toggle');
  const navList = $('#nav-links');

  window.addEventListener('scroll', () => {
    // Scroll state
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    // Active section highlight
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }, { passive: true });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navList.classList.toggle('open');
  });

  // Close on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      navList.classList.remove('open');
    });
  });
})();

/* ============================================================
   5. TYPEWRITER
   ============================================================ */
(function initTypewriter() {
  const el = $('#typewriter');
  if (!el) return;

  const texts = [
    'Web Geliştirici 🌐',
    'Yazılım Öğrencisi 💻',
    'Teknoloji Tutkunu 🚀',
    'Staj Arıyor 🎯',
    'Problem Çözücü 🧠',
  ];
  let ti = 0, ci = 0, deleting = false;

  function type() {
    const current = texts[ti];
    if (!deleting) {
      el.textContent = current.slice(0, ++ci);
      if (ci === current.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = current.slice(0, --ci);
      if (ci === 0) { deleting = false; ti = (ti + 1) % texts.length; setTimeout(type, 300); return; }
    }
    setTimeout(type, deleting ? 45 : 80);
  }
  setTimeout(type, 1800);
})();

/* ============================================================
   6. SCROLL REVEAL
   ============================================================ */
(function initReveal() {
  const items = $$('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => observer.observe(el));
})();

/* ============================================================
   7. SKILL BARS ANIMATION
   ============================================================ */
(function initSkillBars() {
  const bars = $$('.skill-fill');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('animated'), 200);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(bar => observer.observe(bar));
})();

/* ============================================================
   8. COUNTER ANIMATION (Hero Stats)
   ============================================================ */
(function initCounters() {
  const counters = $$('[data-target]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = parseInt(el.dataset.target, 10);
      const step   = Math.ceil(target / 40);
      let current  = 0;
      const tick = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(tick); }
        el.textContent = current;
      }, 40);
      observer.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(el => observer.observe(el));
})();

/* ============================================================
   9. CONTACT FORM
   ============================================================ */
(function initContactForm() {
  const form    = $('#contact-form');
  const success = $('#form-success');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"] span');
    const origText = btn.textContent;
    btn.textContent = 'Gönderiliyor...';

    // Simulate send (replace with real backend / EmailJS / Formspree)
    setTimeout(() => {
      btn.textContent = origText;
      success.classList.add('show');
      form.reset();
      setTimeout(() => success.classList.remove('show'), 5000);
    }, 1200);
  });
})();

/* ============================================================
   10. SCROLL TO TOP on logo click
   ============================================================ */
(function initScrollTop() {
  const brand = document.querySelector('.nav-brand');
  if (brand) {
    brand.style.cursor = 'pointer';
    brand.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
})();

/* ============================================================
   11. AVATAR PARALLAX (subtle on mousemove)
   ============================================================ */
(function initAvatarParallax() {
  const wrapper = $('.avatar-wrapper');
  if (!wrapper) return;
  document.addEventListener('mousemove', e => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    wrapper.style.transform = `translate(${dx * 8}px, ${dy * 8}px)`;
  });
})();

/* ============================================================
   12. SCROLL INDICATOR CLICK
   ============================================================ */
(function initScrollIndicator() {
  const el = $('#scroll-indicator');
  if (el) el.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });
})();
