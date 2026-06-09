function Cachorro(nome) {
    this.nome = nome
}

Cachorro.prototype.latir = function() {
    console.log(`${this.nome} fez AU AU!`)
}


const dog1 = new Cachorro('Bolt')
const dog2 = new Cachorro('Mel')

dog1.latir()
dog2.latir()