// 4! = 4 * 3 * 2 * 1

function calcFatorial(n) {
  let resultado = 1;
  for (let i = n; i > 0; i--) {
    resultado *= i;
  }
  return resultado;
}

console.log(calcFatorial(4));
