const somarNumeros = (a, ...b) => {
    let c = Array.isArray(a) ? a : [a, ...b]
    let list = []
    let soma = 0
    for (let i = 0; i < c.length; i++) {
        soma += c[i]
    } return console.log(soma)
}
somarNumeros([10, 10, 10])