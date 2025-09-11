"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mamifero = void 0;
// Mamifero.ts
const Animal_1 = require("./Animal");
class Mamifero extends Animal_1.Animal {
    emitirSom() {
        console.log(`${this.nome} faz: "grrr"`);
    }
    mover() {
        console.log(`${this.nome} está correndo.`);
    }
}
exports.Mamifero = Mamifero;
