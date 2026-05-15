const inverter = (a) => {
    let list = []
    for (let i in a) {
        list.push([a[i], i])
    }return Object.fromEntries(list)
}
console.log(inverter({ a: 1, b: 2, c: 3 }))