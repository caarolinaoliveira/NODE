// uma palavra que invertida é igual
// separar por caracter split
// inverter reverse
//unir join
function isPalindromo(str) {
  let strInvertido = str.split("").reverse().join("");
  return strInvertido === str;
}

console.log(isPalindromo("radar"));


function inverterString(str){
    let strInvertido = str.split('').reverse().join('')
    return strInvertido
}

console.log(inverterString("carol"))