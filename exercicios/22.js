const meses = require('./importacao22')

const juros_compostos = (valor, mes) => {
    if (mes < 1 || mes > 12) {
        return 'Mês inválido'
    }

    const juros = 0.05
    const montante_final = valor * (1 + juros) ** (mes - 1)

    return `Mês pago: ${meses[mes - 1]}
Valor final: R$ ${montante_final.toFixed(2)}
`
}

console.log(juros_compostos(100, 3))