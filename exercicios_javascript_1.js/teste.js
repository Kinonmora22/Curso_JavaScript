const passagens = (valor) => {
    let lugares = [50, 20, 10, 5, 1]

    for (let lugar of lugares) {
        let vagoes = Math.floor(valor / lugar)

        if (vagoes > 0) {
            console.log(`${vagoes} vagão(ões) de ${lugar} lugares`)
        }
        valor = valor % lugar
    }
}

passagens(137)