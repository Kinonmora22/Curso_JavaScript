const salario = function (plano, salario) {
    switch (plano) {
        case 'A':
            return console.log(salario * 1.1)
        case 'B':
            return console.log(salario * 1.15)
        case 'C':
            return console.log(salario * 1.2)
        default:
            return console.log('Plano inválido.')
    }
}

salario('A', 2000)