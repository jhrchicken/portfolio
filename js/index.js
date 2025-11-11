document.addEventListener('DOMContentLoaded', function() {
  includeHTML('zipmin', '../portfolio/zipmin.html');
  includeHTML('doctorview', '../portfolio/doctorview.html');
});

async function includeHTML(selector, file) {
  const element = document.getElementById(selector);
  const response = await fetch(file);
  element.innerHTML = await response.text();
}

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
      current = 'contact';
    }

    if (scrollY < 100) {
      current = 'home';
    }

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      if (href === '#home') {
        e.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    });
  });
})