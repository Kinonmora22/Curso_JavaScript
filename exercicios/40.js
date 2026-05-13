const score = (a, ...b) => {
    let list = []
    let c = Array.isArray(a) ? a : [a, ...b]
    for (let number of c) {
        if (number >= 0 && number < 5) {
            list.push(`${number} -> D`)
        } else if (number >= 5 && number < 7) {
            list.push(`${number} -> C`)
        } else if (number >= 7 && number < 9){
            list.push(`${number} -> B`)
        } else if (number >= 9 && number <= 10){
            list.push(`${number} -> A`)
        } else{
            list.push(`${number} -> Nota inválida`)
        }
    }return list
}

console.log(score(9,7,2,10,8,3,7,2,9,2,1,20))