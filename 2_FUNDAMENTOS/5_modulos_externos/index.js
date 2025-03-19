// npm init 

// npm install minimist

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args); // imprime os argumentos passados para o script

const nome = args['nome'];
const idade = args['idade'];

console.log(nome); // imprime o valor do argumento nome
console.log(idade); // imprime o valor do argumento idade

console.log(`Olá, ${nome}! Você tem ${idade} anos.`); // imprime uma mensagem de saudação