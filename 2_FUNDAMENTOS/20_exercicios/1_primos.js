// número primo, divisivel por ele mesmo e 1 apenas
// 1 não é número primo

function isPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false; // se ele é divisivel por esses números, ele não é primo
  }
  return true;
}

console.log(isPrimo(3));
console.log(isPrimo(5));
console.log(isPrimo(20));
console.log(isPrimo(151));
console.log(isPrimo(100));
