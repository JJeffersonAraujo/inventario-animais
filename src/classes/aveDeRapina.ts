import { Ave } from "./Ave";

export abstract class AveDeRapina extends Ave {
  caçar(): void {
    console.log(`${this.nome} está caçando sua presa!`);
  }
}
