const ano_bissexto = a => {
  if (a % 400n == 0) {
    console.log(true)
  } else if (a % 100n == 0) {
    console.log(false)
  } else if (a % 4n == 0) {
    console.log(true)
  } else{
    console.log(false)
  }  
}
ano_bissexto(90089948142412515135515215123412389213791203719804710937193087128907214980236587435632489056213554124144124151514127841204217842104982174120984712094820n)