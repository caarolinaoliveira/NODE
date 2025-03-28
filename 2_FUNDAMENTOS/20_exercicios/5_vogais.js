var vogais = ["a", "e", "i", "o", "u"];
var soma = 0;

function countVogais(n) {
  var arrayString = n.split("");
  console.log(arrayString);
  for (let i = 0; i < arrayString.length; i++) {
    if (vogais.includes(arrayString[i])) {
      soma += 1;
    }
  }
  return soma;
}

console.log(countVogais("carolina"));
