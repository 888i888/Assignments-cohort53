/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const myInfo = {
  nickname: 'Igor',
  'fav-food': 'Pizza',
  hometown: 'Kyiv',
};

Object.entries(myInfo).forEach(([id, value]) => {
  const span = document.getElementById(id);
  if (span) {
    span.textContent = value;
  }
});

const listItems = document.querySelectorAll('ul li');
listItems.forEach((li) => {
  li.classList.add('list-item');
});
