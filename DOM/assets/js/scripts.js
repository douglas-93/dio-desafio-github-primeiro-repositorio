const buttonElement = document.querySelector('#mode-selector')
const h1Element = document.querySelector('#page-title')
const bodyElement = document.getElementsByTagName('body')[0]
const footerElement = document.getElementsByTagName('footer')[0]
const darkModeClass = 'dark-mode'
const changeTheme = () => {
    changeClasses()
    changeText()
}

const changeClasses = () => {
    buttonElement.classList.toggle(darkModeClass)
    h1Element.classList.toggle(darkModeClass)
    bodyElement.classList.toggle(darkModeClass)
    footerElement.classList.toggle(darkModeClass)
}

const changeText = () => {
    const lightMode = 'Light Mode'
    const darkMode = 'Dark Mode'
    if (bodyElement.classList.contains(darkModeClass)) {
        buttonElement.innerHTML = lightMode
        h1Element.innerHTML = darkMode + " ON"
        return
    }

    buttonElement.innerHTML = darkMode
    h1Element.innerHTML = lightMode + " ON"
}

buttonElement.addEventListener('click', changeTheme)