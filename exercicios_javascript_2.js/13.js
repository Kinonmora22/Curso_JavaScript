const objetoParaArray = (a) => {
    let list = []
    for (let i in a)
        list.push([i, a[i]])
    return list
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}))