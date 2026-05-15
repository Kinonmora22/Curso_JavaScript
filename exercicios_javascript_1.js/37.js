const PA = (a,b,c) => {
    let list = []
    list.push(b)
    let i = 0
    while (i < a) {
        list.push(c + list.at(-1))
        i++
    }list.pop()
    let total = 0
    for (let i = 0; i < list.length; i++) {
        total += list[i]
    }
    return `PA = ${list.join(', ')}
Total = ${total}
`
}
console.log(PA(10,2,3))

const PG = (a,b,c) => {
    let list1 = []
    list1.push(b)
    let i = 0
    while (i < a) {
        list1.push(list1.at(-1) * c)
        i++
    }list1.pop()
    let total = 0
    for (let i = 0; i < list1.length; i++) {
        total += list1[i]
    }
    return `PG = ${list1.join(', ')}
Total = ${total}
`
}
console.log(PG(10,2,3))