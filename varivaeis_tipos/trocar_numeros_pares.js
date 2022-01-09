const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const trocarNumerosPares = array => {
    if (!array) return -1
    if (!array.length) return -1

    let evenArray = []
    array.forEach(e => {
        if (e % 2 === 0 || e === 0)
            evenArray.push(0)
        else
            evenArray.push(e)
    })

    return evenArray
}

console.log(trocarNumerosPares(array))
console.log(trocarNumerosPares(array2))