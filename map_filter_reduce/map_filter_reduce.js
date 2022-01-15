const array = [1, 2, 3, 4, 5, 6]

const newArray = array.map(item => item * 2)
const arrayAux = []
const newArray2 = array.forEach(item => arrayAux.push(item * 2))

console.log(array)
console.log(newArray)
console.log(newArray2)
console.log(arrayAux)

/* ---------------------------------------------------------------- */

const arrayFiltrado = array.filter(number => number % 2 === 0)
console.log(arrayFiltrado)

/* ---------------------------------------------------------------- */

const total = array.reduce((acumulador, valorAtual) => acumulador += valorAtual, 0)

const total2 = array.reduce((acumulador, valorAtual) => acumulador += valorAtual, 20)

console.log(total)
console.log(total2)