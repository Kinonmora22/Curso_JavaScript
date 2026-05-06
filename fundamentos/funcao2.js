const imprimirSoma = function (a, b) {
    console.log(a+b)
}


imprimirSoma(2, 3)
//funcao arrow

const soma = (a,b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(10, 20))

const imprimir2 = a => console.log(a)
imprimir2('LEGAL!')


const dobro = a => console.log(a * 2)

dobro(4)