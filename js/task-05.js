const inputEl = document.querySelector("#name-input");
const spanTitleEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) =>
  event.currentTarget.value
    ? (spanTitleEl.textContent = event.currentTarget.value)
    : (spanTitleEl.textContent = "Anonymous")
);
