import { getAndShowMenus, renderTopbarItems, sendNewsLetter, showUserInfosInNavbar } from "./functions/shared.js"

window.addEventListener("load", () => {
    showUserInfosInNavbar()
    renderTopbarItems()
    getAndShowMenus()

    const footerWidgetsBtn = document.getElementById("footer-widgets__btn")
    footerWidgetsBtn.addEventListener("click", event => {
        event.preventDefault()
        sendNewsLetter()
    })
})
