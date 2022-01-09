let n1 = 1
let n2 = 2

const comparaNumeros = (n1, n2) => {
    let iguais = n1 === n2 ? 'são' : 'não são'
    let soma = n1 + n2
    let somaMaiorQue10 = soma > 10 ? 'maior' : 'menor'
    let somaMenorQue20 = soma < 20 ? 'menor' : 'maior'

    return `Os números ${n1} e ${n2} ${iguais} iguais. Sua soma é ${soma}, que é ${somaMaiorQue10} que 10 e ${somaMenorQue20} que 20`
}

console.log(comparaNumeros(n1, n2))