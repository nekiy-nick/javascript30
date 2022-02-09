
let setTime = () => {
  let time = new Date();  
  let seconds = time.getSeconds();
  let minutes = time.getMinutes();
  let hours = time.getHours();

  let secondsDegrees = ((seconds / 60) * 360) + 90;
  let minutesDegrees = ((minutes / 60) * 360) + 90;
  let hoursDegrees = ((hours / 12) * 360) + 90;

  let hourHand = document.querySelector('.js-clock__hand_hour');
  let minuteHand = document.querySelector('.js-clock__hand_minute');
  let secondHand = document.querySelector('.js-clock__hand_second');
  let secondCounter = document.querySelector('.clock__time-number');
  
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  secondCounter.innerText = seconds;

  [hourHand, minuteHand, secondHand].forEach(hand => hand.style.transition = (seconds === 0) ? 'none' : null);
};

window.onload = () => setTime();

setInterval(setTime, 1000);
