const pontuacaoTotal = (itens) => {
    let total = 0 
    for (let item of itens){
        let pontos = item.eliminacoes * item.pontosPorEliminacao
        total += pontos
        console.log(`${item.nome} -> ${pontos} pontos`)
    }console.log(`
Total -> ${total} pontos`)
}

pontuacaoTotal([
    { nome: "Kael", eliminacoes: 5, pontosPorEliminacao: 100 },
    { nome: "Luna", eliminacoes: 3, pontosPorEliminacao: 150 },
    { nome: "Dante", eliminacoes: 8, pontosPorEliminacao: 50 }
])