
let milliseconds = document.getElementById('milliseconds');
let startButton = document.getElementById('startButton');

let go = milliseconds.innerHTML = '00';

setInterval(() => {
  milliseconds.innerHTML = go++;
}, 10);

milliseconds.style.color = 'red';