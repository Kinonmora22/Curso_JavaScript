const bhaskara = (a, b, c) => {
    delta = (b ** 2) - 4 * a * c
    if (delta) {
        delta < 0
        return 'Delta é negativo'
    }

    x1 = (-b + delta) / 2 * a
    x2 = (-b - delta) / 2 * a

    return [x1, x2]
}

console.log(bhaskara(3, -5, 12))