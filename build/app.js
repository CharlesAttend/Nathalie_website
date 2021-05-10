const nav = document.querySelector("#navMobileMenu");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("hidden");
});