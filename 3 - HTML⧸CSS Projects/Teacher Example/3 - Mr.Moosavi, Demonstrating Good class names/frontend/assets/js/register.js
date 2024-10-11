import { register } from "./functions/auth.js";

let registerBtn = document.querySelector("#register-btn")

registerBtn.addEventListener("click" , () => {
    register()
})