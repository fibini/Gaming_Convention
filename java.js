const hamburgericon = document.querySelector('.hamburger-button');
const navigationBar = document.querySelector('.nav-bars');

hamburgericon.addEventListener('click', () => {
  hamburgericon.classList.toggle('show');
  navigationBar.classList.toggle('show');
});

document.querySelectorAll('.nav-bars a').forEach((n) => n.addEventListener('click', () => {
  hamburgericon.classList.remove('show');
  navigationBar.classList.remove('show');
}));