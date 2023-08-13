const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

const fontSizeChange = () => {
  spanEl.style.fontSize = `${inputEl.value}px`;
}
inputEl.addEventListener("input", fontSizeChange);