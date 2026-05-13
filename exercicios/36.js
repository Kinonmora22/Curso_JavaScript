const multiplication1 = (a, ...b) => {
    let c = Array.isArray(a) ? a : [a, ...b]
    let list = []
    for (let numbers of c) {
        list.push(numbers * b.at(-1))
    } list.pop()
    return list
}
console.log(multiplication1(1, 2, 3, 4, 5, 6, 10))

const multiplication2 = (a, ...b) => {
    let c = Array.isArray(a) ? a : [a, ...b]
    let list = []
    for (let numbers of c) {
        if (numbers > 5) {
            list.push(numbers * b.at(-1))
        } else if (numbers <= 5) {
            list.push(numbers)
        }
    } list.pop()
    return list
}

console.log(multiplication2(1, 2, 3, 4, 5, 6, 10))