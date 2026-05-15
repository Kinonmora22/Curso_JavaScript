const receberSomenteOsParesDeIndicesPares = (a, ...b) => {
    let list = []
    let c = Array.isArray(a) ? a : [a, ...b]
    for (let i = 0; i < c.length; i++) {
        if (i % 2 == 0) {
            list.push(c[i])
        }
    } return console.log(list)
}

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])