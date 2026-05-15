const buscarPalavrasSemelhantes = (a, b) => {
    let list = []
    for (let i of b){
        if (i.includes(a))
            list.push(i)
    }return list
}
console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]))