let counterValue = 0;

const btnDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);
const btnIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);
const counterEl = document.querySelector("#value");

btnDecrementEl.addEventListener("click", doCount);
btnIncrementEl.addEventListener("click", doCount);

function doCount(event) {
  event.currentTarget.dataset.action === "increment"
    ? (counterValue += 1)
    : (counterValue -= 1);

  counterEl.textContent = counterValue;
}
