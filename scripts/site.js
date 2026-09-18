const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle?.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});

// Rankings was added after the original static site structure was generated.
// Insert it into legacy header/mobile/footer navigation automatically so all
// placeholder pages stay consistent without rewriting hundreds of HTML files.
document.querySelectorAll('nav a[href$="specials/index.html"]').forEach((specialsLink) => {
  const nav = specialsLink.parentElement;
  if (!nav || nav.querySelector('a[href*="rankings/index.html"]')) return;

  const rankingsLink = document.createElement('a');
  rankingsLink.textContent = 'Rankings';
  rankingsLink.href = specialsLink.getAttribute('href').replace('specials/index.html', 'rankings/index.html');
  specialsLink.insertAdjacentElement('afterend', rankingsLink);
});
