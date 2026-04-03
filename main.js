/* ============================================================
   DENTIST WEBSITE TEMPLATE — main.js
   Minimal JavaScript — only for:
   1. Mobile nav toggle
   2. Smooth scroll active nav highlighting
   3. Contact form demo handler
   4. Footer year auto-update
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. MOBILE NAV TOGGLE
  ---------------------------------------------------------- */
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav   = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when a link is clicked
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav on outside click
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ----------------------------------------------------------
     2. ACTIVE NAV LINK ON SCROLL (Intersection Observer)
  ---------------------------------------------------------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks  = document.querySelectorAll('.main-nav a[href^="#"]');

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.removeAttribute('aria-current'));
          const active = document.querySelector(`.main-nav a[href="#${entry.target.id}"]`);
          if (active) active.setAttribute('aria-current', 'page');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  /* ----------------------------------------------------------
     3. CONTACT FORM — Demo handler
     (Replace this block with your actual form submission logic,
      e.g. Formspree, Netlify Forms, or a backend API)
  ---------------------------------------------------------- */
  const form       = document.getElementById('appointmentForm');
  const formStatus = document.getElementById('form-status');

  if (form && formStatus) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name  = document.getElementById('patientName').value.trim();
      const phone = document.getElementById('patientPhone').value.trim();

      // Basic validation
      if (!name || !phone) {
        formStatus.textContent = '⚠️ Please fill in your name and phone number.';
        formStatus.className = 'form-note error';
        return;
      }

      // Simulate form submission
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      setTimeout(() => {
        formStatus.textContent = '✅ Thank you! We will contact you shortly to confirm your appointment.';
        formStatus.className = 'form-note success';
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Request';
      }, 1200);
    });
  }

  /* ----------------------------------------------------------
     4. AUTO FOOTER YEAR
  ---------------------------------------------------------- */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ----------------------------------------------------------
     5. SMOOTH SCROLL FOR ANCHOR LINKS
     (Fallback for older browsers that don't support CSS scroll-behavior)
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = document.querySelector('.site-header')?.offsetHeight || 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});
