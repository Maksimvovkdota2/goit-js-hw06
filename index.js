const liel = document.querySelectorAll('ul#categories > li.item');
console.log('Number of categories:', liel);
liel.forEach((element) => {
  const categoryTitle = element.querySelector('h2').textContent;

  const elementsList = element.querySelectorAll('ul > li');

  console.log(`Category: ${categoryTitle}`);
  console.log('Elements:', elementsList.length);
});

const ulel = document.querySelector('.ingredients');
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
let total = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const liel = document.createElement('li');
  liel.textContent = `${ingredients[i]}`;
  liel.classList.add('item');
  total.push(liel);
}
ulel.append(...total);
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryContainer = document.querySelector('.gallery');

const galleryItemsHTML = images
  .map(
    (image) => `
    <li>
      <img src="${image.url}" alt="${image.alt}">
      </li>
      `,
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsHTML);

const btn = document.querySelector('[data-action="decrement"]');
const btn1 = document.querySelector('[data-action="increment"]');
const value = document.getElementById('value');
let counterValue = 0;
btn.addEventListener('click', click);
btn1.addEventListener('click', click1);
function updateCounterValue() {
  value.textContent = counterValue;
}
function click() {
  counterValue--;
  updateCounterValue();
}
function click1() {
  counterValue++;
  updateCounterValue();
}
updateCounterValue();

const a = document.getElementById('name-input');
const b = document.getElementById('name-output');
a.addEventListener('input', output);
function output(event) {
  if (event.target.value <= 0) {
  } else b.innerHTML = event.target.value;
}
const e = document.getElementById('validation-input');
e.addEventListener('blur', check);
function check() {
  const inputr = e.value.length;
  const d = e.getAttribute('data-length');
  function b(x, y) {
    e.classList.remove(x);
    e.classList.add(y);
  }
  if (inputr <= d) {
    b('invalid', 'valid');
  } else {
    b('valid', 'invalid');
    // e.classList.remove('valid);
    // e.classList.add('invalid');
  }
}

const a1 = document.getElementById('font-size-control');
const b1 = document.getElementById('text');
a1.addEventListener('input', () => {
  const size = a1.value + 'px';
  b1.style.fontSize = size;
});
const formel = document.querySelector('.login-form');
formel.addEventListener('submit', form);
function form(event) {
  event.preventDefault();
  event.preventDefault();
  const formElements = new FormData(event.currentTarget);
  console.log(formElements);
  formElements.forEach((value, name) => {
    console.log('name', name);
    console.log('value', value);
  });
}
const btnel = document.querySelector('.change-color');
btnel.addEventListener('click', getRandomHexColor);
function getRandomHexColor() {
  document.body.style = `background-color: #${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
