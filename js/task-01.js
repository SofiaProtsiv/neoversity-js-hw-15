"use strick";

/*
? Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

- Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
- Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
*/

const validationInput = document.querySelector('#validation-input');
const dataLength = Number(validationInput.getAttribute('data-length'));
validationInput.addEventListener("blur", onInputChange)


function onInputChange(event) {
    validationInput.textContent = event.currentTarget.value;

    if (validationInput.textContent.length === dataLength) {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    } else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
}