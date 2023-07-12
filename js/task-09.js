function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const btnChangeColorEl = document.querySelector(".change-color");
const spanIndicateColorEl = document.querySelector(".color");

btnChangeColorEl.addEventListener("click", toChangeColor);

function toChangeColor() {
  const getColor = getRandomHexColor();
  spanIndicateColorEl.textContent = getColor;
  bodyEl.style.backgroundColor = getColor;
}
