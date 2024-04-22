document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
  
    burger.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });
  
    // Close the menu when clicking outside of it
    document.addEventListener('click', function (event) {
      if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
        navLinks.classList.remove('show');
      }
    });
  
    // Close the menu when clicking on a menu item
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(function (item) {
      item.addEventListener('click', function () {
        navLinks.classList.remove('show');
      });
    });
  
    // Close the menu when resizing the window
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
      }
    });
  
    // Close the menu when scrolling on mobile
    window.addEventListener('scroll', function () {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('show');
      }
    });
  });
  