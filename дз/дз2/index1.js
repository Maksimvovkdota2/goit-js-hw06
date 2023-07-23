const ulel = document.querySelector('.ingredients');
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
for (let i = 0; i < ingredients.length; i += 1) {
  const liel = document.createElement('li');
  liel.textContent = `${ingredients[i]}`;
  liel.classList.add('item');
  ulel.append(liel);
}
// const liEl = document.createElement('li');
// liEl.textContent = `${ingredients}`;
// liEl.classList.add('item');
// console.log(liEl);
