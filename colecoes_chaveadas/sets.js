const uniqueNumbers = (array) => {
    let unique = new Set(array)
    return [...unique]
}

const array = [30, 30, 40, 5, 223, 2049, 3034, 5]
console.log(uniqueNumbers(array))