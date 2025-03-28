function numeroParaColunaExcel(numero) {
  let coluna = "";
  var resto = numero % 26;
  var primeiroCaracter = (numero - resto) / 26;

  if (numero <= 26) {
    coluna = String.fromCharCode(numero + 64); 
  } else {
    coluna =
      String.fromCharCode(primeiroCaracter + 64) +
      String.fromCharCode(resto + 65);
  }

  return coluna;
}

console.log(numeroParaColunaExcel(1)); // Saída: A
console.log(numeroParaColunaExcel(2)); // Saída: B
console.log(numeroParaColunaExcel(27)); // Saída: AA
console.log(numeroParaColunaExcel(28)); // Saída: AB
