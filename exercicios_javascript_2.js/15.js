const checarAnoBissexto = (a) => {
    if (a % 400 == 0) {
        return console.log(true)
    }
    else if (a % 100 == 0) {
        return console.log(false)
    }
    else if (a % 4 == 0) {
        return console.log(true)
    }
    else{
        return console.log(false)
    }
}
checarAnoBissexto(2020)
checarAnoBissexto(2100)