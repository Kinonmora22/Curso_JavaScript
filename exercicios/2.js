const lados = (a, b, c) => {
    if (a == b && a == c)
        return 'Equilátero'
    if ((a == b && a != c) || (a == c && a != b))
        return 'Isósceles'
    else
        return 'Escaleno'
}
console.log(lados(3, 3, 3))