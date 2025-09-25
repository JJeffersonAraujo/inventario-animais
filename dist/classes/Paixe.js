"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Peixe = void 0;
// Peixe.ts
const Animal_1 = require("./Animal");
class Peixe extends Animal_1.Animal {
    emitirSom() {
        console.log(`${this.nome} faz: ""blub blub"`);
    }
    mover() {
        console.log(`${this.nome} está nadando.`);
    }
}
exports.Peixe = Peixe;
