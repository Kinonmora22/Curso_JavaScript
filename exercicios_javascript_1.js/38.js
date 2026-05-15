const odd = (a, b) => {
    let list = []
    if (b == undefined && a == undefined) {
        a = 0, b = 100
    }
    if (a == b){
        return `Passe parâmetros diferentes ou não passe nenhum. (padrão 0 a 100)`
    }
        if (b > a) {
            for (let i = a; i < b + 1; i++) {
                if (i % 2 != 0) {
                    list.push(i)
                }
            }

        }
        else if (b < a) {
            for (let i = b; i < a + 1; i++) {
                if (i % 2 != 0) {
                    list.push(i)
                }
            }
        }
        return list
    }

console.log(odd(10,10))