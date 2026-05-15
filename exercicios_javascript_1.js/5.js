const conversor_a_real = (a) => ('R$'+(String(a.toFixed(2))).replace('.', ','))
console.log(conversor_a_real(2.51262126))