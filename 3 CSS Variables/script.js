let controlls = document.querySelectorAll('.js-controlls__input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

controlls.forEach(controll => {
  controll.addEventListener('change', handleUpdate);
});
