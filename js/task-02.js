const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');
let allLi = [];

ingredients.map((value) => {
 const liEl = document.createElement('li');
 liEl.classList.add('item');
 liEl.textContent = value;
 allLi.push(liEl);
})
ulEl.append(...allLi);