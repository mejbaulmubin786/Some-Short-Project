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
  document.body.style.backgroundColor = colors[randomIndex];
}

setInterval(changeBackgroundColor, 5000);

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
