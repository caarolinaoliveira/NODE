import chalk from "chalk"
 
const nota = 7
 
if(nota<=7){
    console.log(chalk.bgGreen.italic.underline('Você está aprovado'))
}else{
    console.log(chalk.bgRed.bold.yellow('Você está reprovado'))
}