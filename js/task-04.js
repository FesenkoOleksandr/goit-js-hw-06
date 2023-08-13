let counterValue = 0;
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

const countUp = () => {
  counterValue += 1;
  counter.textContent = counterValue;
}

const countDown = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
}

buttonIncrement.addEventListener("click", countUp);
buttonDecrement.addEventListener("click", countDown);

