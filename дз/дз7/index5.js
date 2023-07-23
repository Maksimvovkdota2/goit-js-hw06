const a = document.getElementById('font-size-control');
const b = document.getElementById('text');
a.addEventListener('input', () => {
  const size = a.value + 'px';
  b.style.fontSize = size;
});
