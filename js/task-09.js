function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonEl = document.querySelector(".change-color");
console.log(buttonEl);
const spanEl = document.querySelector(".color");

buttonEl.addEventListener('click', changeColor);

function changeColor () {
  let colorHex = getRandomHexColor()
  spanEl.textContent = colorHex;
  document.body.style.backgroundColor = colorHex;
}