document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  toggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});

  // Toggle dropdown on click
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".has-dropdown .dropdown-nav-list");
  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault(); // prevent page jump
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  });