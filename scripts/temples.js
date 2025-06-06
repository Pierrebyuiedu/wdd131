document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Footer year and last modified
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");

  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  lastModifiedSpan.textContent = document.lastModified;

  // Hamburger menu toggle
  const menuButton = document.getElementById("menuBtn");
  const navMenu = document.getElementById("primaryNav");

  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    // Change hamburger icon to X and vice versa
    const isOpen = navMenu.classList.contains("open");
    menuButton.innerHTML = isOpen ? "&#10005;" : "&#9776;";
  });
});
