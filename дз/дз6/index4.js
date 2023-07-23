const a = document.getElementById('validation-input');
a.addEventListener('blur', check);
function check() {
  const inputr = a.value.length;

  if (inputr <= 6) {
    a.classList.remove('invalid');
    a.classList.add('valid');
  } else {
    a.classList.remove('valid');
    a.classList.add('invalid');
  }
}
