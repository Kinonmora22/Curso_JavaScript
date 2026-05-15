const even = [...Array(101)]
for (number in even){
    if (number == '0') continue
    if (number % 2 == 0) {
        console.log(number)
    }
}