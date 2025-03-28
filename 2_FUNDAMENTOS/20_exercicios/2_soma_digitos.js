// 11 = 2
//22 =4
// separa em um array de string, mapeia para Number

function somaDigitos(n) {
  let arr = [];
  arr = n.toString().split("").map(Number);
  console.log(arr);
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma = arr[i] + soma;
  }
  return soma;
}

console.log(somaDigitos(11));
