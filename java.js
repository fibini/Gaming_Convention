const hamburgericon = document.querySelector('.hamburger-button');
const navigationBar = document.querySelector('.menu-nav');

hamburgericon.addEventListener('click', () => {
  hamburgericon.classList.toggle('show');
  navigationBar.classList.toggle('show');
});

document.querySelectorAll('.menu-nav a').forEach((n) => n.addEventListener('click', () => {
  hamburgericon.classList.remove('show');
  navigationBar.classList.remove('show');
}));