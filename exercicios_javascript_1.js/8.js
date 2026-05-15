let lista_pontuações = ['10', '20', '5', '30']

const verificar = (a) => {
    let numeros = a.map(Number)
    
    let recordesBatidos = 0
    let maiorPontuacao = numeros[0]
    let menorPontuacao = numeros[0]

    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] > maiorPontuacao) {
            maiorPontuacao = numeros[i]
            recordesBatidos += 1
        }

        if (numeros[i] < menorPontuacao) {
            menorPontuacao = numeros[i]
        }
    }

    return [recordesBatidos, menorPontuacao]
}

console.log(verificar(lista_pontuações))