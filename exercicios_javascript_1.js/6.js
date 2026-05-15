const juros_simples = (a, b, c) => {
    let montante = (a * b) / 100
    return ((Number((montante * c + a).toFixed(2))))
}

console.log(juros_simples(2400, 10, 4))

const juros_compostos = (a, b, c) => {
    let montante = b / 100
    let montante_final = a * ((1 + montante) ** c)
    return Number((montante_final).toFixed(2))
}
console.log(juros_compostos(2400, 10, 4))