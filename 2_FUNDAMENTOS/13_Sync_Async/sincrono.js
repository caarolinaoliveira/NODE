// sync e async são formas de executar código
// sync é a execução sequencial de código
// async é a execução de código em paralelo

const fs = require("fs");

console.log("inicio")

fs.writeFileSync("arquivo.txt", "conteudo do arquivo")

console.log("fim")