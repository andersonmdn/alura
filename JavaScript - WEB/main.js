import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

const handleNovoItem = (evento) => {
	evento.preventDefault()
	const lista = document.querySelector('[data-list]')
	const input = document.querySelector('[data-form-input]')
	const valor = input.value

	const calendario = document.querySelector('[data-form-datetime]')
	const data = moment(calendario.value)

	if (!valor) {
		return 
	}

	lista.appendChild(criarTarefa({
		text: valor,
		data
	}))
	input.value = ""
}

const criarTarefa = (dados) => {
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

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)