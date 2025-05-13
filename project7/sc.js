let millisecondsElement = document.getElementById('milliseconds');
let secondsElement = document.getElementById('seconds');
let minutesElement = document.getElementById('minutes');
let hoursElement = document.getElementById('hours');
let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');
let resetButton = document.getElementById('resetButton');



let timeElements = document.getElementsByClassName('time');
let timeColorElements = document.getElementsByTagName('span');
/*  এভাবেও করা যেতো
let timeElements = document.querySelectorAll('.time');
let timeColorElements = document.querySelectorAll('span');

// Change color for elements with class "time"
timeElements.forEach(element => {
  element.style.color = 'red';
});

// Change color for all <span> elements
timeColorElements.forEach(element => {
  element.style.color = 'red';
});

*/
// Change color for elements with class "time"
for (let i = 0; i < timeElements.length; i++) {
  timeElements[i].style.color = 'red';
}

// Change color for all <span> elements
// for (let i = 0; i < timeColorElements.length; i++) {
//   timeColorElements[i].style.color = 'red';
// }

let millisecondsCount = 0;
let secondsCount = 0;
let minutesCount = 0;
let hoursCount = 0;

let intervalId; // To track the stopwatch interval

function startStopwatch() {
  if (intervalId) return; // Prevent multiple intervals from starting

  intervalId = setInterval(updateTime, 10); // Update every 10 milliseconds
  for (let i = 0; i < timeElements.length; i++) {
    timeElements[i].style.color = 'blue';
  }
}

function stopStopwatch() {
  clearInterval(intervalId); // Stop the interval
  intervalId = null; // Reset intervalId to allow restarting

  for (let i = 0; i < timeElements.length; i++) {
    timeElements[i].style.color = 'red';
  }
}

function resetStopwatch() {
  stopStopwatch(); // Stop the stopwatch if running

  // Reset all counts
  millisecondsCount = 0;
  secondsCount = 0;
  minutesCount = 0;
  hoursCount = 0;

  // Update the DOM
  millisecondsElement.innerHTML = millisecondsCount.toString().padStart(3, '0');
  secondsElement.innerHTML = secondsCount.toString().padStart(2, '0');
  minutesElement.innerHTML = minutesCount.toString().padStart(2, '0');
  hoursElement.innerHTML = hoursCount.toString().padStart(2, '0');


  for (let i = 0; i < timeElements.length; i++) {
    timeElements[i].style.color = 'green';
  }
}

function updateTime() {
  millisecondsCount += 10;

  // Milliseconds to Seconds
  if (millisecondsCount >= 1000) {
    millisecondsCount = 0;
    secondsCount++;
  }

  // Seconds to Minutes
  if (secondsCount >= 60) {
    secondsCount = 0;
    minutesCount++;
  }

  // Minutes to Hours
  if (minutesCount >= 60) {
    minutesCount = 0;
    hoursCount++;
  }

  // Update the DOM
  millisecondsElement.innerHTML = millisecondsCount.toString().padStart(3, '0');
  secondsElement.innerHTML = secondsCount.toString().padStart(2, '0');
  minutesElement.innerHTML = minutesCount.toString().padStart(2, '0');
  hoursElement.innerHTML = hoursCount.toString().padStart(2, '0');
}

// Attach event listeners to buttons
startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);