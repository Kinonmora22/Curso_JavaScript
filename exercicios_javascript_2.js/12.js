const filtrarNumeros = (a, ...b) => {
    list = []
    for (numbers of a){
        if (typeof numbers == 'number')
            list.push(numbers)
    }return console.log(list)
}

filtrarNumeros(["Javascript", 1, "3", "Web", 20])
filtrarNumeros(["a", "c"])