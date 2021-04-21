"use strict";

(function () {
  // переключает видимость пароля
  let password = document.querySelector("#password");
  let eye = document.querySelector("#password-toggle");

  function toggleEye() {
    if (password.type === "password") {
      password.setAttribute("type", "text");
      eye.classList.add("form__eye--visible");
    } else {
      password.setAttribute("type", "password");
      eye.classList.remove("form__eye--visible");
    }
  }

  eye.addEventListener("click", event => {
    event.preventDefault();
    toggleEye();
  });
})();
//# sourceMappingURL=script.js.map
