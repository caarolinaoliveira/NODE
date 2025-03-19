import chalk from "chalk";
import inquirer from "inquirer";

inquirer
  .prompt([
    {
      name: "nome",
      message: "Qual é o seu nome?",
    },
    {
      name: "idade",
      message: "Qual é a sua idade?",
    },
  ])
  .then((respostas) => {
    console.log(chalk.black.bgYellow(`Olá, ${respostas.nome}!`));
    console.log(chalk.black.bgYellow(`Você tem ${respostas.idade} anos.`));
  })
  .catch((erro) => {
    console.log(erro);
  });