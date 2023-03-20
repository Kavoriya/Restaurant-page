function createHomePage() {

   let hoursOuterDiv = document.createElement('div');
   hoursOuterDiv.classList.add('hours-outer');
   let hoursH2 = document.createElement('h2');
   hoursH2.textContent = 'Hours';
   hoursOuterDiv.append(hoursH2);

   const workTimes = [
      {
         day: 'Monday',
         time: '8am - 8pm'
      },
      {
         day: 'Tuesday',
         time: '8am - 8pm'
      },
      {
         day: 'Wednesday',
         time: '8am - 8pm'
      },
      {
         day: 'Thursday',
         time: '8am - 8pm'
      },
      {
         day: 'Friday',
         time: '8am - 8pm'
      },
      {
         day: 'Saturday',
         time: '10am - 10pm'
      },
      {
         day: 'Sunday',
         time: '10am - 10pm'
      },
   ]

   for (let i = 0; i < 7; i++) {
      let p = document.createElement('p');
      p.textContent = `${workTimes[i].day}: ${workTimes[i].time}`;
      hoursOuterDiv.append(p);
   }

   let reviewOuterDiv = document.createElement('div');
   reviewOuterDiv.classList.add('review-outer');
   let reviewP = document.createElement('p');
   reviewP.classList.add('review');
   reviewP.textContent = "I love this restaurant! Best food in the country. This is exactly the kind of place that I like to return to again and again."
   let customerP = document.createElement('p');
   customerP.classList.add('customer');
   customerP.textContent = "Viktor Barinov";
   reviewOuterDiv.append(reviewP, customerP);

   let locationOuterDiv = document.createElement('div');
   locationOuterDiv.classList.add('location-outer');
   let locationH2 = document.createElement('h2');
   locationH2.textContent = 'Address';
   let locationP = document.createElement('p');
   locationP.textContent = 'Tyumen, Gagarina Street 25';
   locationOuterDiv.append(locationH2, locationP);

   let body = document.querySelector('body');
   let content = document.createElement('div');
   content.id = 'content';
   let h1 = document.createElement('h1');
   h1.textContent = 'Tasty Universe';
   content.append(h1, hoursOuterDiv, reviewOuterDiv, locationOuterDiv);
   body.append(content);
   
}

export default createHomePage;