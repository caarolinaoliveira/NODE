var salario_minimo = 1.300;
var salario = 4.700;

function salarios( salario, salario_minimo){
    r = salario / salario_minimo;
    console.log(`quantos salários: ${r.toFixed(2)}`)
}

salarios(salario, salario_minimo)


//inquirer

const inquirer = require('inquirer')


inquirer.prompt([{
    name: "salario minimo",
    message: "digite o valor do salário mínimo: "
}, {
    name: "salario",
    message: "Digite o valor do salário: "
}]).then((respostas)=>{
    salarioMin = parseFloat(respostas["salario minimo"])
    salario = parseFloat(respostas["salario"])
    r = salario / salario_minimo;

    console.log(`O usuário recebe ${r.toFixed(2)} salários mínimos`)
})