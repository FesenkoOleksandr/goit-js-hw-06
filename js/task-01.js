
const ulItemEl = document.querySelector("#categories");

console.log(`Number of categories: ${ulItemEl.childElementCount}`);

const liEl = ulItemEl.querySelectorAll('.item');

liEl.forEach((element) => {
  console.log(`Category: ${element.querySelector('h2').textContent}`);
  console.log(`Elements: ${element.querySelectorAll('ul li').length}`);

});
