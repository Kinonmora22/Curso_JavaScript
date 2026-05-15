const verificateStrings = (a, b) => {
    let transformed_a = a.toUpperCase()
    let transformed_b = b.toUpperCase()
    if (transformed_a == transformed_b) {
        return true
    }else {
        return false
    }
}
console.log(verificateStrings('has', 'HAS'))