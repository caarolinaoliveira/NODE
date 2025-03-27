// anagrama mesmas letras em mesmas quantidade, precisa ordenar

function isAnagrama(a, b) {
  var aOrdenado = a.toLowerCase().split("").sort().join("");
  var bOrdenado = b.toLowerCase().split("").sort().join("");
  return aOrdenado === bOrdenado;
}

console.log(isAnagrama("carol", "lorac"));



