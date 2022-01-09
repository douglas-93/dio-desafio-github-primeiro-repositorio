var currentNumberWrapper = document.querySelector('#currentNumber')
var incrementButtom = document.querySelector('#adicionar')
var decrementButtom = document.querySelector('#subtrair')
var currentNumber = 0

incrementButtom.addEventListener('click', checkIncrementNumber)
decrementButtom.addEventListener('click', checkDecrementNumber)

function increment() {
    currentNumber++
    colorNumber(currentNumber)
    currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
    currentNumber--
    colorNumber(currentNumber)
    currentNumberWrapper.innerHTML = currentNumber
}

function checkIncrementNumber() {
    if (currentNumber >= 10) {
        incrementButtom.disabled = true
    } else {
        decrementButtom.disabled = false
        increment()
    }
}

function checkDecrementNumber() {
    if (currentNumber <= -10) {
        decrementButtom.disabled = true
    } else {
        incrementButtom.disabled = false
        decrement()
    }
}

function colorNumber(number) {
    if (number > 0) {
        currentNumberWrapper.style.color = '#41A346'
    } else if (number < 0) {
        currentNumberWrapper.style.color = '#A81919'
    } else {
        currentNumberWrapper.style.color = '#000000'
    }
}