// fatorial
// 4 = 4x3x2x1

function fatorial(n) {
  var soma = 1;
  for (let i = 0; i < n; n++) {
    soma = n * (n - 1);
    return soma;
  }
}

console.log(fatorial(4));
