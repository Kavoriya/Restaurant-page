import createHomePage from "./homepage.js";
import createMenu from "./menu.js";
import createContacts from "./contacts.js";
import './style.css';
import './images/background.webp';
import './images/cafe.jpg';
import './images/carbonara-img.webp';
import './images/pizza-img.webp';


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

let contactsButton = document.getElementById('contacts');
contactsButton.addEventListener('click', () => {
   let content = document.getElementById('content');
   content.remove();
   createContacts();
})