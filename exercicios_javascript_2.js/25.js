const removerVogais = (a) => {
    let vogais = 'aeiouAEIOU'
    let resultado = []

    for (let i of a) {
        if (vogais.includes(i)) { }
        else { resultado.push(i) }
    } return resultado.join('')
}
console.log(removerVogais("Cod3r"))