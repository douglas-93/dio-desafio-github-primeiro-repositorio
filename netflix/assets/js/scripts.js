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

// Javascript vanilla
// var nav = document.querySelector('.navbar');
// window.onscroll = function (evt) {

//     if (window.scrollY < 10 && !onTop) {
//         nav.classList.add('onTop');
//         onTop = true;
//     }

//     if (window.scrollY > 10 && onTop) {
//         nav.classList.remove('onTop');
//         onTop = false;
//     }
// };