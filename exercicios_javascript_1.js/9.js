let lista = []
let i = 0
while (i < 100) {
    i += 5
    let novo_valor = i
    lista.push(novo_valor)
}

const notas = (numero) => {
    if (numero < 38) {
        return console.log(`Sua nota foi: ${numero}
Você foi reprovado.`)
    }
    const mais_perto =
        Math.min(...lista.filter(n => n >= numero))

    if ((mais_perto - numero) < 3) {
        numero = mais_perto
        return console.log(`Sua nota foi: ${mais_perto}
Você foi aprovado!🥳`)
    }

}

notas(39)