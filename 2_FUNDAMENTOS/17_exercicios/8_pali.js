// palavra é a mesma invertida
// separa slip
// inverte reverse
// junta   join
function isPalindromo(a) {
  var aInvertido = a.split(" ").reverse().join(" ");
  console.log(a);
  console.log(aInvertido);
  return a === aInvertido;
}

console.log(isPalindromo("radar"));
