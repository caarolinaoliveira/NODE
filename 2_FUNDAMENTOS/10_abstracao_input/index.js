const inquirer = require("inquirer");

// inquirer.prompt é uma função que recebe um array de objetos
// cada objeto é uma pergunta
// cada pergunta tem um nome e uma mensagem
// o nome é o identificador da resposta
// a mensagem é a pergunta em si
// a função retorna uma promise que resolve em um objeto
// com os nomes das perguntas como chaves e as respostas como valores
// caso ocorra um erro, a promise é rejeitada
// e o erro é passado para o catch

inquirer.prompt(
  [
    {
      name: "p1",
      message: "Qual a primeira nota?",
    },
    {
      name: "p2",
      message: "Qual a segunda nota?",
    },
  ])
    .then((answers) => {
      console.log(answers);
      const media = (parseFloat(answers.p1) + parseFloat(answers.p2)) / 2;
      console.log(`A média é ${media}`);
    })
    .catch((err) => console.log(err));
