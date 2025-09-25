"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventario = void 0;
class Inventario {
    constructor() {
        this.animais = [];
    }
    adicionar(animal) {
        this.animais.push(animal);
    }
    listar() {
        console.log("=== Inventário de Animais ===");
        this.animais.forEach((a, i) => {
            console.log(`${i + 1}. ${a.nome} (${a.constructor.name})`);
        });
    }
    interagirTodos() {
        for (const a of this.animais) {
            a.emitirSom();
            a.mover();
        }
    }
    removerAnimal(nome) {
        const index = this.animais.findIndex(animal => animal.nome === nome);
        if (index) {
            console.log(`Removendo animal: ${nome}`);
            this.animais.splice(index, 1);
            return true;
        }
        else {
            console.log(`Animal com nome ${nome} não encontrado.`);
            return false;
        }
    }
    contarClasses() {
        const aves = this.animais.filter(animal => animal.constructor.name === "Ave").length;
        const mamiferos = this.animais.filter(animal => animal.constructor.name === "Mamifero").length;
        const peixes = this.animais.filter(animal => animal.constructor.name === "Peixe").length;
        const reptiles = this.animais.filter(animal => animal.constructor.name === "Reptil").length;
        console.log(`Total de Aves: ${aves}`);
        console.log(`Total de Mamíferos: ${mamiferos}`);
        console.log(`Total de Peixes: ${peixes}`);
        console.log(`Total de Répteis: ${reptiles}`);
    }
}
exports.Inventario = Inventario;
