const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 20;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;

  context.strokeStyle =`hsl(${hue}, 90%, 50%)`;
  context.beginPath();
  context.lineTo(lastX, lastY);
  context.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) hue = 0;
  
  if (context.lineWidth >= 200 || context.lineWidth <= 10) direction = !direction;
  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.ffsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
