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

    // Project Popup Modal
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3 id="modal-title"></h3>
            <img id="modal-img" src="" alt="Project Image">
            <p id="modal-desc"></p>
        </div>
    `;
    document.body.appendChild(modal);

    const modalTitle = document.getElementById("modal-title");
    const modalImg = document.getElementById("modal-img");
    const modalDesc = document.getElementById("modal-desc");
    const closeModal = document.querySelector(".close");

    document.querySelectorAll(".work-item .btn").forEach((btn, index) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const project = btn.parentElement;
            modalTitle.innerText = project.querySelector("h3").innerText;
            modalImg.src = project.querySelector("img").src;
            modalDesc.innerText = project.querySelector("p").innerText;
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
// Hamburger Menu Toggle
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('active');
});

// Optional: Smooth Scroll behavior for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

