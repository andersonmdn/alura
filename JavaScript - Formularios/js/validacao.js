export function valida(input) {
	const tipoInput = input.dataset.tipo
	
	if (validadores[tipoInput]) {
		validadores[tipoInput](input)
	}

	if (input.validity.valid) {
		input.parentElement.classList.remove('input-container--invalido')
		input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
	}else{
		input.parentElement.classList.add('input-container--invalido')
		input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemErro(tipoInput, input)
	}
}

const tiposErro = [
	'valueMissing',
	'typeMismatch',
	'patternMismatch',
	'customError'
]

const mensagensErro = {
	nome: {
		valueMissing: 'O campo nome não pode estar vazio'
	},
	email: {
		valueMissing: 'O campo de email não pode estar vazio',
		typeMismatch: 'O email digitado não é valido.'
	},
	senha: {
		valueMissing: 'O campo de senha não pode estar vazio',
		patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.'
	},
	dataNascimento: {
		valueMissing: 'O campo de data de nascimento não pode estar vazio',
		customError: 'Você deve ser maior que 18 anos para se cadastrar.'
	}
}

const validadores = {
	dataNascimento:input => validaDataNascimento(input)
}

function mostraMensagemErro(tipoInput, input) {
	let mensagem = ''

	tiposErro.forEach(erro => {
		if (input.validity[erro]) {
			mensagem = mensagensErro[tipoInput][erro]
		}
	})

	return mensagem;
}

function validaDataNascimento(input) {
	const dataRecebida = new Date(input.value)
	let mensagem = ''

	if (!maiorQue18(dataRecebida)) {
		mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
	}

	input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
	const dataAtual = new Date()
	const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

	return dataMais18 <= dataAtual
}