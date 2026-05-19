const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]
let notasBaixas = []
for (let n of notas){
    if (n < 7){
        notasBaixas.push(n)
    }
}
console.log(notasBaixas)

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)