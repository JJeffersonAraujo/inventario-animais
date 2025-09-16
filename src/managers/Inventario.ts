import { Animal } from "../classes/Animal";
export class Inventario {
 private animais: Animal[] = [];
 adicionar(animal: Animal) {
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






 removerPorNome(nome: string) {
  const indice = this.animais.findIndex(a => a.nome === nome);
  if (indice !== -1) {
    const removido = this.animais.splice(indice, 1)[0];
    console.log(`Animal removido: ${removido.nome} (${removido.constructor.name})`);
  } else {
    console.log(`Nenhum animal com o nome "${nome}" foi encontrado.`);
  }
}
contarPorTipo() {
  const contagem: { [tipo: string]: number } = {};

  for (const a of this.animais) {
    const tipo = a.constructor.name;
    contagem[tipo] = (contagem[tipo] || 0) + 1;
  }

  console.log("=== Quantidade de Animais por Tipo ===");
  for (const tipo in contagem) {
    console.log(`${tipo}: ${contagem[tipo]}`);
  }
}





}
