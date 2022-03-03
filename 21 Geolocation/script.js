/*Compass: https://thenounproject.com/search/?q=compass&i=592352*/
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
  console.log(data)
  speed.innerText = data.coords.speed || 0;
  arrow.style.transform = `rotate(${data.coords.heading || 0}deg)`;
}, err => {
  alert('HEY! YOU GOTTA ALLOW THAT TO HAPPEN!!!');
})
