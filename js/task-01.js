const liItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItemEl.length}`);

liItemEl.forEach((element) => {
  console.log(`
    Category: ${element.children[0].textContent}
    Elements: ${element.querySelectorAll("li").length}
    `);
});
