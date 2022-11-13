let button = document.querySelector(".button");
let colors = ["#661104", "#470602", "#A2604A", "#431907"];
let body = document.querySelector("body");

function newColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  let randColor = colors[randIndex];
  console.log(randIndex);
  console.log(randColor);
  body.style.backgroundColor = randColor;
}

button.addEventListener("click", newColor);