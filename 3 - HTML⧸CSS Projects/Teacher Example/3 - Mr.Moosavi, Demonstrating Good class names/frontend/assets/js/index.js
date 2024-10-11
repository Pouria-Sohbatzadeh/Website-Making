import { getAllArticles, getAllCourses, getPopularCourses, getPresellCourses } from "./functions/shared.js"

const $ = document
let landingTitle = $.querySelector(".landing__title")
let usersCount = $.querySelector("#users__count")
let coursesCount = $.querySelector("#courses__count")
let minutesCount = $.querySelector("#minutes__count")
let searchButton = $.querySelector('.landing__searchbar-btn')
let searchInput = $.querySelector('.landing__searchbar-input')


window.addEventListener("load", () => {
    let landingText = "ما به هر قیمتی دوره دوره آموزشی تولید نمی کنیم !"
    let landingTextIndex = 0
    typeWriter(landingText, landingTextIndex)
    statusCounter(usersCount, 3_071)
    statusCounter(coursesCount, 40)
    statusCounter(minutesCount, 3_320)

    getAllCourses()
    getPopularCourses()
    getPresellCourses()
    getAllArticles()

    // Handle search
    const searchHandler = () => {
        window.location = `search.html?value=${searchInput.value.trim()}`
        searchInput.value = ''
    }
    searchButton.addEventListener("click" , () => {
        searchInput.value.length && searchHandler()
    } )
    searchInput.addEventListener('keyup' ,event => {
        event.keyCode === 13 && searchInput.value.length && searchHandler() 
    })
})

let statusCounter = (element, maxNumber) => {
    let counter = 0
    let interval = setInterval(() => {
        if (counter === maxNumber) {
            clearInterval(interval)
        }
        element.innerHTML = counter
        counter++
    }, 5)
}

const typeWriter = (text, index) => {
    if (index < text.length) {
        landingTitle.innerHTML += text[index]
        index++
    }

    setTimeout(() => {
        typeWriter(text, index)
    }, 50);
}

