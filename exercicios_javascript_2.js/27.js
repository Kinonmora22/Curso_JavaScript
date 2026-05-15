const filtrarPorQuantidadeDeDigitos = (a, b) => {
    let list = []
    for (let i of a){
        let c = String(i).length
        if (c == b){
            list.push(i)
        }
    }return list
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))