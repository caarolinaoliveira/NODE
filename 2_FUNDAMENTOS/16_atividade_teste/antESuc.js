// 

x = 6;
a= x-1;
s= x+1;

function antESuc(x){
    console.log(`o antecessor de ${x} é ${x-1} e o seu sucessor é ${x+1}`)
}


antESuc(x);


//inquirer

const inquirer = require('inquirer');

inquirer.prompt([{
    name: "num",
    message:"digite o número"
}]).then((resposta) =>{
    n = parseInt(resposta["num"]);
    a = n-1;
    s = n +1;

    console.log(` o antecessor de ${n} é ${a} e seu sucessor é ${s}`)

})