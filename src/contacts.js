function createContacts() {
   let content = document.createElement('div');
   content.id = 'content';

   let image = document.createElement('img');
   image.classList.add('cafe-image');
   image.src = '../src/images/cafe.jpg';
   image.setAttribute('alt', 'Cafe Tasty Universe');

   let h2 = document.createElement('h2');
   h2.classList.add('contacts-h2');
   h2.textContent = 'Contacts';

   let ul = document.createElement('ul');
   ul.classList.add('contacts-info');

   const contacts = [
      {
         icon: 'call',
         value: '8-800-555-35-35'
      },
      {
         icon: 'email',
         value: 'totallyReal@email.com'
      }
   ];

   for (let i = 0; i< contacts.length; i++) {
      let li = document.createElement('li');
      li.textContent = contacts[i].value;
      let span = document.createElement('span');
      span.classList.add('material-icons');
      span.textContent = contacts[i].icon;
      li.prepend(span);
      ul.append(li);
   }

   content.append(image, h2, ul);
   let body = document.querySelector('body');
   body.append(content);
}

export default createContacts;