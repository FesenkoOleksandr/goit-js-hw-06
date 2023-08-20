const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')
const ingredientsArr = ingredients.map((value) => {
 const liEl = document.createElement('li');
 liEl.classList.add('item');
 liEl.textContent = value;
return liEl;
})
ulEl.append(...ingredientsArr);