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
  setGradient(random()); //! FIGURE THIS OUT
});
