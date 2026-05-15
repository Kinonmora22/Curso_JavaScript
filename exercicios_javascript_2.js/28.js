const segundoMaior = (a) => {
    let b = a.toSorted((a,b)=> b - a)
    return b.at(1)
}
console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))