import { loadText, startBasicScene } from "./setup-scene.js";

const nameInputElem = document.getElementById("name");
const submitButtonElem = document.getElementById("login");

nameInputElem.addEventListener("keyup", (e) => {
  console.log(e.target.value);

  if (e.target.value.length >= 3) {
    submitButtonElem.disabled = false;
  }
});

submitButtonElem.addEventListener("click", () => {
  const name = nameInputElem.value;

  document.querySelector(".login-section").classList.add("hidden");

  startBasicScene();
  loadText(name);
});
