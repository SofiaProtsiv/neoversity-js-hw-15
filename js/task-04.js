"use.strict";

/*
? Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color. Для генерування випадкового кольору використовуй функцію getRandomHexColor.
*/

const onButtonClick = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorName = document.querySelector('.color');

colorName.textContent = window.getComputedStyle(colorName).backgroundColor;

function colorChange() {
  colorName.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorName.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

onButtonClick.addEventListener("click", colorChange)