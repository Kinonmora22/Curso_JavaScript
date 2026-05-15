const imprimirDia = function (dia) {
    switch (Math.floor(dia)) {
        case 7:
            return console.log('Sábado')
            break
        case 6:
            return console.log('Sexta')
            break
        case 5:
            return console.log('Quinta')
            break
        case 4:
            return console.log('Quarta')
            break
        case 3:
            return console.log('Terça')
            break
        case 2:
            return console.log('Segunda')
            break
        case 1:
            return console.log('Domingo')
            break

        default:
            return console.log('Dia inválido')
    }
}

imprimirDia(8)