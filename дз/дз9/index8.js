const btnel = document.querySelector('.change-color');
btnel.addEventListener('click', getRandomHexColor);
function getRandomHexColor() {
  document.body.style = `background-color: #${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
