# JavaScript - CRUD
<!-- <div align="center">
  <img src=".readme/Screenshot_1.png" alt="App Notas" width="600">
</div> -->

## Curso/Course
[JS na web: CRUD com JavaScript ass�ncrono | Alura](https://cursos.alura.com.br/course/javascript-crud-assincrono)

## Linguagens e Ferramentas/ Languages and Tools
![Badge](https://img.shields.io/badge/-HTML-E34F26?style=for-the-badge&logo=html5&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-JavaScript-eed718?style=for-the-badge&logo=javascript&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-GIT-F1502F?style=for-the-badge&logo=git&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-GITHUB-000000?style=for-the-badge&logo=github&logoColor=ffffff)

## Aprendido durante o Curso / Learned during the Course
- Fazer requisi��es utilizando **xmlhttprequest**.
- Lidar com **promises**.
- Fazer uma requisi��o http utilizando **xmlhttprequest** para buscar todos os clientes do servidor.
- Refatorar o c�digo utilizando **promises** melhorando a leitura do c�digo.
- Utilizar ```template literals``` para criar um template html.

- Entender a ordem de execu��o do c�digo JavaScript.
- Puxar dados do servidor utilizando a fun��o a **fetch api** ao inv�s do **xmlhttprequest** para modernizar o c�digo.
- Refatorar as responsabilidades do c�digo pensando na manuten��o da aplica��o no futuro.

- Usar a m�todo ```closest``` para encontrar o elemento do ```DOM``` mais pr�ximo ao que queremos remover
- Criar um cliente utilizando o verbo http ```POST```.
- Remover um elemento do dom com m�todo ```remove()```
- Deletar um cliente utilizando o verbo ```http DELETE```

- Fazer uma query string utilizando a propriedade ```serachParams.get()``` para encontrar um id.
- Criar uma IIFE ou fun��o auto execut�vel.
- Editar os dados utilizando o verbo http ```PUT```.

- Utilizar **async**/**await** para indicar fun��es ass�ncronas.
- Tratar erros com **try**/**catch**

## Recomenda��es
[Para saber mais: Promise.All - ALURA](https://cursos.alura.com.br/course/javascript-crud-assincrono/task/86449)
[Funcionamento do Ambiente JavaScript](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
[O que � REST? - ALURA](https://cursos.alura.com.br/o-que-e-rest--c119)
## Rodando o Projeto
1. Rodar o Json Server utilizando o **Yarn** ou **NPX**:

	**Yarn**
	```bat
	yarn json-server --watch db.json
	```
	**NPX**
	```bat
	npx json-server --watch db.json
	```

2. Rodar Servidor utilizando o arquivo **lista_cliente.html**