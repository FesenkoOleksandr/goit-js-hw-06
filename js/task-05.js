const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");
inputEl.addEventListener("input", inputHi);

function inputHi(){
  inputEl.value.trim() === "" ?
    spanEl.textContent = "Anonymous" :
    spanEl.textContent = inputEl.value.trim();
}