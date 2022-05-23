import { auth, provider } from "./firebase";

import { loadText, startBasicScene } from "./setup-scene.js";

document.getElementById("login").addEventListener("click", () => {
  auth
    .signInWithPopup(provider)
    .then((res) => {
      document.querySelector(".login-section").classList.add("hidden");

      const userFirstName = res?.user?.displayName?.split(" ")?.[0];

      startBasicScene();
      loadText(userFirstName);
    })
    .catch((err) => err);
});
