const lanchonete = function (codigo, quantidade) {
    switch (codigo) {
        case 100:
            return console.log(`R$${(3 * quantidade)}`)
        case 200:
            return console.log(`R$${(4 * quantidade)}`)
        case 300:
            return console.log(`R$${(5.5 * quantidade)}`)
        case 400:
            return console.log(`R$${(7.5 * quantidade)}`)
        case 500:
            return console.log(`R$${(3.5 * quantidade)}`)
        case 600:
            return console.log(`R$${(2.8 * quantidade)}`)
        default:
            console.log('Produto não existente')
    }
}

lanchonete(100, 2)