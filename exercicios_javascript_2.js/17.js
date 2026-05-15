const despesasTotais =(itens) => {
let total = 0
for (let item of itens)
total += item.preco
return console.log(total)
}

despesasTotais([{nome: "Jornal online", categoria: "Informação", preco: 89.99},{nome: "Cinema", categoria: "Entretenimento", preco: 150}])
despesasTotais([{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}])