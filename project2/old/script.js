let gradientIndex = 0; // Track the current gradient index
const gradients = [
  "linear-gradient(135deg, #FF5733, #FFC300)", // Warm sunset
  "linear-gradient(135deg, #33FF57, #33FFF9)", // Fresh green
  "linear-gradient(135deg, #5733FF, #FF33FB)", // Vibrant purple
  "linear-gradient(135deg, #33F5FF, #337BFF)", // Cool blue
  "linear-gradient(135deg, #FF5733, #FF3381)", // Passion red
];

function changeGradientBackground() {
  gradientIndex = (gradientIndex + 1) % gradients.length; // Move to the next gradient
  document.body.style.background = gradients[gradientIndex];
  document.body.style.transition = "background 10s ease-in-out"; // Slow transition
}

// Change gradient every 10 seconds
setInterval(changeGradientBackground, 10000);
/*
<div class="player-setup">
      <h1 class="setup-heading">How many players will be playing?</h1>
      <input class="player-count-input" type="number" min="1" value="1" />
      <button class="start-button">Start Game</button>
    </div>
*/
let playerSetup = document.querySelector(".player-setup");
let heading = document.querySelector(".setup-heading");
const playerCountInput = document.querySelector(".player-count-input");
const startButton = document.querySelector(".start-button");
let playersNames = [];

startButton.addEventListener("click", () => {
  const playerCount = parseInt(playerCountInput.value, 10);
  if (isNaN(playerCount) || playerCount < 2) {
    alert("Please enter a valid number of players.");
    return;
  }
  heading.innerHTML = `Enter the names of ${playerCount} players`;
  playerCountInput.style.display = "none"; // Hide the input field
  // let newInput = document.createElement("input");
  // newInput.classList.add("input");
  // newInput.type = "text";
  // heading.insertAdjacentElement("afterend", newInput);
  createPlayerNameInput();
});

function createPlayerNameInput() {
  let newInput = document.createElement("input");
  newInput.classList.add("input");
  newInput.type = "text";
  heading.insertAdjacentElement("afterend", newInput);
  for (let i = 2; i <= playerCount; i++) {
    newInput.placeholder = `Player ${i} name`;
    playersNames[i - 2] = newInput.value; // Store the name in the array
  }
}

// function createPlayerNameInput() {
//   for (let i = 1; i <= playerCount; i++) {
//     let newInput = document.createElement("input");
//     newInput.type = "text";
//     newInput.placeholder = `Player ${i} name`; // প্রতিটি প্লেয়ারের জন্য আলাদা প্লেসহোল্ডার
//     newInput.classList.add("player-name-input"); // অপশনাল: আপনি চাইলে ক্লাস যোগ করতে পারেন

//     // নতুন তৈরি ইনপুট এলিমেন্টটিকে playerSetup এলিমেন্টের মধ্যে যুক্ত করুন
//     playerSetup.appendChild(newInput);
//   }
// }
