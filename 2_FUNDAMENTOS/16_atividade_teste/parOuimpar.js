// recebe um valor e ve se é par ou impar 

let a = 1; 

function parOuImpar(a){
    if (a%2 == 0){
        console.log("o número é par");
    } else if (a%2 ==1){
        console.log("o número é impar")
    } else{
        console.log("inválido")
    }
}

parOuImpar(a)

// inquirer

const inquirer = require('inquirer');

inquirer.prompt([{
    name: "numero",
    message: "Digite o número:"
}]).then((resposta) => {
    n = parseFloat(resposta["numero"])
    if (n%2 == 0){
        console.log("é par")
    } else if (n % 2 ==1){
        console.log("é impar")
    } else {
        console.log("inválido")
    }
})