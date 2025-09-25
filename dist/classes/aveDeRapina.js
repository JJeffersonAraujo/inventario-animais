"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AveDeRapina = void 0;
const Ave_1 = require("./Ave");
class AveDeRapina extends Ave_1.Ave {
    caçar() {
        console.log(`${this.nome} está caçando sua presa!`);
    }
}
exports.AveDeRapina = AveDeRapina;
