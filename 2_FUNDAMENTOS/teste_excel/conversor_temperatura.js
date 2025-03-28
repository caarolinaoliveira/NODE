// var celciusToFarenheit = n * 1.8 + 32;
// var celiusToKelvin = n + 273.15;
// var farenheitToCelcius = (n - 32) * 0.5556;
// var farenheitToKelvin = (n + 459.67) * (5 / 9);
// var kelvinToCelcius = n - 273.15;
// var kelvinToFarenheit = (n - 273.15) * (9 / 5) + 32;

// const inquirer = require('inquirer')
import inquirer from "inquirer";
inquirer
  .prompt([
    {
      name: "conversao",
      message:
        "Digite a conversão que deseja fazer: \n (1) para converter de Celcius para farenheit \n (2) para converter de Celcius para Kelivn \n (3) para converter de Farenheit para Celcius \n (4) para converter de Farenheit para Kelvin \n (5) para converter de Kelvin para Celcius \n (6) para converter de Kelvin para Farenheit \n",
    },
    {
      name: "n1",
      message: "Digite a temperatura",
    },
  ])
  .then((respostas) => {
    var conversao = parseInt(respostas["conversao"]);
    var n1 = parseInt(respostas["n1"]);
    switch (conversao) {
      case 1:
        console.log( `a conversao de Celcius para Farenheit é ${n1 * 1.8 + 32}`);
        break;
    }
  });
