const inputEl = document.querySelector("#validation-input");

const symbolNum = Number(inputEl.dataset.length);


function checkOfSymbol (event) {
  // inputEl.classList.remove("valid", "invalid");
  // inputEl.value.trim().length
  // === symbolNum ?
  // inputEl.classList.add("valid")
  // :
  // inputEl.classList.add("invalid");


  if (inputEl.value.trim().length  === symbolNum) {
  inputEl.classList.remove("invalid")
  inputEl.classList.add("valid")
  }
  else {
  inputEl.classList.remove("valid")
  inputEl.classList.add("invalid");
}
}
inputEl.addEventListener("blur", checkOfSymbol);