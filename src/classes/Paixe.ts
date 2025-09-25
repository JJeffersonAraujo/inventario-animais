// Peixe.ts
import { Animal } from "./Animal";
export class Peixe extends Animal {
 emitirSom(): void {
 console.log(`${this.nome} faz: ""blub blub"`);
 }
 mover(): void {
 console.log(`${this.nome} está nadando.`);
 }
}
