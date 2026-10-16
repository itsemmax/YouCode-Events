const menuButton = document.querySelector(".hamburger");
const navLinks = document.querySelector(".links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("hidden");
});