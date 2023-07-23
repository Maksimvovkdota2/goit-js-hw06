const ulEl = document.querySelector('.ingredients');
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const liEl = document.createElement('div');
liEl.innerHTML = '<li>';
liEl.textContent = `${ingredients}`;
liEl.classList.add('li');
console.log(liEl);
