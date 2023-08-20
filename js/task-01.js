
const ulItemEl = document.querySelector("#categories");
console.log(`Number of categories: ${ulItemEl.childElementCount}`);

const liEl = ulItemEl.querySelectorAll('.item');
liEl.forEach((element) => {
  console.log(`Category: ${element.childNodes[1].textContent}`);
  console.log(`Elements: ${element.childNodes[3].children.length}`);

});
