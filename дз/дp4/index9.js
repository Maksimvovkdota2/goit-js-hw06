const btn = document.querySelector('[data-action="decrement"]');
const btn1 = document.querySelector('[data-action="increment"]');
const value = document.getElementById('value');
let counterValue = 0;
btn.addEventListener('click', a);
btn1.addEventListener('click', b);
function updateCounterValue() {
  value.textContent = counterValue;
}
function a() {
  counterValue--;
  updateCounterValue();
}
function b() {
  counterValue++;
  updateCounterValue();
}
updateCounterValue();
