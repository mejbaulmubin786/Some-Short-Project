
let milliseconds = document.getElementById('milliseconds');
let startButton = document.getElementById('startButton');

let go = milliseconds.innerHTML = '000';


function st() {
  setInterval(() => {
    let count = go++;
    milliseconds.innerHTML = count.toString().padStart(3, '0');
  }, 10);
}



startButton.addEventListener('click', st);
milliseconds.style.color = 'red';