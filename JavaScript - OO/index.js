import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const clienteAnderson = new Cliente("Anderson", 15807879);
const clienteGabriela = new Cliente("Gabriela", 45464565);

const contaCorrenteAnderson = new ContaCorrente(1001, clienteAnderson);
contaCorrenteAnderson.depositar(500);
contaCorrenteAnderson.sacar(50);

const contaCorrenteGabriela = new ContaCorrente(1001, clienteGabriela);
contaCorrenteGabriela.depositar(500);
contaCorrenteGabriela.transferir(250, contaCorrenteAnderson);

console.log(contaCorrenteAnderson);
console.log(contaCorrenteGabriela);
console.log(ContaCorrente.numeroContas);