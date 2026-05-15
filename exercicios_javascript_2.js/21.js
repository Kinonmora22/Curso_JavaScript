const funcaoDaSorte = (a) => {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    let randomizer = Number((Math.random() * 10).toFixed(0))
    if (a == randomizer){
        return `Parabéns! O número sorteado foi o ${randomizer}`
    }else if (a != randomizer){
        return `Que pena! O número sorteado foi o ${randomizer}`
    }
}
console.log(funcaoDaSorte(10))