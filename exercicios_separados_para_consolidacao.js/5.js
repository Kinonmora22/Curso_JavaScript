function Livro(titulo, autor, paginas) {
    this.titulo = titulo
    this.autor = autor
    this.paginas = paginas
}

const livro1 = new Livro("Re:Zero - Começando a vida em outro mundo Vol. 1", "Tappei Nagatsuki", "416")
console.log(livro1)



function novo(f, ...params) {
    const obj = {}

    obj.__proto__ = f.prototype

    f.apply(obj, params)

    return obj
}

const livro2 = novo(Livro, "Re:Zero - Começando a vida em outro mundo Vol. 2", "Tappei Nagatsuki", "440")
console.log(livro2)