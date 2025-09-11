"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ave = void 0;
// Ave.ts
const Animal_1 = require("./Animal");
class Ave extends Animal_1.Animal {
    emitirSom() {
        console.log(`${this.nome} canta: "piu piu"`);
    }
    mover() {
        console.log(`${this.nome} está voando.`);
    }
}
exports.Ave = Ave;
