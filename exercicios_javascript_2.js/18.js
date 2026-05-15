const calcularMedia = (a, ...b) => {
    let c = Array.isArray(a) ? a : [a, ...b]
    let soma = 0
    for (let i = 0; i < c.length; i++) {
        soma += c[i]
    } return (soma / c.length)
}
console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))