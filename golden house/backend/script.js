function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      ['ctaPhone', 'ctaEmail', 'ctaAddress'].forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        setTimeout(() => {
          el.classList.remove('pulse');
          void el.offsetWidth;
          el.classList.add('pulse');
        }, i * 150);
      });
    }, 750);
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));