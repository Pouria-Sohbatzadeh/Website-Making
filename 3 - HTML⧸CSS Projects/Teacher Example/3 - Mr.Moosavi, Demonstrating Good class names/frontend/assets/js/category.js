import { getAndShowCategoryCourses, insertHtmlTemplate, searchInArray, showSortCourses } from "./functions/shared.js"

let categoryCoursesContainer = document.querySelector("#courses-container")
let showCoursesTypeIcons = document.querySelectorAll(".courses-top-bar__icon-parent")
let sortOptions = document.querySelectorAll(".courses-top-bar__selection-item")
let sortOptionsTitle = document.querySelector(".courses-top-bar__selection-btn-title")
let searchInput = document.querySelector(".courses-top-bar__input")


window.addEventListener("load", () => {
    getAndShowCategoryCourses().then(categoryCourses => {
        let courses = [...categoryCourses]
        let coursesShowType = 'row'
        if (courses.length) {
            insertHtmlTemplate(courses, categoryCoursesContainer, coursesShowType)
        } else {
            categoryCoursesContainer.insertAdjacentHTML("beforeend", `
            <div class="alert alert-danger my-5">
            <p class="text-center py-2">دوره ای برای نمایش وجود ندارد.</p>
            </div>
            `)
        }
        showCoursesTypeIcons.forEach(showCoursesTypeIcon => {
            showCoursesTypeIcon.addEventListener('click', () => {
                showCoursesTypeIcons.forEach(icon => {
                    icon.classList.remove("courses-top-bar__btn--active")
                    showCoursesTypeIcon.classList.add("courses-top-bar__btn--active")
                })
                if (courses.length) {
                    if (showCoursesTypeIcon.className.includes("row")) {
                        coursesShowType = "row"
                        insertHtmlTemplate(courses, categoryCoursesContainer, coursesShowType)
                    } else {
                        coursesShowType = "column"
                        insertHtmlTemplate(courses, categoryCoursesContainer, coursesShowType)
                    }
                } else {
                    categoryCoursesContainer.insertAdjacentHTML("beforeend", `<div class="alert alert-danger my-5">
                    <p class="text-center py-2">دوره ای برای نمایش وجود ندارد.</p>
                    </div>`)
                }
            })

        })
        sortOptions.forEach(option => {
            option.addEventListener('click', event => {
                sortOptionsTitle.innerHTML = ''
                sortOptionsTitle.insertAdjacentHTML("beforeend", `
                ${event.target.textContent}
                <i class="fas fa-angle-down courses-top-bar__selection-btn-icon"></i>
               `)
                sortOptions.forEach(item => item.classList.remove("courses-top-bar__selection-item--active"))
                event.target.classList.add("courses-top-bar__selection-item--active")
                let resultSortCourses = showSortCourses(courses, event.target.dataset.key)
                insertHtmlTemplate(resultSortCourses, categoryCoursesContainer, coursesShowType)
            })
        })
        searchInput.addEventListener("keyup", (event) => {
            let filterCoursesBySearch = searchInArray(courses, 'name', event.target.value)
            if (filterCoursesBySearch.length) {
                insertHtmlTemplate(filterCoursesBySearch, categoryCoursesContainer, coursesShowType)
            } else {
                categoryCoursesContainer.innerHTML = ''
                categoryCoursesContainer.insertAdjacentHTML("beforeend", `
            <div class="alert alert-danger my-5">
            <p class="text-center py-2">دوره ای برای نمایش وجود ندارد.</p>
            </div>
            `)
            }
        })
    })
})
