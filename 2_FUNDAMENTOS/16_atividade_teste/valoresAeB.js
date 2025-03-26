let a = 7;
let b = 1;
let c = 10;

function soma(a, b) {
  if (a + b > c) {
    console.log(`a soma entre ${a} + ${b} é ${a + b} e é maior que ${c}`);
  } else if (a + b < c) {
    console.log(`a soma entre ${a} e ${b} é ${a + b} e é menor que ${c}`);
  } else {
    console.log("valores inválidos");
  }
}

soma(a, b);

// inquirer

const inquirer =  require('inquirer')

inquirer.prompt([
  {
    name: "número 1",
    message: "Digite o primeiro número: ",
  },
  {
    name: "número 2",
    message: "Digite o segundo número",
  },
  {
    name: "número 3",
    message: "Digite o terceiro número",
  },
]).then((mensagens) =>{
    const a = parseFloat(mensagens["número 1"]);
    const b = parseFloat(mensagens["número 2"])
    const c = parseFloat(mensagens["número 3"])
    var soma = a + b ;
    
    if(soma > c){
        console.log("é maior");
    } else if (soma< c) {
        console.log("menor")
    } else {
        console.log("inválido")
    }
});
