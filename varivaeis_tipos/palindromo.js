const palindromo = 'otto'
const naoPalindromo = 'Qualquer frase que não é'

const verificaPalindromo = string => {
    if (!string) return 'Informe uma String'

    return string === string.split('').reverse().join('')
}

console.log(verificaPalindromo())
console.log(verificaPalindromo(palindromo))
console.log(verificaPalindromo(naoPalindromo))

console.log('------------------')

const verificaPalindromo2 = string => {
    if (!string) return 'Informe uma String'

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false
        }
    }

    return true
}

console.log(verificaPalindromo2())
console.log(verificaPalindromo2(palindromo))
console.log(verificaPalindromo2(naoPalindromo))