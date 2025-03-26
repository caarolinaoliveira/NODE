import inquirer from "inquirer";
import chalk from "chalk";

inquirer
  .prompt([
    {
      name: "número 1",
      message: "Digite o primeiro número:",
    },
    {
      name: "número 2",
      message: "Digite o segundo número:",
    },
  ])
  .then((respostas) => {
    console.log(
      chalk.black.bgYellow(
        `a soma entre {respostas['número 1']} e ${respostas["número 2"]} é: ${
          parseInt(respostas["número 1"]) + parseInt(respostas["número 2"])
        }`
      )
    );
  })
  .catch((erro) => {
    console.log(erro);
  });
