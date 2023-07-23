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
