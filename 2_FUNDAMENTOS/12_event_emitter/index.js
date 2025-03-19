// o event emitter é um padrão de projeto que permite a comunicação entre objetos
// ele é baseado em eventos, que são emitidos e escutados
// um objeto emissor de eventos emite um evento
// e um objeto ouvinte escuta esse evento
// para usar o event emitter, é necessário importar o módulo events
// e criar um objeto EventEmitter

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
    console.log("Durante");
})

console.log("Antes");

eventEmitter.emit("start");

console.log("Depois");