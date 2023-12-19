// Fetch the sidebar content and inject it into the container
document.addEventListener("DOMContentLoaded", function() {
  var sidebarContainer = document.getElementById("sidebarContainer");

  // Fetch the sidebar.html content
  fetch("sidebar.html")
    .then(response => response.text())
    .then(data => {
      // Inject the sidebar content into the container
      sidebarContainer.innerHTML = data;
    })
    .catch(error => console.error("Error fetching sidebar:", error));
});

//Open and closes menu for mobile
// const menu = document.getElementById("menu");
// const closeButton= document.getElementById("close-button");
// const hamburger= document.getElementById("hamburger");

// function openMenu() {
//   menu.classList.remove("hidden");
// }

// function closeMenu() {
//   menu.classList.add("hidden");
// }

// hamburger.addEventListener("click", openMenu)
// closeButton.addEventListener("click", closeMenu)
