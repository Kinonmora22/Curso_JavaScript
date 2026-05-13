const vector_counter = (first, ...rest) => {
    let a = Array.isArray(first) ? first : [first, ...rest];
    let ten = 0
    let twenty = 0
    let total = a.length
    for (let number of a) {
        if (number % 10 == 0) {
            ten++
        }if (number % 20 == 0) {
            twenty++
        }
    }
    return ([ten, twenty, (total - (ten + twenty )) ])
}
let vector = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(vector_counter(vector))