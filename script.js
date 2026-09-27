document.documentElement.classList.add('js-enabled');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('is-visible', entry.isIntersecting);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.project').forEach((el) => observer.observe(el));
