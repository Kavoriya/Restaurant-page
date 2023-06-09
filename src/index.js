import createHomePage from "./homepage.js";
import createMenu from "./menu.js";
import createContacts from "./contacts.js";
import './style.css';

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