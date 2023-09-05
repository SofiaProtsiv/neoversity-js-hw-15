"use strict";

/*
? Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
*/

const inputSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = inputSizeControl.value + "px"

function onChangeText() {
  text.style.fontSize = inputSizeControl.value + "px";
};

inputSizeControl.addEventListener("input", onChangeText)