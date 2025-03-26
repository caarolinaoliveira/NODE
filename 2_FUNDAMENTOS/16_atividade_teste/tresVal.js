let a =1 ;
let b =2;
let c =3;

let numbers = [ 1, 3, 2];
console.log(numbers.sort()); 


// inquirer

const inquirer = require('inquirer');

inquirer.prompt([{
    name: "numero 1",
    message: "Digite o primeiro número"
}, {
    name: "numero 2",
    message: "digite o segundo número"
}, {
    name: "numero 3",
    message: "digite o terceiro numero"
}]).then((respostas) => {
    let n1 = parseInt(respostas['numero 1']);
    let n2 = parseInt(respostas['numero 2']);
    let n3 = parseInt(respostas['numero 3']);
    let listaNumbers = [];
    listaNumbers.push(n1, n2, n3);
    console.log(listaNumbers.sort())
}    ) 
