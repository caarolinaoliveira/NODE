// 1 = 1
// 11 = 2
// 111 =3

function somaDigitos(n) {
  var arr = [];
  arr = n.toString().split("").map(Number);
  console.log(arr);
  var soma = 0;
  for (let i = 0; i < arr.length; i++) {
     soma = arr[i] + soma;
  }
  return soma;
}

console.log(somaDigitos(111));
