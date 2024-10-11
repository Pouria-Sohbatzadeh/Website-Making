import { BASE_URL } from "../api.js";
import { getMe, isLogin } from "./auth.js";
import { getToken, getUrlParam, showSwal } from "./utills.js";

let $ = document
const showUserInfosInNavbar = () => {

  let navbarProfileInfo = $.querySelector(".nav-bar__profile")
  if (isLogin()) {
    getMe().then(data => {
      navbarProfileInfo.setAttribute("href", "index.html")
      navbarProfileInfo.innerHTML = `<span class="nav-bar__profile-text">${data.name}</span>`
    })
  } else {
    navbarProfileInfo.setAttribute("href", "login.html")
    navbarProfileInfo.innerHTML = '<span class="nav-bar__profile-text">ورود / ثبت نام</span>'
  }
}

const renderTopbarItems = async () => {
  let topbarList = $.querySelector(".top-bar__list")
  let response = await fetch(`${BASE_URL}/menus/topbar`)
  let topbarItems = await response.json()
  topbarList.innerHTML = ""

  let shuffledArray = topbarItems.sort((a, b) => 0.5 - Math.random())
  shuffledArray.splice(0, 7).map(item => {
    topbarList.insertAdjacentHTML("beforeend", `<li><a href="#" class="top-bar__link">${item.title}</a></li>`)
  })
}

const getAllCourses = async () => {
  let coursesContainer = $.querySelector("#courses-container")
  let response = await fetch(`${BASE_URL}/courses`)
  let courses = await response.json()
  coursesContainer.innerHTML = ""
  courses.slice(0, 6).map(course => {
    coursesContainer.innerHTML += `<div class="col-4">
                <div class="course-box">
                  <a href=./course.html?name=${course.shortName}>
                    <img src=http://localhost:4000/courses/covers/${course.cover} alt="course picture" class="course-box__image" />
                  </a>
                  <div class="course-box__main">
                    <a href=./course.html?name=${course.shortName} class="course-box__title">${course.name}</a>
                    <div class="course-box__rating-teacher">
                      <div class="course-box__teacher">
                        <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                        <span class="course-box__teacher-text">${course.creator}</span>
                      </div>
                      <div class="course-box__rating">
                      ${Array(5 - course.courseAverageScore).fill(0).map(score => '<img src="./assets/images/svgs/star.svg" alt="rating svg" />').join('')}
                        ${Array(course.courseAverageScore).fill(0).map(score => '<img src="./assets/images/svgs/star_fill.svg" alt="rating svg" />').join('')}
                      </div>
                    </div>
                    <div class="course-box__status">
                      <div class="course-box__users">
                        <i class="fas fa-users course-box__users-icon"></i>
                        <span class="course-box__users-count">${course.registers}</span>
                      </div>
                      <span class="course-box__users-price">${!course.price ? "رایگان" : course.price.toLocaleString()}</span>
                    </div>
                  </div>
                  <div class="course-box__footer">
                    <a href="./course.html">
                      مشاهده اطلاعات
                      <i class="fas fa-arrow-left"></i>
                    </a>
                  </div>
                </div> 
              </div>`
  })


}

const getPopularCourses = async () => {
  let popularCoursesContainer = $.querySelector("#popular-courses-container")
  let response = await fetch(`${BASE_URL}/courses/popular`)
  let popularCourses = await response.json()
  popularCourses.map(popularCourse => {
    popularCoursesContainer.insertAdjacentHTML("beforeend", `<div class="swiper-slide">
        <div class="course-box">
          <a href="./course.html?name=${popularCourse.shortName}">
            <img src=http://localhost:4000/courses/covers/${popularCourse.cover} alt="course picture" class="course-box__image" />
          </a>
          <div class="course-box__main">
            <a href="./course.html?name=${popularCourse.shortName}" class="course-box__title">${popularCourse.name}</a>
            <div class="course-box__rating-teacher">
              <div class="course-box__teacher">
                <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                <span class="course-box__teacher-text">${popularCourse.creator}</span>
              </div>
              <div class="course-box__rating">
              ${Array(5 - popularCourse.courseAverageScore).fill("item").map(score => '<img src="./assets/images/svgs/star.svg" alt="rating svg" />').join('')
      }

              ${Array(popularCourse.courseAverageScore).fill("item").map(score => '<img src="./assets/images/svgs/star_fill.svg" alt="rating svg" />').join('')
      }
                
              </div>
            </div>
            <div class="course-box__status">
              <div class="course-box__users">
                <i class="fas fa-users course-box__users-icon"></i>
                <span class="course-box__users-count">${popularCourse.registers}</span>
              </div>
              <span class="course-box__users-price">${popularCourse.price ? popularCourse.price.toLocaleString() : "رایگان"}</span>
            </div>
          </div>
          <div class="course-box__footer">
            <a href="#">
              مشاهده اطلاعات
              <i class="fas fa-arrow-left"></i>
            </a>
          </div>
        </div>
      </div>`)
  })
}

const getPresellCourses = async () => {
  let presellCoursesContainer = $.querySelector("#presell-courses-container")
  let response = await fetch(`${BASE_URL}/courses/presell`)
  let presellCourses = await response.json()
  presellCoursesContainer.innerHTML = ''
  presellCourses.map(presellCourse => {
    presellCoursesContainer.innerHTML += `<div class="swiper-slide">
        <div class="course-box">
          <a href="./course.html?name=${presellCourse.shortName}">
            <img src=http://localhost:4000/courses/covers/${presellCourse.cover} alt="course picture" class="course-box__image" />
          </a>
          <div class="course-box__main">
            <a href="./course.html?name=${presellCourse.shortName}" class="course-box__title">${presellCourse.name}</a>
            <div class="course-box__rating-teacher">
              <div class="course-box__teacher">
                <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                <span class="course-box__teacher-text">${presellCourse.creator}</span>
              </div>
              <div class="course-box__rating">
              ${Array(5 - presellCourse.courseAverageScore).fill(null).map(score => '<img src="./assets/images/svgs/star.svg" alt="rating svg" />').join('')}
              ${Array(presellCourse.courseAverageScore).fill(null).map(score => '<img src="./assets/images/svgs/star_fill.svg" alt="rating svg" />').join('')}
              </div>
            </div>
            <div class="course-box__status">
              <div class="course-box__users">
                <i class="fas fa-users course-box__users-icon"></i>
                <span class="course-box__users-count">${presellCourse.registers}</span>
              </div>
              <span class="course-box__users-price">${presellCourse.price ? presellCourse.price.toLocaleString() : "رایگان"}</span>
            </div>
          </div>
          <div class="course-box__footer">
            <a href="#">
              مشاهده اطلاعات
              <i class="fas fa-arrow-left"></i>
            </a>
          </div>
        </div>
      </div>`
  })
}

const getAllArticles = async () => {
  let articlesContainer = $.querySelector("#articles-container")
  let response = await fetch(`${BASE_URL}/articles`)
  let articles = await response.json()
  articles.slice(0, 6).map(article => {
    articlesContainer.insertAdjacentHTML("beforeend", `<div class="col-4">
            <div class="article-card">
              <div class="article-card__header">
                <a href="#">
                  <img src=http://localhost:4000/courses/covers/${article.cover} alt="Article Cover" class="article-card__header-cover" />
                </a>
              </div>
              <div class="article-card__body">
                <a href="#" class="article-card__body-title">${article.title}</a>
                <span class="article-card__body-description">${article.description}</span>
                <div class="article-card__body-btn">
                  <a href="#" class="article-card__body-link">بیشتر بخوانید</a>
                </div>
              </div>
            </div>
          </div>`)
  })
}

const getAndShowMenus = async () => {
  let navbarList = $.querySelector(".nav-bar__list")
  let res = await fetch(`${BASE_URL}/menus`)
  let menuItems = await res.json()
  navbarList.innerHTML = '<li class="nav-bar__item"><a href=index.html class="nav-bar__link">صفحه اصلی</a></li>'
  menuItems.map(item => {
    navbarList.insertAdjacentHTML("beforeend", `<li class="nav-bar__item">
    <a href=category.html?cat=${item.href.split("/")[2]} class="nav-bar__link">${item.title}
    ${item.submenus.length ?
        `<i class="fas fa-angle-down"></i>
      <ul class="nav-bar__dropdown">
      ${item.submenus.map(submenu => (
          `<li class="nav-bar__dropdown-item">
        <a href="#" class="nav-bar__dropdown-link">${submenu.title}</a>
      </li>`
        )).join('')}
      </ul>`
        : ''
      }
    </a>
  </li>`)
  })

}

const getAndShowCategoryCourses = async () => {
  let categoryName = getUrlParam('cat')
  let response = await fetch(`${BASE_URL}/courses/category/${categoryName}`)
  let courses = await response.json()
  return courses
}

const insertHtmlTemplate = (courses, parent, showType) => {
  parent.innerHTML = ''
  if (showType == "row") {
    courses.map(course => {
      parent.insertAdjacentHTML("beforeend", `<div class="col-4">
      <div class="course-box">
        <a href="#">
          <img src=http://localhost:4000/courses/covers/${course.cover} class="course-box__image" />
        </a>
        <div class="course-box__main">
          <a href="#" class="course-box__title">${course.name}</a>
        <div class="course-box__rating-teacher">
            <div class="course-box__teacher">
              <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
              <span class="course-box__teacher-text">${course.creator}</span>
            </div>
            <div class="course-box__rating">
            ${Array(5 - course.courseAverageScore).fill("score").map(score => (
        '<img src="./assets/images/svgs/star.svg" alt="rating svg" />'
      )).join('')
        }
            ${Array(course.courseAverageScore).fill("score").map(score => (
          '<img src="./assets/images/svgs/star_fill.svg" alt="rating svg" />'
        )).join('')
        }
            </div>
          </div>
          <div class="course-box__status">
            <div class="course-box__users">
              <i class="fas fa-users course-box__users-icon"></i>
              <span class="course-box__users-count">${course.registers}</span>
            </div>
            <span class="course-box__users-price">${course.price ? course.price.toLocaleString() : "رایگان"}</span>
          </div>
        </div>
        <div class="course-box__footer">
          <a href="#">
            مشاهده اطلاعات
            <i class="fas fa-arrow-left"></i>
          </a>
        </div>
      </div>
    </div> `)
    })
  } else {
    courses.map(course => {
      parent.insertAdjacentHTML("beforeend", `<div class="col-12">
      <div class="course-box d-flex row">
      <div class="course-box__right col-3">
        <a href="#" class="">
          <img src=http://localhost:4000/courses/covers/${course.cover} alt="course picture"
            class="course-box__image h-100" />
        </a>
      </div>
      <div class="course-box__left px-3 col-9">
        <a href="#" class="course-box__title mt-2">${course.name}</a>
        <div class="course-box__rating-teacher">
          <div class="course-box__teacher">
            <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
            <span class="course-box__teacher-text">${course.creator}</span>
          </div>
          <div class="course-box__rating">
           ${Array(5 - course.courseAverageScore).fill("score").map(score => (
        '<img src="./assets/images/svgs/star.svg" alt="rating svg" />'
      )).join('')
        }
          ${Array(course.courseAverageScore).fill("score").map(score => (
          '<img src="./assets/images/svgs/star_fill.svg" alt="rating svg" />'
        )).join('')
        }
          </div>
        </div>
        <p class="fs-5 p-3">${course.description}</p>
        <div class="course-box__status">
          <div class="course-box__users">
            <i class="fas fa-users course-box__users-icon"></i>
            <span class="course-box__users-count">${course.registers}</span>
          </div>
          <span class="course-box__users-price">${course.price ? course.price.toLocaleString() : "رایگان"}</span>
        </div>
      </div>
      </div>
      </div>`)
    })
  }

}

const showSortCourses = (array, filter) => {
  let outputArray = []
  switch (filter) {
    case "free": {
      outputArray = array.filter(course => course.price === 0)
      break
    }
    case "money": {
      outputArray = array.filter(course => course.price !== 0)
      break
    }
    case "default": {
      outputArray = array
      break
    }
    case "last": {
      outputArray = array
      break
    }
    case "first": {
      outputArray = [...array].reverse()
      break
    }
    case "score": {
      outputArray = [...array].sort((a, b) => b.courseAverageScore - a.courseAverageScore)
      break
    }
    case "expensive": {
      outputArray = [...array].sort((a, b) => b.price - a.price)
      break
    }
  }
  return outputArray
}

const searchInArray = (array, searchProperty, value) => {
  let outputArray = array.filter(item => item[searchProperty].includes(value))
  return outputArray
}

const getAndShowCourseDetail = async () => {
  let courseStatusComplete = $.querySelector("#course-status")
  let courseInfoVideo = $.querySelector(".course-info__video")
  let courseInfoText = $.querySelector(".course-info__text")
  let courseInfoLink = $.querySelector(".course-info__link")
  let courseInfoTitle = $.querySelector(".course-info__title")
  let courseTime = $.querySelector("#course-time")
  let courseUpdateAt = $.querySelector("#course-updated")
  let courseSupport = $.querySelector("#course-support")
  let courseCommentsCount = $.querySelector(".course-detail__total-comments-text")
  let courseStudentsCount = $.querySelector(".course-detail__total-header-count")
  let sessionsWrapper = $.querySelector(".sessions-wrapper")
  let commentsContainer = $.querySelector(".comments__content")

  let shortName = getUrlParam('name')
  let response = await fetch(`${BASE_URL}/courses/${shortName}`)
  let mainCourse = await response.json()
  courseInfoTitle.innerHTML = mainCourse.name
  courseInfoLink.innerHTML = mainCourse.categoryID.title
  courseInfoText.innerHTML = mainCourse.description
  courseInfoVideo.setAttribute("poster", `http://localhost:4000/courses/covers/${mainCourse.cover}`)
  courseStatusComplete.innerHTML = mainCourse.isComplete ? "به اتمام رسیده" : "در حال برگزاری..."

  // Course Infos
  courseSupport.innerHTML = mainCourse.support
  courseUpdateAt.innerHTML = mainCourse.updatedAt.slice(0, 10)
  courseCommentsCount.innerHTML = `${mainCourse.comments.length} دیدگاه`
  courseStudentsCount.innerHTML = mainCourse.courseStudentsCount

  // Course Sessions
  let sumTimes = 0
  if (mainCourse.sessions.length) {
    mainCourse.sessions.forEach((session, index) => {
      let timeItems = session.time.split(":")
      sumTimes += +timeItems[0]
      courseTime.innerHTML = mainCourse.sessions.length ? `${sumTimes} ساعت` : 'شروع نشده'
      sessionsWrapper.insertAdjacentHTML("beforeend", `
      <div class="accordion-body">
        <div class="introduction__accordion-body__right">
          <span class="introduction__accordion-count">${index + 1}</span>
          <i class="fab fa-youtube introduction__accordion-icon"></i>
          ${session.free || mainCourse.isUserRegisteredToThisCourse ? `<a href=episode.html?shortName=${mainCourse.shortName}&sessionID=${session._id} class="introduction__accordion-text">${session.title}</a>` : `<span class="introduction__accordion-text">${session.title}</span>`}
        </div>
        <div class="introduction__accordion-body__left">
          <span class="introduction__accordion-time">${session.time}</span>
          ${session.free || mainCourse.isUserRegisteredToThisCourse ? '' : '<i class="fa fa-lock"></i>'}
        </div>
      </div>
      `)
    })
  } else {
    courseTime.innerHTML = "0 ساعت"
    sessionsWrapper.insertAdjacentHTML("beforeend", `
      <div class="accordion-body">
        هنوز جلسه ای برای این دوره ضبط نشده است.
      </div>
      `)
  }

  // Course Comments

  mainCourse.comments.length ?
    mainCourse.comments.forEach(comment => {
      commentsContainer.insertAdjacentHTML("beforeend",
        `
          <div class="comment">
            <div class="comment__header">
              <div class="comment__header-right">
                <span class="comment__name">${comment.creator.name}</span>
                <span class="comment__role ${comment.creator.role === "USER" ? "primary-color" : "blue-color"}">
                ${comment.creator.role == "USER" ? "دانشجو" : "مدرس"}
                </span>
                <span class="comment__created">${comment.createdAt.slice(0, 10)}</span>
              </div>
              <div class="comment__header-left">
                <span class="comment__header-left-text">پاسخ</span>
              </div>
            </div>
            <p class="comment__body">
            ${comment.body}
            </p>
            ${comment.answerContent ?
          `
            <div class="comments__content answer-comment">
              <div class="comment__header">
                <div class="comment__header-right">
                  <span class="comment__name">${comment.answerContent?.creator.name}</span>
                  <span class="comment__role ${comment.answerContent?.creator.role === "USER" ? "primary-color" : "blue-color"}">
                  ${comment.answerContent?.creator.role == "USER" ? "دانشجو" : "مدرس"}
                  </span>
                  <span class="comment__created">${comment.answerContent?.createdAt.slice(0, 10)}</span>
                </div>
                <div class="comment__header-left">
                  <span class="comment__header-left-text">پاسخ</span>
                </div>
                </div>
                <p class="comment__body">
                ${comment.answerContent?.body}
                </p>
              </div>
            </div>
         `
          :
          ''
        }
    `
      )
    })
    : commentsContainer.insertAdjacentHTML("beforeend",
      `
        <p class="comments__content p-4">هنوز برای این دوره نظری ثبت نشده است.</p>
      `
    )


}

const getAndShowRelatedCourses = async () => {
  let relatedCoursesContainer = $.querySelector(".course-detail__courses-list")
  const shortName = getUrlParam('name')
  let response = await fetch(`${BASE_URL}/courses/related/${shortName}`)
  let relatedtCourses = await response.json()
  relatedCoursesContainer.innerHTML = ""
  if (relatedtCourses.length) {
    relatedtCourses.map(course => {
      relatedCoursesContainer.insertAdjacentHTML("beforeend", `
      <li class="course-detail__courses-item">
          <a href=course.html?name=${course.shortName} class="course-detail__courses-link">
            <img src=http://localhost:4000/courses/covers/${course.cover} alt="course cover" class="course-detail__course-cover">
            <span class="course-detail__course-title">${course.name}</span>
          </a>
      </li>
      `)
    })
  } else {
    // codes
  }

}

const getAndShowSessionDetail = async () => {
  let episodeVideo = $.querySelector(".episode-content__video")
  let sidebarTopicsList = $.querySelector(".sidebar-topics__list")

  const sessionID = getUrlParam("sessionID")
  const shortName = getUrlParam("shortName")
  let response = await fetch(`${BASE_URL}/courses/${shortName}/${sessionID}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  let sessionDetail = await response.json()
  episodeVideo.src = `http://localhost:4000/courses/covers/${sessionDetail.session.video}`
  sidebarTopicsList.innerHTML = ""
  sessionDetail.sessions.forEach(session => {
    sidebarTopicsList.insertAdjacentHTML("beforeend", `
    <li class="sidebar-topics__list-item">
      <div class="sidebar-topics__list-right">
        <i class="sidebar-topics__list-item-icon fa fa-play-circle"></i>
        ${session.free ? `
        <a class="sidebar-topics__list-item-link" href=episode.html?shortName=${shortName}&sessionID=${session._id} >${session.title}</a>
        `
        :
        `
        <span class="sidebar-topics__list-item-link">${session.title}</span>
        `
      }
      </div>
      <div class="sidebar-topics__list-left">
        <span class="sidebar-topics__list-item-time">${session.time}</span>
        ${!session.free ? '<i class="fa fa-lock"></i>' : ''
      }
      </div>
    </li>`)
  })

}

const sendContactUsMessage = async () => {
  let usernameInput = $.querySelector("#username")
  let emailInput = $.querySelector("#email")
  let phoneInput = $.querySelector("#phone")
  let messasgeTextaria = $.querySelector("#message")

  let contactUsFormData = {
    name: usernameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
    body: messasgeTextaria.value.trim()
  }

  let response = await fetch(`${BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contactUsFormData)
  })

  if (response.status == 201) {
    showSwal("تبریک", "پیام شما با موفقیت ثبت شد", "success", "حله!", (result) => { location.href = "index.html" })
  } else {
    showSwal("خطا", "مشکلی رخ داده است.", "error", "بستن")
  }
  let data = await response.json()
  return data
}

const sendNewsLetter = async () => {

  const footerWidgetsInput = document.getElementById("footer-widgets__input")

  let newNewsLetter = {
    email: footerWidgetsInput.value.trim()
  }
  0
  let response = await fetch(`${BASE_URL}/newsletters`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newNewsLetter)
  })
  if (response.ok) {
    showSwal("تبریک", "با موفقیت ثبت نام شدید", "success", "حله", () => { footerWidgetsInput.value = "" })
  } else {
    showSwal("ناموفق", "خطایی رخ داده است", "error", "بستن", () => { })
  }
  const result = response.json()

  return result
}

const globalSearch = async () => {
  let coursesContainer = $.querySelector("#courses-container")
  let articlesContainer = $.querySelector("#articles-container")

  let searchValue = getUrlParam('value')
  let response = await fetch(`${BASE_URL}/search/${searchValue}`)
  let data = await response.json()
  !data.allResultCourses.length
    ?
    coursesContainer.insertAdjacentHTML("beforeend",
      `
        <div class="alert alert-danger">
          <span>هیج دوره ای براساس جستجوی شما یافت نشد.</span>
        </div>
      `
    )

    :

    data.allResultCourses.map(course => {
      coursesContainer.insertAdjacentHTML('beforeend',
        `
              <div class="col-4">
                <div class="course-box">
                  <a href=./course.html?name=${course.shortName}>
                    <img src=http://localhost:4000/courses/covers/${course.cover} alt="course picture" class="course-box__image" />
                  </a>
                  <div class="course-box__main">
                    <a href=./course.html?name=${course.shortName} class="course-box__title">${course.name}</a>
                    <div class="course-box__rating-teacher">
                      <div class="course-box__teacher">
                        <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                        <span class="course-box__teacher-text">متین موسوی</span>
                      </div>
                      <div class="course-box__rating">
                      <img src="./assets/images/svgs/star_fill.svg" alt="rating svg" />
                      <img src="./assets/images/svgs/star_fill.svg" alt="rating svg" />
                      <img src="./assets/images/svgs/star_fill.svg" alt="rating svg" />
                      <img src="./assets/images/svgs/star_fill.svg" alt="rating svg" />
                      <img src="./assets/images/svgs/star_fill.svg" alt="rating svg" />
                      </div>
                    </div>
                    <div class="course-box__status">
                      <div class="course-box__users">
                        <i class="fas fa-users course-box__users-icon"></i>
                        <span class="course-box__users-count">370</span>
                      </div>
                      <span class="course-box__users-price">${!course.price ? "رایگان" : course.price.toLocaleString()}</span>
                    </div>
                  </div>
                  <div class="course-box__footer">
                    <a href="./course.html">
                      مشاهده اطلاعات
                      <i class="fas fa-arrow-left"></i>
                    </a>
                  </div>
                </div> 
              </div>
          `
      )
    })
  !data.allResultArticles.length
    ?
    articlesContainer.insertAdjacentHTML('beforeend',
      `
        <div class="alert alert-danger">
          <span>هیج مقاله ای براساس جستجوی شما یافت نشد.</span>
        </div>
      `
    )
    :
    data.allResultArticles.map(article => {
      articlesContainer.insertAdjacentHTML("beforeend",
        `
        <div class="col-4">
          <div class="article-card">
            <div class="article-card__header">
              <a href="#">
                <img src=http://localhost:4000/courses/covers/${article.cover} alt="Article Cover" class="article-card__header-cover" />
              </a>
            </div>
            <div class="article-card__body">
              <a href="#" class="article-card__body-title">${article.title}</a>
              <span class="article-card__body-description">${article.description}</span>
              <div class="article-card__body-btn">
                <a href="#" class="article-card__body-link">بیشتر بخوانید</a>
              </div>
            </div>
          </div>
        </div>
      `
      )
    })
}

const submitNewComment = async () => {
  const submitBtn = $.querySelector(".comment__btn")
  const selectInput = $.querySelector("#comment-score")
  const textareaInput = $.querySelector(".comments__score-input-respond")

  submitBtn.addEventListener("click", async (event) => {
    event.preventDefault()
    let shortName = getUrlParam('name')
    const newComment = {
      body: textareaInput.value.trim(),
      courseShortName: shortName,
      score: selectInput.value
    }
    const response = await fetch(`${BASE_URL}/comments`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${getToken()}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newComment)
    })
    const data = await response.json()
    return data
  })
  textareaInput.value = ''
  selectInput.value = 5
}
export {
  showUserInfosInNavbar,
  renderTopbarItems,
  getAllCourses,
  getPopularCourses,
  getPresellCourses,
  getAllArticles,
  getAndShowMenus,
  getAndShowCategoryCourses,
  insertHtmlTemplate,
  showSortCourses,
  searchInArray,
  getAndShowCourseDetail,
  getAndShowRelatedCourses,
  getAndShowSessionDetail,
  sendContactUsMessage,
  sendNewsLetter,
  globalSearch,
  submitNewComment,
}