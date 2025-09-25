import { Mamifero } from "./classes/Mamifero";
import { Ave } from "./classes/Ave";
import { Reptil } from "./classes/Reptil";
import { Inventario } from "./managers/Inventario";

const inventario = new Inventario();

const leao = new Mamifero("Leão", 5);
const arara = new Ave("Arara Azul", 2);
const cobra = new Reptil("Cobra Coral", 4);
const pardal = new Ave("Pardal", 2);

inventario.adicionar(leao);
inventario.adicionar(arara);
inventario.adicionar(cobra);
inventario.adicionar(pardal);

inventario.listar();

inventario.interagirTodos();

inventario.contarClasses();

inventario.removerAnimal("Cobra Coral");

inventario.listar();
 console.log("Após remoção:");
inventario.contarClasses();

