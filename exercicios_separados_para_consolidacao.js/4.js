function Filme(titulo, duracao, genero) {
    this.titulo = titulo
    this.duracao = duracao
    this.genero = genero
}

const filme1 = new Filme("Interestelar", 169, "Ficção Científica")

console.log(filme1)


function novo(f, ...params) {
    const obj = {}

    obj.__proto__ = f.prototype

    f.apply(obj, params)

    return obj
}

const filme2 = novo(Filme, "Shrek", 90, "Comédia")

console.log(filme2)