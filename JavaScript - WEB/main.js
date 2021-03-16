import { handleNovoItem } from './componentes/criaTarefa.js'

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)

const setInitialDate = () => {
	var today = new Date();
	document.querySelector('[data-form-datetime]').value = moment(today).format(moment.HTML5_FMT.DATETIME_LOCAL);
}

setInitialDate();