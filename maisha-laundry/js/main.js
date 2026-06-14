/* ============================================================
   MAISHA LAUNDRY — main.js
   Handles: dark mode toggle, navbar scroll, hamburger menu,
            active nav link, scroll-reveal, FAQ accordion,
            hero carousel, price estimator, form submission,
            animated counters.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ============================================================
     1. DARK MODE TOGGLE
     ============================================================ */
  function applyThemeIcon() {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('.dark-toggle').forEach(btn => {
      btn.textContent = dark ? '☀️' : '🌙';
      btn.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }
  applyThemeIcon(); // set icon on load

  document.querySelectorAll('.dark-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const dark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (dark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('maisha-theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('maisha-theme', 'dark');
      }
      applyThemeIcon();
    });
  });

  /* ============================================================
     2. NAVBAR SCROLL SHADOW
     ============================================================ */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // check on load
  }

  /* ============================================================
     3. HAMBURGER / MOBILE MENU
     ============================================================ */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });
    // Close when a link is tapped
    mobileNav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      })
    );
    // Close when clicking outside
    document.addEventListener('click', e => {
      if (!navbar.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ============================================================
     4. ACTIVE NAV LINK (highlights current page)
     ============================================================ */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });

  /* ============================================================
     5. SCROLL REVEAL ANIMATION
     ============================================================ */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => io.observe(el));
  }

  /* ============================================================
     6. FAQ ACCORDION
     ============================================================ */
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      // Toggle clicked one
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ============================================================
     7. SMOOTH SCROLL for in-page anchors
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // nav height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ============================================================
     8. HERO CAROUSEL (index.html only)
     ============================================================ */
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  if (slides.length) {
    let cur = 0;
    const goTo = i => {
      slides[cur].classList.remove('active');
      dots[cur]?.classList.remove('active');
      cur = (i + slides.length) % slides.length;
      slides[cur].classList.add('active');
      dots[cur]?.classList.add('active');
    };
    goTo(0);
    setInterval(() => goTo(cur + 1), 5000);
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
  }

  /* ============================================================
     9. LIVE PRICE ESTIMATOR (booking form)
     ============================================================ */
  const weightEl  = document.getElementById('estimatedWeight');
  const serviceEl = document.getElementById('serviceType');
  const priceEl   = document.getElementById('estimatedPrice');
  if (weightEl && serviceEl && priceEl) {
    const calc = () => {
      const svc = serviceEl.value;
      const kg  = parseFloat(weightEl.value) || 0;
      let msg   = '';
      if (svc === 'wash-fold' && kg > 0) {
        msg = `Estimated: UGX ${(kg * 4000).toLocaleString()}/= (intro price) or ${(kg * 7000).toLocaleString()}/= (regular)`;
      } else if (svc === 'basket-wash') {
        msg = 'Flat rate: UGX 30,000/= per basket (up to 5 kg)';
      } else if (svc === 'shoe-cleaning') {
        msg = 'Sneakers: 5,000–10,000/=  •  Formal: 8,000–15,000/= per pair';
      } else if (svc === 'ironing') {
        msg = 'Priced per item — WhatsApp us for a quick quote!';
      } else if (svc === 'dry-cleaning') {
        msg = 'Quote based on garment type — call or WhatsApp us.';
      } else if (svc === 'carpet-cleaning') {
        msg = 'Quote based on carpet size — call or WhatsApp us.';
      } else if (svc === 'suit-cleaning') {
        msg = 'Per item pricing — WhatsApp us for exact price.';
      } else if (svc === 'traditional') {
        msg = 'Per item pricing — WhatsApp us for exact price.';
      }
      priceEl.textContent = msg;
    };
    weightEl.addEventListener('input', calc);
    serviceEl.addEventListener('change', calc);
  }

  /* ============================================================
     10. FORM SUBMISSION via Formspree
         Email: maishadrycleaners@gmail.com
         Steps:
           a) Sign up free at https://formspree.io
           b) Create a new form, set notification email to
              maishadrycleaners@gmail.com
           c) Copy your form ID (e.g. xdkopqrz)
           d) Replace YOUR_FORM_ID in each <form action="...">
              The form handler here picks up the action attribute.
     ============================================================ */
  document.querySelectorAll('.maisha-form').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn  = form.querySelector('[type="submit"]');
      const orig = btn.innerHTML;
      btn.innerHTML = '⏳ Sending…';
      btn.disabled  = true;

      try {
        const res = await fetch(form.action, {
          method:  'POST',
          body:    new FormData(form),
          headers: { Accept: 'application/json' }
        });

        if (res.ok) {
          // Success — replace form with friendly message
          form.innerHTML = `
            <div style="text-align:center;padding:56px 24px;">
              <div style="font-size:3.5rem;margin-bottom:16px;">✅</div>
              <h3 style="color:var(--blue-vivid);margin-bottom:12px;">Thank you! Message received.</h3>
              <p style="color:var(--text-secondary);max-width:380px;margin:0 auto 24px;line-height:1.7;">
                Our team will contact you shortly on your phone number.
                You can also reach us directly on WhatsApp.
              </p>
              <a href="https://wa.me/256780603561" target="_blank" rel="noopener"
                 class="btn btn-whatsapp">💬 Chat on WhatsApp: 0780 603561</a>
            </div>`;
        } else {
          throw new Error('Server error');
        }
      } catch {
        // Fallback — send via WhatsApp pre-filled message
        btn.innerHTML = orig;
        btn.disabled  = false;

        const name  = encodeURIComponent(form.querySelector('[name="name"]')?.value   || '');
        const phone = encodeURIComponent(form.querySelector('[name="phone"]')?.value  || '');
        const svc   = encodeURIComponent(form.querySelector('[name="service"]')?.value|| '');
        const addr  = encodeURIComponent(form.querySelector('[name="address"]')?.value|| '');
        const msg   = encodeURIComponent(form.querySelector('[name="message"]')?.value|| '');

        window.open(
          `https://wa.me/256780603561?text=Hello%20Maisha!%0AName:%20${name}%0APhone:%20${phone}%0AService:%20${svc}%0AAddress:%20${addr}%0AMessage:%20${msg}`,
          '_blank'
        );

        // Show gentle error
        const err = document.createElement('p');
        err.style.cssText = 'color:#e55a26;font-size:0.85rem;margin-top:12px;text-align:center;';
        err.textContent = "Couldn't send via the form. We've opened WhatsApp for you instead!";
        btn.parentNode.appendChild(err);
      }
    });
  });

  /* ============================================================
     11. ANIMATED COUNTERS (stats bar)
     ============================================================ */
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    const countIO = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('[data-count]').forEach(el => {
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          let n = 0;
          const step = Math.max(1, Math.ceil(target / 60));
          const t = setInterval(() => {
            n = Math.min(n + step, target);
            el.textContent = n.toLocaleString() + suffix;
            if (n >= target) clearInterval(t);
          }, 28);
        });
        countIO.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    countIO.observe(statsBar);
  }

}); // end DOMContentLoaded
