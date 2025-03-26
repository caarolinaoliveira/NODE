/*  1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto

 2 - À Vista no cartão de crédito, recebe 10% de desconto

 3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros

 4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10% */

const inquirer = require('inquirer');

inquirer.prompt([{
    name: "valor",
    message: "Digite o valor do produto: "
}, {
    name: "forma de pagamento",
    message: "Digite a forma de pagamento: \n (1) Dinheiro ou pix \n (2) À vista no cartão de crédito \n (3) Parcelado em 2x \n (4) Parcelado em 3x ou mais "
}]).then((respostas) => {
    var valor = parseFloat(respostas['valor']);
    var pagamento = parseFloat(respostas['forma de pagamento'])

    switch(pagamento){
        case 1: {
            console.log("À Vista em Dinheiro ou Pix, recebe 15% de desconto ")
            console.log(`Valor Original: ${valor} \n Valor Final: ${valor*0.85} `)
            break;
        } 
        case 2: {
            console.log("À Vista no cartão de crédito, recebe 10% de desconto ")
            console.log(`Valor Original: ${valor} \n Valor Final: ${valor*0.90} `)
            break;
        }
        case 3: {
            console.log("Parcelado no cartão em duas vezes, preço normal do produto sem juros ")
            console.log(`Valor ${valor} \n `)
            break;
        }
        case 4: {
            console.log(" Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%")
            console.log(`Valor Original ${valor} \n Valor final: ${valor*1.1.toFixed(2)} `)
            break;
        }
        default:
            console.log("valor inválido")
            break;
    }
})