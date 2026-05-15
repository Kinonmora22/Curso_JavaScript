const automobilistica = function (automoveis) {
    switch ((automoveis)) {
        case 'hatch':
            return console.log('compra efetuada com sucesso.')
        case 'sedans' || 'motocicletas' || 'caminhonetes':
            return console.log('Tem certeza que não prefere este modelo?')
        default:
            return console.log('Não trabalhamos com este tipo de automóvel aqui.')
    }
}
automobilistica('hatch')