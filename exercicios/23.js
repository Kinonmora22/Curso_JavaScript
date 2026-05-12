const nota = () => {
    let qtd_linhas = 0
    while (true) {
        let e = Math.random() * (1000 - (1)) + (1)
        let a = Number((Math.random() * (10 - (-5)) + (-5)).toFixed(2))
        let b = Number((Math.random() * (10 - (-5)) + (-5)).toFixed(2))
        let c = Number((Math.random() * (10 - (-5)) + (-5)).toFixed(2))
        let arr = [a, b, c]
        arr.sort((x, y) => x - y)
        let media = (((arr[2] * 4) + (arr[1] * 3) + (arr[0] * 3)) / 10)

        qtd_linhas++
        if (media >= 5) {
            console.log(`Código do aluno: ${(e).toFixed(0)}
Notas: ${arr.join(', ')}
Média: ${Number(media).toFixed(2)}
APROVADO
`)
        } else if (media >= 0 && media < 5) {
            console.log(`Código do aluno: ${(e).toFixed(0)}
Notas: ${arr.join(', ')}
Média: ${Number(media).toFixed(2)}
REPROVADO
`)
        } else if (media < 0) {
            console.log(`
Nota negativa: ${Number((media).toFixed(2))}
Quantia de alunos até a negatividade: ${qtd_linhas}`)
            break
        } else {
            console.log(`erro.`)
        }

    }
}
(nota())