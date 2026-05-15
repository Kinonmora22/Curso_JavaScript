const contarCaractere = (a, b) => {
    let c = b.split(a)
    return c.length - 1
}
console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo")
)