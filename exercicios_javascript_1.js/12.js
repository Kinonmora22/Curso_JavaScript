function fatorialIterativo(n) {
  if (n < 0) return undefined
  let resultado = 1
  for (let i = n; i > 1; i--) {
    resultado *= i
  }
  return resultado;
}

console.log(fatorialIterativo(5))