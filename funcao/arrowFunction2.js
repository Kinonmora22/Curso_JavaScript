function Pessoa() {
    let idade = 0

    setInterval(() => {
        idade++
        console.log(idade)
    }, 1000)
}

new Pessoa 