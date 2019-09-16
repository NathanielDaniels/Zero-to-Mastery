var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
let randomButton = document.getElementsByClassName("randomButton")[0];

function setGradient() {
  body.style.background = `linear-gradient(60deg, ${color1.value},${color2.value})  `;
  css.textContent = `${body.style.background};`;
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", () => {
  body.style.background = `linear-gradient(60deg, ${getRandomColor()},${getRandomColor()})  `;
  css.textContent = `${body.style.background};`;
  setRandomColor();
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//! Trying to change color pallot to random color generated
function setRandomColor() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
}
