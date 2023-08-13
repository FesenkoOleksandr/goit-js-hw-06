const inputEl = document.querySelector("#validation-input");

const symbolNum = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", checkOfSymbol);

function checkOfSymbol (event) {
  inputEl.value.length
  === symbolNum ?
  inputEl.id = "validation-input.valid"
  :
  inputEl.id = "validation-input.invalid";
};