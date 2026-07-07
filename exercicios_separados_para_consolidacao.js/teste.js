const numeros = [10, 20, 30, 40];
const numeros1 = [11, 20, 33, 40];
const l = numeros.map((n, i) => {
    if (n % 2 == 0) {
        return `${n} é par`
    } else {
        return `${n} é impar`
    }
})
const l1 = numeros1.map((n, i) => {
    if (n % 2 == 0) {
        return `${n} é par`
    } else {
        return `${n} é impar`
    }
})
console.log(l)
console.log(l1)