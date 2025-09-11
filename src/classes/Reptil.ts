// Reptil.ts
import { Animal } from "./Animal";
export class Reptil extends Animal {
 emitirSom(): void {
 console.log(`${this.nome} sibila: "ssss"`);
 }
 mover(): void {
 console.log(`${this.nome} está rastejando.`);
 }
}
