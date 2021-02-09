
import { Cliente } from "./Cliente.js"

export class ContaCorrente {
	static numeroContas = 0;
	/* Public */
	agencia = 0;
	/* Private */
	_cliente;
	_saldo = 0;

	set cliente(novoValor) {
		if (novoValor instanceof Cliente) {
			this._cliente = novoValor;
		}
	}

	get cliente() {
		return this._cliente;
	}	

	get saldo() {
		return this._cliente;
	}

	constructor(agencia, cliente) {
		this.agencia = agencia;
		this.cliente = cliente;
		ContaCorrente.numeroContas += 1;
	}

	sacar(valor) {
		if (this._saldo >= valor) {
			this._saldo -= valor;
			return valor;
		}
	}

	depositar(valor) {
		if (valor < 0) {
			return;
		}

		this._saldo += valor;
	}

	transferir(valor, conta) {
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);
	}
}