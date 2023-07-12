const boxesEl = document.querySelector("#boxes");
const inputNumberEl = document.querySelector("#controls > input");
const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");

btnCreateEl.addEventListener("click", () => createBoxes(inputNumberEl.value));
btnDestroyEl.addEventListener("click", () => destroyBoxes());

function createBoxes(amount) {
  const arrayDiv = [];
  for (let i = 0; i < amount; i += 1) {
    const divItem = document.createElement("div");
    divItem.style.width = `${30 + i * 10}px`;
    divItem.style.height = `${30 + i * 10}px`;
    divItem.style.backgroundColor = getRandomHexColor();
    arrayDiv.push(divItem);
  }
  boxesEl.append(...arrayDiv);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
