"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reptil = void 0;
// Reptil.ts
const Animal_1 = require("./Animal");
class Reptil extends Animal_1.Animal {
    emitirSom() {
        console.log(`${this.nome} sibila: "ssss"`);
    }
    mover() {
        console.log(`${this.nome} está rastejando.`);
    }
}
exports.Reptil = Reptil;
