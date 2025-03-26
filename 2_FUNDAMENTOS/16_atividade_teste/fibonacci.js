//  0 1 1 2 3 5 8 13 21 34 55 89

var a = 0;
var b = 1;
var c;

var n = 10;
console.log(a);
console.log(b);

function fibonacci(n) {
    for (var i = 2; i < n ;i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
}

fibonacci(n);