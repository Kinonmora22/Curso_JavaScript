const receberMelhorEstudante = (a, b) => {
    let list = []
    let list_num = []
    for (let i in a) {
        list_num.push([i, a[i]])

    } for (let index = 0; index < list_num.length; index++) {
        let p = list_num[index]
        let soma = p[1].reduce((c, d) => c + d, 0);
        list.push([p[0], (soma / p[1].length)])
    } let sorted_list = (list.sort((a, b) => b[1] - a[1]))
    return ({ nome: sorted_list[0][0], media: sorted_list[0][1] })
}

console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}))