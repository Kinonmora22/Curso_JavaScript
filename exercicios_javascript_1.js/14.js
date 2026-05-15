const frutas = function (dia) {
    switch ((dia)) {
        case 'maçã':
            return console.log('não vendemos esta fruta aqui.')
        case 'kiwi':
            return console.log('Estamos com escassez de kiwis.')
        case 'melancia':
            return console.log('Aqui está, são 3 reais o quilo.')
        default:
            return console.log('Erro')
    }
}
frutas('maçã')