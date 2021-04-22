"use strict";

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

if (eye) {
  eye.addEventListener("click", event => {
    event.preventDefault();
    toggleEye();
  });
} // маска телефона


let phone = document.querySelector("#phone");
let im = new Inputmask("+7(999)999-99-99");
im.mask(phone);
//# sourceMappingURL=script.js.map
