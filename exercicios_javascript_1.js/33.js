let intVector = [1,2,3,4]
let stringVector = ['a','b','c','d']
let doubleVector = [1.1,2.2,3.3,4.4]

let uniao = intVector.concat(stringVector,doubleVector)
let uniao2 = stringVector.concat(intVector,doubleVector)
console.log(uniao, uniao2)