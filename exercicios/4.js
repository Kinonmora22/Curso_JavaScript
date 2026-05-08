const imprimirdivisao = (a,b) => {
    try{
    return console.log(a / b)
    } finally {
        return console.log (a % b)
    }
}
imprimirdivisao(2,4)