# CSS Architecture
Projeto de site responsivo Fruta&Fruto, desenvolvido durante o curso da Alura sobre "Arquitetura CSS".

Para o desenvolvimento do projeto e organização dos arquivos foram utilizadas as metodologias Atomic Design e BEM(Block Element Modifier).

## Mobile
<div align="center">
  <img src="_readme_/Mobile.gif" alt="Apeperia Mobile" width="200">
</div>

## Tablet
<div align="center">
  <img src="_readme_/Tablet.gif" alt="Apeperia Tablet" width="400">
</div>

## Desktop
<div align="center">
  <img src="_readme_/Web.gif" alt="Apeperia Tablet" width="800">
  </br>
  </br>
</div>

## Curso/Course
[Arquitetura CSS: Descomplicando os problemas | Alura](https://cursos.alura.com.br/course/arquitetura-css)

## Linguagens e Ferramentas/ Languages and Tools
![Badge](https://img.shields.io/badge/-HTML-E34F26?style=for-the-badge&logo=html5&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-GIT-F1502F?style=for-the-badge&logo=git&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-GITHUB-000000?style=for-the-badge&logo=github&logoColor=ffffff)

## Aprendido durante o Curso / Learned during the Course
- Organizar a estrutura de arquivos CSS
	- Metodologia Atomic Design
		- Átomo: Tags
		- Moléculas: Junção de Vários Atomos
		- Organismos: Junção de Várias Moléculas
		- Templates: Junção de Vários Organismos (Informações não reais)
		- Páginas: Junção de Vários Organismos (Informações reais)
	- Metodologia BEM(Block Element Modifier)
- Media Queries
	- Celular
		```css3
		@media screen and (min-width: 0) {
			...
		}
		```
	- Tablet
		```css3
		@media screen and (min-width: 768px) {
			...
		}
		```
	- Computador
		```css3
		@media screen and (min-width: 992px) {
			...
		}
		```