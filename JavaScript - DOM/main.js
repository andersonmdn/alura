import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

const criarTarefa = (evento) => {
	evento.preventDefault()
	
	const lista = document.querySelector('[data-list]')
	const input = document.querySelector('[data-form-input]')
	const valor = input.value

	if (!valor) {
		return 
	}
	
	const tarefa = document.createElement('li')
	const buttons = document.createElement('div')
	
	tarefa.classList.add('list__item')
	buttons.classList.add('list__item__buttons')
	const conteudo = `<p class="content">${valor}</p>`
	
	tarefa.innerHTML = conteudo
	
	buttons.appendChild(BotaoConclui())
	buttons.appendChild(BotaoDeleta())
	tarefa.appendChild(buttons)
	lista.appendChild(tarefa)
	input.value = " "
	
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)