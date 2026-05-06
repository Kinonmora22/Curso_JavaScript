function imprimirSoma(a, b) {
    console .log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 10, 1152, 152, 51 ,12 , 616, 12, 5643 , 52, 325, 1, 25, 12, 31, 23)
imprimirSoma()

// função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma())
console.log(soma(1))