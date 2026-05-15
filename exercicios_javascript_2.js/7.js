const estaEntre = (a, b, c, d = false) => {
    if (d == true){
        return console.log(c >= a && c <= b)
    }return console.log(c > a && c < b)
}

estaEntre(10, 100, 50)
estaEntre(16, 100, 160)
estaEntre(3, 150, 3)
estaEntre(3, 150, 3, true)