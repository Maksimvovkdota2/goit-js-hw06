const liel = document.querySelectorAll('ul#categories > li.item');
console.log('Number of categories:', liel);
liel.forEach((element) => {
  const categoryTitle = element.querySelector('h2').textContent;

  const elementsList = element.querySelectorAll('ul > li');

  console.log(`Category: ${categoryTitle}`);
  console.log('Elements:', elementsList.length);
});
