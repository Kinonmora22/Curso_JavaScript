const change = (a, b) => {
    let i = 0
    while (i < a.length){
        [a[i], b[i]] = [b[i], a[i]]
        i++
    }
    return `Vector 1: ${a.join(', ')}
Vector 2: ${b.join(', ')}`
}
let vector1 = [1, 2, 3, 4, 5]
let vector2 = [2, 3, 4, 5, 6]

console.log(change(vector1, vector2))
