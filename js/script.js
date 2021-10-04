const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const menuCover = document.getElementById('mobileMenuCover');
const main = document.querySelector('.main');
const mobileItems = document.querySelectorAll('.mobileMenuItems');

function toggleMenu() {
  menuButton.style.display = 'none';
  menuCover.style.display = 'block';
  main.style.filter = 'blur(8px)';
}

function closeMenu() {
  menuCover.style.display = 'none';
  menuButton.style.display = 'flex';
  main.style.filter = 'blur(0px)';
}

mobileItems.forEach((element) => {
  element.addEventListener('click', closeMenu);
});

menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', closeMenu);
