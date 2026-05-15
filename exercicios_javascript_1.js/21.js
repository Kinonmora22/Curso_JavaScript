const saude = (idade) => {
    let preco = 100
    if (idade < 10 && idade > 0) {
        return console.log(`R$${(preco + 80)}`)
    }
    else if (idade >= 10 && idade <= 30) {
        return console.log(`R$${(preco + 50)}`)
    }
    else if (idade > 30 && idade <= 60) {
        return console.log(`R$${(preco + 95)}`)
    }
    else if (idade > 60) {
        return console.log(`R$${(preco + 130)}`)
    }
    return console.log('Idade inválida.')
}
saude(15)