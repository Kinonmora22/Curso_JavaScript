const cedulas = (valor) => {
    let notas = [100, 50, 10, 5, 1]

    for (let nota of notas) {

        let qtd_notas = Math.floor(valor / nota)

        if (qtd_notas > 0) {
            console.log(`${qtd_notas} nota(s) de R$ ${nota}`)
        }

        valor = valor % nota
    }
}

cedulas(18)