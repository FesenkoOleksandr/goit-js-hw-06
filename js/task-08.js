const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", sendForm);

function sendForm (event) {
event.preventDefault();
let formData = [];
const formElements = event.currentTarget.elements;
const email = formElements.email.value;
const password = formElements.password.value;
email === "" && password === "" ? alert("Попередження, всі поля повинні бути заповнені!") :
formData = [{email}, {password}];
formLogin.reset();
console.log(formData)
};






