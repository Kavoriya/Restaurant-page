(()=>{"use strict";!function(){let e=[{name:"Carbonara",description:"A Roman pasta dish made with eggs, hard cheese, cured pork and black pepper.",price:"$5",image:"../src/carbonara-img.jpeg",alt:"Tasty carbonara"},{name:"Pizza",description:"Delicious pizza. Ham, cheese, tomatoes, mushrooms, greens.",price:"$10",image:"../src/pizza-img.jpg",alt:"Tasty pizza"}],t=document.createElement("div");t.id="content";let a=document.createElement("h1");a.textContent="Menu",t.append(a);for(let a=0;a<e.length;a++){let n=document.createElement("div");n.classList.add("menu-item-outer");let c=document.createElement("h2");c.textContent=e[a].name;let i=document.createElement("p");i.classList.add("item-description"),i.textContent=e[a].description;let m=document.createElement("p");m.classList.add("item-price"),m.textContent=e[a].price;let r=document.createElement("img");r.classList.add("item-img"),r.src=e[a].image,r.setAttribute("alt",e[a].alt),n.append(c,i,m,r),t.append(n)}document.querySelector("body").append(t)}()})();