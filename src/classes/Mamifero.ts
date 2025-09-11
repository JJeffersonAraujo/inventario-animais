// Mamifero.ts
import { Animal } from "./Animal";
export class Mamifero extends Animal {
 emitirSom(): void {
 console.log(`${this.nome} faz: "grrr"`);
 }
 mover(): void {
 console.log(`${this.nome} está correndo.`);
 }
}
