/* RESPONSIVE NAV */

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("open");
  navItems.forEach((item) => {
    item.classList.toggle("fade");
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("open");
    navItems.forEach((item) => {
      item.classList.remove("fade");
    });
  });
});


ScrollReveal({
  rest: true,
  distance: '50px',
  duration: 2400,
  delay: 600
});

ScrollReveal().reveal('.text', { delay: 500, origin:"left"});
ScrollReveal().reveal('.btn', { delay: 500, origin:"left"});
ScrollReveal().reveal('.about-me-img', { delay: 500, origin:"left"});
ScrollReveal().reveal('.about-me-content', { delay: 500, origin:"right"});
