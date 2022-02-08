window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.drum-kit-key[data-key="${e.keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add('drum-kit-key_playing');
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('drum-kit-key_playing');
}

const keys = document.querySelectorAll('.drum-kit-key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));