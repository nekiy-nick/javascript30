const player = document.querySelector('.js-player');
const video = player.querySelector('.js-viewer');
const togglePlayBtn = player.querySelector('.js-toggle-btn');
const skipVideoButtons = player.querySelectorAll('.js-video-skip-btn');
const progress = player.querySelector('.js-progress');
const progressBar = progress.querySelector('.js-progress__filled');
const ranges = player.querySelectorAll('.js-player__slider');
const fullscreenBtn = player.querySelector('.js-fullscreen');

function togglePlayVideo() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateToggleBtn() {
  const icon = this.paused ? '►' : '❚ ❚';
  togglePlayBtn.innerText = icon;
}

function skipVideo() {
  let timeToSkip = parseFloat(this.dataset.skip);
  video.currentTime += timeToSkip;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function rewindVideo(e) {
  const rewindTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = rewindTime;
}

video.addEventListener('click', togglePlayVideo);
video.addEventListener('play', updateToggleBtn);
video.addEventListener('pause', updateToggleBtn);
video.addEventListener('timeupdate', handleProgress);

togglePlayBtn.addEventListener('click', togglePlayVideo);

skipVideoButtons.forEach(skipBtn => skipBtn.addEventListener('click', skipVideo));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', rewindVideo);
progress.addEventListener('mousemove', (e) => mousedown && rewindVideo(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullscreenBtn.addEventListener('click', function() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
})
