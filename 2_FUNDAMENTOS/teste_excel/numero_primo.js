// quando um numero só é divisivel por 1 e por ele mesmo

function isPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrimo(2));
console.log(isPrimo(5));
console.log(isPrimo(7));
console.log(isPrimo(151));
console.log(isPrimo(200));
console.log(isPrimo(152));
