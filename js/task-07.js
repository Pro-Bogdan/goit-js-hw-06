const spanEl = document.querySelector("#text");
const inputRangeEl = document.querySelector("#font-size-control");

inputRangeEl.addEventListener(
  "input",
  (event) => (spanEl.style.fontSize = `${event.currentTarget.value}px`)
);
