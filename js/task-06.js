const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  inputEl.classList.add("valid", "invalid");

  event.currentTarget.value.length !== 6
    ? inputEl.classList.remove("valid")
    : inputEl.classList.remove("invalid");
});
