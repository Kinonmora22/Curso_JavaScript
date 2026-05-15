const Calculadora = function (num1, soma, num2) {
    switch ((soma)) {
        case '+':
            return console.log(num1 + num2)
        case '-':
            return console.log(num1 - num2)
        case '*':
            return console.log(num1 * num2)
        case '/':
            return console.log(num1 / num2)
        default:
            return console.log("Operação inválida.")
    }
}
Calculadora(2, '-', 1)