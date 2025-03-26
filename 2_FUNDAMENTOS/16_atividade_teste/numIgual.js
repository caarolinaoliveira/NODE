let a = 2;
let b =2;
let c;


function somaOuMultiplica(a, b){
    if(a === b){
        c = a + b; 
        console.log(`somou ${c}`)
    } else {
        c = a * b;
        console.log(`multiplicou: ${c}`)

    }
}

somaOuMultiplica(a, b)