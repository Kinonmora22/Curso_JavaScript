function area(largura, altura) {
    const area = largura * altura
    if (area >20) {
        return console.log(`Valor acima do permitido: ${area}m2`)
    }
    return console.log(`${area}m2`)
}

area(6,3)