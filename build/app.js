const nav = document.querySelector("#navMobileMenu");
const hamburger = document.querySelector("#hamburger");

const clip = document.querySelectorAll("#clip")

hamburger.addEventListener("click", () => {
    nav.classList.toggle("hidden");
});

clip.forEach( (button) => {
    button.addEventListener("click", () => {
        const clip = button.parentElement.querySelector("a").innerText;
        const icon = button.firstElementChild
        navigator.clipboard.writeText(clip).then(() => {
            icon.classList.value = "fas fa-clipboard-check";
          }, () => {
            icon.classList.value = "fas fa-times text-red-600";
          });
    })
});