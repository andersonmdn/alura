import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'

export const handleNovoItem = (evento) => {
	evento.preventDefault()
	const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

	const lista = document.querySelector('[data-list]')
	const input = document.querySelector('[data-form-input]')
	const valor = input.value

	const calendario = document.querySelector('[data-form-datetime]')
	const data = moment(calendario.value)

	if (!valor) {
		return 
	}

	const dados = {
		text: valor,
		data
	}

	lista.appendChild(Tarefa(dados))

	const tarefasAtualizadas = [...tarefas, dados]

	localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas))

	input.value = ""
}

export const Tarefa = (dados) => {
	const tarefa = document.createElement('li')
	const buttons = document.createElement('div')
	
	tarefa.classList.add('list__item')
	buttons.classList.add('list__item__buttons')
	const conteudo = `<p class="content">${dados.data.format('DD/MM/YYYY')} | ${dados.text}</p>`
	
	tarefa.innerHTML = conteudo
	
	buttons.appendChild(BotaoConclui())
	buttons.appendChild(BotaoDeleta())
	tarefa.appendChild(buttons)

	return tarefa;
}