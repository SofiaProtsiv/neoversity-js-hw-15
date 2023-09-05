"use strict";

/*
? Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
  1. Розміри найпершого <div> - 30px на 30px.
  2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
  3. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');
const inputEl = document.querySelector('input');

function createBoxes() {
  const amount = parseInt(inputEl.value);

  if (!amount || amount < 1) return;

  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  boxes.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const size = basicSize + i * 10;
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    fragment.appendChild(div);
  }

  inputEl.value = '';
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

create.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);