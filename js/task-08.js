const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", createUserObj);

function createUserObj(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    alert("All fields must be filled");
    return;
  }

  const userObj = {
    email: email.value,
    password: password.value,
  };
  console.log(userObj);
  event.currentTarget.reset();
}
