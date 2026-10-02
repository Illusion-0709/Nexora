/* Nexora — Site interactions */

(function () {
  'use strict';

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header scroll state
  const header = document.getElementById('header');
  const onScroll = () => {
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open);
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth active nav highlighting (optional enhancement)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // Form handlers (placeholder — replace with real backend / form service)
  window.handleContactSubmit = function (e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const obj = Object.fromEntries(data.entries());
    console.log('Contact form submission (replace with real endpoint):', obj);
    alert('Thank you. Your enquiry has been received. We will be in touch shortly.\n\n(This is a demo — connect the form to your email service or CRM.)');
    form.reset();
    return false;
  };

  window.handleLeadSubmit = function (e) {
    e.preventDefault();
    const email = document.getElementById('leadEmail').value;
    console.log('Lead magnet request (replace with real endpoint):', email);
    alert('Thank you. The Parent’s Guide will be sent to ' + email + '.\n\n(This is a demo — connect to your email tool or delivery service.)');
    e.target.reset();
    return false;
  };

  // Replace WhatsApp number placeholders when ready
  // Update all links containing 971XXXXXXXXX with the real number
})();
