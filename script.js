document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Toggle
    const nav = document.querySelector("nav ul");
    const toggleMenu = document.createElement("div");
    toggleMenu.innerHTML = "&#9776;"; // Hamburger icon
    toggleMenu.style.fontSize = "30px";
    toggleMenu.style.cursor = "pointer";
    toggleMenu.style.color = "#fff";
    toggleMenu.style.display = "none";
    document.querySelector("nav").prepend(toggleMenu);

    toggleMenu.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth <= 768) {
            toggleMenu.style.display = "block";
            nav.style.display = "none";
        } else {
            toggleMenu.style.display = "none";
            nav.style.display = "flex";
        }
    });
});

