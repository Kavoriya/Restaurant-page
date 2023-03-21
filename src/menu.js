import Carbonara from '../src/images/carbonara-img.webp';
import Pizza from '../src/images/pizza-img.webp';

function createMenu() {
   let dishes = [
      {
         name: 'Carbonara',
         description: 'A Roman pasta dish made with eggs, hard cheese, cured pork and black pepper.',
         price: '$5',
         image: Carbonara,
         alt: 'Tasty carbonara',
      },
      {
         name: 'Pizza',
         description: 'Delicious pizza. Ham, cheese, tomatoes, mushrooms, greens.',
         price: '$10',
         image: Pizza,
         alt: 'Tasty pizza',
      }
   ]

   let content = document.createElement('div');
   content.id = 'content';
   let h1 = document.createElement('h1');
   h1.textContent = 'Menu';
   content.append(h1);

   for (let i = 0; i < dishes.length; i++) {
      let itemDiv = document.createElement('div');
      itemDiv.classList.add('menu-item-outer');
      let h2 = document.createElement('h2');
      h2.textContent = dishes[i].name;
      let description = document.createElement('p');
      description.classList.add('item-description');
      description.textContent = dishes[i].description;
      let price = document.createElement('p');
      price.classList.add('item-price');
      price.textContent = dishes[i].price;
      let image = document.createElement('img');
      image.classList.add('item-img');
      image.src = dishes[i].image;
      image.setAttribute('alt', dishes[i].alt);
      itemDiv.append(h2, description, price, image);
      content.append(itemDiv);
   }

   let body = document.querySelector('body');
   body.append(content);
}

export default createMenu;