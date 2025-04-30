function changeBackgroundColor() {
  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.transition = "background-color 5s ease-in-out"; // Smooth transition
  document.body.style.backgroundColor = colors[randomIndex];
}

setInterval(changeBackgroundColor, 5000);

/*
let heading1 = document.getElementsByClassName("heading")[0];
let inputOne = document.getElementsByClassName("inputOne")[0];
let buttonOne = document.getElementsByClassName("buttonOne")[0];
let messageElement = document.createElement("p");

buttonOne.insertAdjacentElement("afterend", messageElement);

buttonOne.addEventListener("click", function () {
  if (!inputOne.value) {
    messageElement.innerText = "Please enter a value";
  } else if (isNaN(inputOne.value)) {
    messageElement.innerText = "Please enter a numeric value";
  } else if (inputOne.value > 0 && inputOne.value <= 10) {
    messageElement.innerText = "The value is: " + inputOne.value;
  } else {
    messageElement.innerText = "please enter a number between 1 to 10";
  }
});
*/
let playerDiv = document.getElementsByClassName("player")[0];
let heading1 = document.getElementsByClassName("heading")[0];
let inputOne = document.getElementsByClassName("inputOne")[0];
let buttonOne = document.getElementsByClassName("buttonOne")[0];
let messageElement = document.createElement("p");
buttonOne.insertAdjacentElement("afterend", messageElement);

let secretNumber;
let attempts = 5;

function handlePlayerOneInput() {
  if (!inputOne.value) {
    messageElement.innerText = "Please enter a value";
  } else if (isNaN(inputOne.value)) {
    messageElement.innerText = "Please enter a numeric value";
  } else if (inputOne.value > 0 && inputOne.value <= 10) {
    secretNumber = parseInt(inputOne.value);
    messageElement.innerText = "Number locked in! Switching to Player 2.";
    animatePlayerOne();
    buttonOne.removeEventListener("click", handlePlayerOneInput);
    setTimeout(setupPlayerTwo, 3000);
  } else {
    messageElement.innerText = "Please enter a number between 1 to 10";
  }
}

buttonOne.addEventListener("click", handlePlayerOneInput);

function animatePlayerOne() {
  playerDiv.style.transition = "all 2s ease";
  playerDiv.style.transform = "translateX(-100%)";
  setTimeout(() => {
    playerDiv.style.display = "none";
  }, 2000);
}

function setupPlayerTwo() {
  playerDiv.style.display = "block";
  playerDiv.style.transform = "translateX(100%)";
  playerDiv.style.transition = "none";
  setTimeout(() => {
    playerDiv.style.transform = "translateX(0)";
    playerDiv.style.transition = "all 2s ease";
  }, 50);

  heading1.innerText = "Player Two: Guess the Number!";
  inputOne.value = "";
  inputOne.placeholder = "Enter your guess (1-10)";
  buttonOne.innerText = "Guess";
  messageElement.innerText = `You have ${attempts} attempts remaining.`;

  buttonOne.addEventListener("click", checkGuess);
}

function checkGuess() {
  let guess = parseInt(inputOne.value);
  if (isNaN(guess)) {
    messageElement.innerText = "Please enter a valid number.";
  } else if (guess === secretNumber) {
    displayWinnerMessage("Congratulations! Player 2 wins!");
  } else {
    attempts--;
    if (attempts > 0) {
      messageElement.innerText = `Wrong guess! Try again. Attempts left: ${attempts}`;
      inputOne.value = "";
    } else {
      displayWinnerMessage("Game Over! Player 1 wins!");
    }
  }
}

function displayWinnerMessage(winnerText) {
  playerDiv.innerHTML = `
    <h1>${winnerText}</h1>
    <button class="restartButton">Restart Game</button>
  `;
  let restartButton = document.getElementsByClassName("restartButton")[0];
  restartButton.addEventListener("click", function () {
    location.reload();
  });

  playerDiv.style.transition = "all 2s ease";
  playerDiv.style.opacity = "1";
}
