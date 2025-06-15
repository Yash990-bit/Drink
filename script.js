  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
      });
    }

    document.querySelectorAll('#navLinks a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });

    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const moreText = document.getElementById('moreText');

    if (learnMoreBtn && moreText) {
      learnMoreBtn.addEventListener('click', () => {
        moreText.classList.toggle('hidden');
        learnMoreBtn.textContent = moreText.classList.contains('hidden') ? 'Learn More' : 'Show Less';
      });
    }

    document.querySelectorAll('.overlay-content p').forEach(p => {
      p.addEventListener('click', () => {
        const price = p.nextElementSibling;
        if (price && price.classList.contains('price')) {
          price.classList.toggle('hidden');
        }
      });
    });
  });

