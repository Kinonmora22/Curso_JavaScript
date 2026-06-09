function Carro(marca, modelo, ano) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}

const carro1 = new Carro("Toyota", "Corolla", 2020)

console.log(carro1)


function novo(f, ...params) {
    const obj = {}

    obj.__proto__ = f.prototype

    f.apply(obj, params)

    return obj
}

const carro2 = novo(Carro, "Honda", "Civic", 2017)

console.log(carro2)