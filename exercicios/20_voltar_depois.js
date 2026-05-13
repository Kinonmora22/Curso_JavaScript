const program = (a) => {
    let arr = [100,50,10,5,1]
    let i = 0
    let i1 = 0
    list = []
    list1 = []
    for (number in arr){
        let divisao = (Math.floor(a / arr[i]))
        list.push(divisao)
        i++
    }
    for (number of list){
        let resto = (Math.floor(a % arr[i1]))
        if (number != 0){
            list1.push(resto)
            console.log(list1)
            i1++
        }
}return(list1)

}
console.log(program(36))