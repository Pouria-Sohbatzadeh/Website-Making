import { login } from "./functions/auth.js"

let loginBtn = document.getElementById("login-btn")

loginBtn.addEventListener("click" , (event) => {
    event.preventDefault()
    login()
})