# Flexbox

## Curso/Course
[Flexbox: Posicione elementos na tela | Alura](https://cursos.alura.com.br/course/posicione-elementos-com-flexbox)

## Linguagens e Ferramentas/ Languages and Tools
![Badge](https://img.shields.io/badge/-HTML-E34F26?style=for-the-badge&logo=html5&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-GIT-F1502F?style=for-the-badge&logo=git&logoColor=ffffff)
![Badge](https://img.shields.io/badge/-GITHUB-000000?style=for-the-badge&logo=github&logoColor=ffffff)

## Aprendido durante o Curso / Learned during the Course
### **Display: inline**
> O problema do display: inline é que os elementos não aceitam mais que seja modificada tanto a width quanto a height. Limita muito nossas possibilidades.

### **Display: inline-block**
> Permite os elementos se posicionarem um do lado do outro porém, diferentemente do display: inline ele permite que os elementos tenham sua width e height modificadas. Por esse motivo o display: inline-block é muito mais interessante na maioria dos casos do que o display: inline.

> O problema de usar display: inline-block é espaçar os elementos entre si. Para fazer isso teríamos que colocar margins e fazer contas.

### **Float: left | right**
> O float é mais complicado, ele empurra o elemento para um dos lados (left | right) e os elementos que estão embaixo sobem. Isso nem sempre é o que a gente quer. Além do mais o float não permite que usemos a propriedade vertical-align: middle para alinhar os elementos verticalmente. Ou seja, para contornar isso uma possibilidade seria ter que colocar margin-top ou bottom nos elementos e usar os temidos números mágicos!

### **Display: flex**
> O display: flex veio com o intuito de facilitar nossa vida nesses aspectos de posicionamento. Ele permite os elementos ficarem um do lado do outro, permite espaçar os elementos de forma mais intuitiva e sem ter que fazer cálculos. Além disso ele também permite alinhar os elementos verticalmente de forma fácil.

> O display flex pode ser um pouco mais complicado de usar tendo em vista que existem diversas propriedades que vem junto da especificação flexible box, todavia tudo isso foi feito para justamente melhorar nosso código.

### Justify Content
> Podemos distribuir os elementos dentro do pai de diversas formas, podemos por exemplo:

#### **Flex-end**
> Colocar todo espaço à esquerda, jogando o conteúdo para direita com **justify-content: flex-end**.

#### **Flex-start**
> Colocar todo espaço à direita, jogando o conteúdo para esquerda com **justify-content: flex-start** (que é o padrão).

#### **Center**
> Colocar todo espaço à esquerda e à direita, jogando o conteúdo para o meio com **justify-content: center**.

#### **Space-Between**
> Colocar todo espaço entre os elementos como vimos antes usando **justify-content: space-between**.

## Recomendações de Cursos
1. 