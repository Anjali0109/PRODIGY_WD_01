
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const nav = document.querySelector("nav ul");

    menuIcon.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            nav.classList.remove("active");
        });
    });
});
