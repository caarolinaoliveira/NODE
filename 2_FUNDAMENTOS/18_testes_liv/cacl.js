// calculadora

// const inquirer = require['inquirer']
import inquirer from "inquirer";

inquirer
  .prompt([
    {
      name: "metodo",
      message:
        "Digite qual tipo de calculo deseja fazer: (soma, subtracao, multiplcacao, divisao) ",
    },
    {
      name: "num 1",
      message: "Digite o primeiro número: ",
    },
    {
      name: "num 2",
      message: "Digite o segundo número:",
    },
  ])
  .then((respostas) => {
    var metodo = respostas["metodo"];
    var n1 = parseFloat(respostas["num 1"]);
    var n2 = parseFloat(respostas["num 2"]);
    var resultado;

    switch (metodo) {
      case "soma":
        resultado = n1 + n2;
        console.log(`a soma entre ${n1} e ${n2} é ${resultado}`);
        break;
      case "subtracao":
        resultado = n1 - n2;
        console.log(`a subtração entre ${n1} e ${n2} é ${resultado}`);
        break;
      case "multiplicacao":
        resultado = n1 * n2;
        console.log(`a multipliacao entre ${n1} e ${n2} é ${resultado}`);
        break;
      case "divisao":
        resultado = n1 * n2;
        console.log(`a divisao de ${n1} por ${n2} é ${resultado}`);
        break;
      default:
        break;
    }
  });
