// var a = 5;
// var b= 6;
// var c =9;

// function mediaAritmetica(a, b,c){
//     var media = (a + b + c)/3;
//     console.log(`a média aritmética de ${a} ${b} e ${c} é ${media.toFixed(2)}`)
// }

// mediaAritmetica(a,b,c)

// const inquirer =  require('inquirer')
import inquirer from 'inquirer'

inquirer.prompt([{
    name: "num 1",
    message: "Digite o primeiro número"
},{
    name: "num 2",
    message: "Digite o segundo número"
},{
    name: "num 3",
    message: "Digite o terceiro número"
}]).then((respostas)=>{
    var n1 = parseFloat(respostas['num 1'])
    var n2 = parseFloat(respostas['num 2'])
    var n3 = parseFloat(respostas['num 3'])
    var media = (n1+n2+n3)/3
    console.log(`a média aritmética de ${n1} ${n2} e ${n3} é ${media.toFixed(2)}`)
}).catch((error)=>{
    console.log(error)
})