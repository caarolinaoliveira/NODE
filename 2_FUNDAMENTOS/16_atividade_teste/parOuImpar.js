// calculadora

function soma (a, b) {
    console.log(a + b);
}
function subtracao (a, b) {
    console.log(a - b);
}
function multiplicacao(a,b){
    console.log(a * b);
}
subtracao(5, 2);
soma(2, 3);
multiplicacao(2, 3);

// é par ou impar 


const n1 = 10;
const n2 = 11;

function parOuImpar(n){
    if(n%2 == 0){
        console.log(`${n} é par`);
    } else if (n%2 == 1) {
        console.log(` ${n} é impar`);
    } else {
        console.log(` ${n} não é um número`);
    }
}
parOuImpar('a');

