// npm init 

// npm install minimist

const minimist = require('minimist');
//externo
const args = minimist(process.argv.slice(2));

//interno

const soma = require('./soma.js').soma;
soma(2,2)