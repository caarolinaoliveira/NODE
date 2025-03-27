// palindromo 
// a cadeia de caracter é a mesma invertida
// separa em array de caracter  split ''
// inverte a ordem   reverse
// junta tudo  join
// confere se é igual   ===

function isPalindromo(str){
    return str === str.split('').reverse().join('')
}

console.log(isPalindromo("carolina"))
console.log(isPalindromo("radar"))

function reverseString(str){
 var newStr = str.split('').reverse().join('')
 console.log(newStr)
}

reverseString("carolina")

