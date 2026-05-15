const moedas = (valor) => {
    let moedas = [100, 50, 25, 10, 5, 1]

    for (let moeda of moedas) {
        let qtd_moedas = Math.floor(valor / moeda)

        if (qtd_moedas > 0) {
            console.log(`${qtd_moedas} moeda(s) de R$ ${(String((moeda / 100).toFixed(2)).replace(".", ","))}`)
        }

        valor = valor % moeda
    }
}
moedas(187)