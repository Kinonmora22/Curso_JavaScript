const inverso = (a) => {
    if (typeof a === 'boolean') {
        return console.log(!a)
    }
    if (typeof a === 'number') {
        return console.log(-a)
    }
    else {
        return console.log(`booleano ou números esperado, mas o parâmetro é do tipo ${typeof a}`)
    }
}

inverso(true)
inverso("6")
inverso(-2000)
inverso("programação")