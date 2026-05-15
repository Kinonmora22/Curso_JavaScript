let vector = [1,2,3,4,5,6,7,6,8,9,10,11,12,13,14,15]
let even = 0
var odd = 0
for (let number in vector) {
    if (number == '0') continue
    if (number % 2 == 0) {
        even++
    } else if (number % 2 != 0) {
        odd++
    }
    }
console.log(even, odd)