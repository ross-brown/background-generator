let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomBtn = document.getElementById("random");

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background;
}

function randomHexColor() {
  let randomColor = (Math.random() * 0xfffff * 1000000).toString(16);
  return `#${randomColor.slice(0, 6)}`;
}

function setRandonGradient() {
  color1.value = randomHexColor();
  color2.value = randomHexColor();
  setGradient();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
window.addEventListener("load", setGradient);
randomBtn.addEventListener("click", setRandonGradient);
