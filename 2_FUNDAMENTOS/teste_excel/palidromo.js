// mesma forma de tras para frente
// quebra em array
// reverse
// junta tudo// verifica se é igual

function isPalindromo(str) {
  var strInvertido = str.split("").reverse().join("");
  return strInvertido === str;
}

console.log(isPalindromo("A man, a plan, a canal, Panama"));
