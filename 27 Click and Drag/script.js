const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

function isDownOn(e) {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

function drag(e) {
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
}

function stopDrag() {
  isDown = false;
  slider.classList.remove('active');
}

slider.addEventListener('mousedown', isDownOn);
slider.addEventListener('mouseleave', stopDrag);
slider.addEventListener('mouseup', stopDrag);
slider.addEventListener('mousemove', drag);
