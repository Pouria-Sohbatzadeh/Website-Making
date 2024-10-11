import { getAndShowCourseDetail, getAndShowRelatedCourses, submitNewComment } from "./functions/shared.js"

window.addEventListener("load" , () => {
    getAndShowCourseDetail()
    getAndShowRelatedCourses()
    submitNewComment()
})