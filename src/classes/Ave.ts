// Ave.ts
import { Animal } from "./Animal";
export class Ave extends Animal {
 emitirSom(): void {
 console.log(`${this.nome} canta: "piu piu"`);
 }
 mover(): void {
 console.log(`${this.nome} está voando.`);
 }
}
