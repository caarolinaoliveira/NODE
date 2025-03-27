// fibonacci
// 0 1 1 2 3 5

function fibonacci(n) {
  let fib = [0, 1];
  for (var i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.join(" ");
}

console.log(fibonacci(10));

/// opção 2

var a = 0;
var b = 1;
var c; 

console.log(a)
console.log(b)

function fibo(n){
    for(var i = 2; i<n; i++){
        c = a +b;
        a = b;
        b = c;
        console.log(c)
    }
}

fibo(10)