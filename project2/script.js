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

// document.body.style.backgroundColor = "lightblue";

let heading1 = document.getElementsByClassName("heading")[0];
let inputOne = document.getElementsByClassName("inputOne")[0];
let buttonOne = document.getElementsByClassName("buttonOne")[0];

buttonOne.addEventListener("click", function () {
  console.log(inputOne.value);
});
