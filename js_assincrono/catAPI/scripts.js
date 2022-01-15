const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const catBtn = document.querySelector('#change-cat')
const catImg = document.querySelector('#cat')

// const getCats = async () => {
//     try {
//         const data = await fetch(BASE_URL)
//         const json = await data.json()

//         return json.webpurl
//     } catch (e) {
//         console.log(e.message)
//     }
// }

const getCats = async () => {
    const data = await fetch(BASE_URL)
        .then(res => res.json())
        .catch(e => console.log(e.message))

    return data.webpurl
}

const loadImg = async () => {
    catImg.src = await getCats()
}

catBtn.addEventListener('click', loadImg)

loadImg()