const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.getElementById('nav_bar');

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent bubbling
  navBar.classList.toggle('show');
  menuToggle.classList.toggle('hide'); // hide hamburger when menu is open
});

// close menu when clicking outside
document.addEventListener('click', (e) => {
  const isClickInsideNav = navBar.contains(e.target);
  const isClickOnToggle = menuToggle.contains(e.target);

  if (navBar.classList.contains('show') && !isClickInsideNav && !isClickOnToggle) {
    navBar.classList.remove('show');
    menuToggle.classList.remove('hide'); // show hamburger again
  }
});