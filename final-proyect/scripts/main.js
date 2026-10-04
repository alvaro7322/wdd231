const menuToggle = document.getElementById('menu-toggle');
const primaryNav = document.getElementById('primary-nav');

menuToggle.addEventListener('click', () => {
  primaryNav.classList.toggle('open');
  menuToggle.textContent = primaryNav.classList.contains('open') ? '✕' : '☰';
});

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;
