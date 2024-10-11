const showSwal = (title, text, icon, button, callbackFn) => {
    swal({
        title,
        text,
        icon,
        button
    }).then((result) => callbackFn(result))
}

const saveIntoLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value))
}

const getFromLocalStorage = (key) => {
    let userToken = JSON.stringify(localStorage.getItem(key))
    return userToken ? userToken : false
}

const getToken = () => {
    const userToken = JSON.parse(localStorage.getItem("user"))
    return userToken ? userToken.token : null
}

const getUrlParam = (key) => {
    let searchParam = new URLSearchParams(window.location.search)
    let categoryWord = searchParam.get(key)
    return categoryWord
}




export { showSwal, saveIntoLocalStorage, getFromLocalStorage, getToken , getUrlParam }