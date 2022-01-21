const navBar = document.querySelector('header>div.container')
console.log(navBar)

const changeBarColor = () => {
    if (window.scrollY > 10) {
        navBar.classList.add('opaque-black')
    } 
    
    if (window.scrollY < 10) {
        navBar.classList.remove('opaque-black')
    }
}

window.addEventListener("scroll", changeBarColor)
