const arithmetic_average = (a, ...b) => {
    c = Array.isArray(a)? a: [a, ...b]
    let total = 0
    for (let i = 0; i < c.length; i++) {
        total += c[i]
    }
    return total
}
let vector = [2,1,30,1230]
console.log(arithmetic_average(vector))