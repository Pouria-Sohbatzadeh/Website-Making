import { sendContactUsMessage } from "./functions/shared.js"

const contactUsBtn = document.querySelector("#login-btn")

window.addEventListener("load", () => {
    contactUsBtn.addEventListener("click", (event) => {
        event.preventDefault()
        sendContactUsMessage()
    })
})
