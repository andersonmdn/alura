const BotaoConclui = () => { 
	const botaoConclui = document.createElement('button')  
	
	botaoConclui.classList.add('button')
	botaoConclui.classList.add('button--check')
	botaoConclui.innerText = 'Concluir Tarefa'
	
	botaoConclui.addEventListener('click', concluirTarefa)
	
	return botaoConclui
}

const concluirTarefa = (evento) => {
	const botaoConclui = evento.target
	
	const tarefaCompleta = botaoConclui.parentElement.parentElement
	
	botaoConclui.innerText = botaoConclui.innerText == "Concluir Tarefa" ? "Abrir Tarefa" : "Concluir Tarefa";
	
	tarefaCompleta.classList.toggle('list__item--done')
}

export default BotaoConclui

