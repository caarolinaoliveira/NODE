// split
// array

var arg = [9, 5, 2, 5, 7, 3, 2, 1, 0];
function ordenarArray(arg) {
  var arrayOrdenado = arg.sort((a, b) => b - a);
  console.log(arrayOrdenado);
}

ordenarArray(arg);
