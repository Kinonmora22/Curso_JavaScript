const algorithm = (a, ...b) => {
    let c = Array.isArray(a)? a : [a, ...b]
    let negative_counter = 0
    let numbers1 = 0
    for (let numbers of c)
        if (numbers < 0) {
            negative_counter++
        }
    return (negative_counter)
}
vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]

console.log(algorithm(vector))