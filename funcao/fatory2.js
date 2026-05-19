const criarProduto = (nome, preco) => {
    return ({nome, preco, desconto : 0.1})
}
console.log(criarProduto('RTX 5060',2000))