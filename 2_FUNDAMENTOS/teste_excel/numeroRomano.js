function numeroParaRomano(numero) {
  const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const simbolos = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let romano = "";

  for (let i = 0; i < valores.length; i++) {
    console.log(valores[i]);
    while (numero >= valores[i]) {
      romano += simbolos[i];
      numero -= valores[i];
    }
  }
  return romano;
}

console.log(numeroParaRomano(1900));
