const fs = require('fs'); // file system module

fs.readFile('arquivo.txt', 'utf-8', (err, data) => {
    if (err){
        console.log(err)
        return;
    } else {
        console.log(data);
    }
});

// a função readFile recebe obrigatoriamente 3 argumentos:
// 1. o nome do arquivo a ser lido
// 2. o encoding do arquivo (utf-8, ascii, etc)
// 3. uma função de callback que recebe 2 argumentos:
//    - um erro, caso ocorra
//    - o conteúdo do arquivo, caso não ocorra erro
