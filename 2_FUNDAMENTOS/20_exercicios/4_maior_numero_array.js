// sort?

var n = [1, 7, 9, 3, 6, 8];
function maiorNumeroArray(n) {
  var arrayOrdenado = n.sort();
  console.log(arrayOrdenado);
  var tamanhoArray = arrayOrdenado.length;
  console.log(tamanhoArray);
  console.log(arrayOrdenado[tamanhoArray-1]);
}
maiorNumeroArray(n);
