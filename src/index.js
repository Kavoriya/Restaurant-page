import createHomePage from "./homepage.js";
import createMenu from "./menu.js";

createHomePage();

let homeButton = document.getElementById('home');
homeButton.addEventListener('click', () => {
   let content = document.getElementById('content');
   content.remove();
   createHomePage();
});

let menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => {
   let content = document.getElementById('content');
   content.remove();
   createMenu();
})