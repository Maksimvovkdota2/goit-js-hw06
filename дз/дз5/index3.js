const a = document.getElementById('name-input');
const b = document.getElementById('name-output');
a.addEventListener('input', output);
function output(event) {
  b.innerHTML = event.target.value;
}
