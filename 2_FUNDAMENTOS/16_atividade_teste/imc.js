// cálculo de IMC 

// IMC= peso / altura* altura

const inquirer = require('inquirer');

inquirer.prompt([{
    name: "peso",
    message: "Digite o seu peso em KG: "
}, 
{
    name: "altura",
    message: "Digite a sua altura em Metros: "
}]).then((respostas) => {
    peso = parseFloat(respostas['peso']),
    altura = parseFloat(respostas['altura'])

    const imc = peso / (altura *altura);
    console.log(`o seu IMC é: ${imc}`)

    if (imc < 18.2 ){
        console.log("Abaixo do peso")
    } else if ( imc > 18.6 && imc < 24.9){
        console.log("Peso Idel: Parabéns!! ")
    } else if ( imc > 24.9 && imc < 29.9){
        console.log("Levemente acima do peso")
    } else if( imc > 30.0 && imc < 34.9){
        console.log("Obesidade grau I ")
    } else if ( imc >35.0 && imc <39.9){
        console.log("Obesidade grau II (severa) ")
    } else if ( imc >= 40){
        console.log("Obesidade grau III (mórbida)")
    } else {
        console.log("dados inválidos")
    }
})