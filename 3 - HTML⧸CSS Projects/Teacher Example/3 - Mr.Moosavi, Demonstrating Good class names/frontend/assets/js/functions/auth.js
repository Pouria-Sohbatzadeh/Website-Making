import { BASE_URL } from '../api.js'
import { getToken, saveIntoLocalStorage, showSwal } from './utills.js'

let $ = document

const register = () => {
    let nameInput = $.querySelector("#name")
    let usernameInput = $.querySelector("#username")
    let emailInput = $.querySelector("#email")
    let phoneInput = $.querySelector("#phone")
    let passwordInput = $.querySelector("#password")

    const newUserInfos = {
        name: nameInput.value.trim(),
        username: usernameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        password: passwordInput.value.trim(),
        confirmPassword: passwordInput.value.trim()
    }

    fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserInfos)
    })
        .then(response => {
            if (response.status === 201) {
                showSwal("تبریک!", "ثبت نام با موفقیت انجام شد.", "success", "ورود به پنل", () => { location.href = "index.html" })
            }
            if (response.status === 409) {
                showSwal("ثبت نام انجام نشد.", "", "error", "تصحیح اطلاعات")
            }
            return response.json()
        })
        .then(result => {
            saveIntoLocalStorage('user', { token: result.accessToken })
        })
}

const login = () => {
    let usernameInput = $.getElementById("username")
    let passwordInput = $.getElementById("password")

    let userInfo = {
        identifier: usernameInput.value.trim(),
        password: passwordInput.value.trim(),
    }

    fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
        .then(response => {
            if (response.status == 200) {
                showSwal("با موفقیت وارد شدید", "", "success", "ورود", () => { location.href = "index.html" })
            }
            if (response.status == 401) {
                showSwal("اطلاعات به درستی وارد نشده است.", "", "error", "بستن", () => { })
            }
            return response.json()
        })
        .then(result => {
            saveIntoLocalStorage('user', { token: result.accessToken })
        })


}

const getMe = async () => {
    let token = getToken()

    if (!token) {
        return false
    }

    let res = await fetch(`${BASE_URL}/auth/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    let data = await res.json()
    return data
}


const isLogin = () => {
    if (getToken()) {
        return true
    } else {
        return false
    }
}

export { register, login, getMe, isLogin }
