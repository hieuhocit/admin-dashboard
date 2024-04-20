const container = document.querySelector(".container");
const menu = document.querySelector(".sidebar h1");

menu.addEventListener("click", () => {
    container.classList.toggle("active");
})