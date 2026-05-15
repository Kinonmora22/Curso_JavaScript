const nomeDoMes = (a) => {
    let meses = ['janeiro', 'fevereiro',
        'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro',
        'outubro', 'novembro', 'dezembro']

    return console.log(meses[a - 1])
}
nomeDoMes(1)
nomeDoMes(4)