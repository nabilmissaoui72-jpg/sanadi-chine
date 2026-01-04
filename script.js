// Mobile nav toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

// Simple form handling to mimic basic interaction
const form = document.querySelector('.contact-form');
const successEl = document.querySelector('.form-success');

if (form && successEl) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const requiredFields = form.querySelectorAll('input[required], select[required]');
    let valid = true;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      } else {
        field.classList.remove('error');
      }
    });

    if (!valid) {
      successEl.textContent = '';
      return;
    }

    // Simulate successful submission
    successEl.textContent = 'Merci ! Votre candidature a bien été envoyée. Nous vous contacterons sous 24h.';
    form.reset();

    requiredFields.forEach(field => field.classList.remove('error'));
  });
}
