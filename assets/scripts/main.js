const navLinks = document.querySelectorAll(".nav-links");
const navMenu = document.getElementById("nav");
const closeMenuBtn = document.getElementById("x");
const openMenuBtn = document.getElementById("hamburger");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLinks.forEach((link) => {
      if (link !== navLink) {
        link.classList.remove("active");
      } else {
        navLink.classList.add("active");
      }
    });
  });
});

closeMenuBtn.addEventListener("click", () => {
  navMenu.style.right = "-250px";
});

openMenuBtn.addEventListener("click", () => {
  navMenu.style.right = "0";
});
