const fs = require("fs");

console.log("inicio")

fs.writeFile("arquivo.txt", "conteudo do arquivo", (err) => {
    setTimeout(() => {
        console.log("arquivo criado")
    }, 3000)
})

console.log("fim")