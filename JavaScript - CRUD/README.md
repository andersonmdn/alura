# JavaScript - CRUD
<!-- <div align="center">
  <img src=".readme/Screenshot_1.png" alt="App Notas" width="600">
</div> -->

## Curso/Course
[JS na web: CRUD com JavaScript assí­ncrono | Alura](https://cursos.alura.com.br/course/javascript-crud-assincrono)

## Linguagens e Ferramentas/ Languages and Tools
![Badge](https://img.shields.io/badge/-HTML-E34F26?style=for-the-badge&logo=html5&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-JavaScript-eed718?style=for-the-badge&logo=javascript&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-GIT-F1502F?style=for-the-badge&logo=git&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-GITHUB-000000?style=for-the-badge&logo=github&logoColor=ffffff)

## Aprendido durante o Curso / Learned during the Course
- Fazer requisições utilizando **xmlhttprequest**.
- Lidar com **promises**.
- Fazer uma requisição http utilizando **xmlhttprequest** para buscar todos os clientes do servidor.
- Refatorar o código utilizando **promises** melhorando a leitura do código.
- Utilizar ```template literals``` para criar um template html.

- Entender a ordem de execução do código JavaScript.
- Puxar dados do servidor utilizando a função a **fetch api** ao invés do **xmlhttprequest** para modernizar o código.
- Refatorar as responsabilidades do código pensando na manutenção da aplicação no futuro.

- Usar a método ```closest``` para encontrar o elemento do ```DOM``` mais próximo ao que queremos remover
- Criar um cliente utilizando o verbo http ```POST```.
- Remover um elemento do dom com método ```remove()```
- Deletar um cliente utilizando o verbo ```http DELETE```

- Fazer uma query string utilizando a propriedade ```serachParams.get()``` para encontrar um id.
- Criar uma IIFE ou função auto executável.
- Editar os dados utilizando o verbo http ```PUT```.

- Utilizar **async**/**await** para indicar funções assíncronas.
- Tratar erros com **try**/**catch**

## Recomendações
[Para saber mais: Promise.All - ALURA](https://cursos.alura.com.br/course/javascript-crud-assincrono/task/86449)
[Funcionamento do Ambiente JavaScript](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
[O que é REST? - ALURA](https://cursos.alura.com.br/o-que-e-rest--c119)
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