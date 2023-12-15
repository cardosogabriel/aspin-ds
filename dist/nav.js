const menu = document.getElementById("menu");
const closeButton= document.getElementById("close-button");
const hamburger= document.getElementById("hamburger");

function openMenu() {
  menu.classList.remove("hidden");
}

function closeMenu() {
  menu.classList.add("hidden");
}

hamburger.addEventListener("click", openMenu)
closeButton.addEventListener("click", closeMenu)