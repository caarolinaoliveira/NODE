// import inquirer from 'inquirer';
const inquirer = require('inquirer');

inquirer.prompt([{
    name: 'tipo de calculo',
    message: 'Qual tipo de cálculo você deseja fazer? (soma, subtração, multiplicação, divisão)'},{
    name: 'número 1',
    message: 'Digite o primeiro número:'
},{
    name: 'número 2',
    message: 'Digite o segundo número:'
    }]).then((responses) => {
    const num1 = parseFloat(responses['número 1']);
    const num2 = parseFloat(responses['número 2']);
    let resultado;
    switch (responses['tipo de calculo']) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtração':
            resultado = num1 - num2;
            break;
        case 'multiplicação':
            resultado = num1 * num2;
            break;
        case 'divisão':
            resultado = num1 / num2;
            break;
        default:
            console.log('Tipo de cálculo inválido');
            return;
    }
    console.log(`O resultado da ${responses['tipo de calculo']} entre ${num1} e ${num2} é: ${resultado}`);
}).catch((error) => {
    console.log(error);});