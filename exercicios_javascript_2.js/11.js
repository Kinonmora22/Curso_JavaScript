const removerPropriedade = (a, b) => {
    const copia = {...a}

    delete copia[b]
    return console.log(copia)
}
removerPropriedade({a: 1, b: 2}, "a")