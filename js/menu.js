const menuButton = document.querySelector(".menu");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("is-open");
});