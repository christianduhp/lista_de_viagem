<h1> Lista de viagem </h1>

O site é uma aplicação web que permite o usuário adicionar itens com nome e quantidade a uma lista. O código utiliza HTML, CSS e JavaScript para criar os elementos da interface e manipular os dados da lista, utilizando o LocalStorage do navegador para armazenar as informações.

## Funcionalidades

O código consiste em uma aplicação web que utiliza HTML e CSS para criar a interface de usuário e JavaScript para manipular os dados da lista de itens. A lista é armazenada utilizando o LocalStorage do navegador, permitindo que os dados sejam persistidos mesmo após o usuário fechar a página.

O usuário pode adicionar um novo item à lista preenchendo o formulário de adição de itens com o nome e a quantidade desejada. O código utiliza o método "getElementById" para selecionar os elementos do formulário e da lista na página HTML. O método "addEventListener" é utilizado para registrar um evento de clique no botão "submit" do formulário e prevenir que a página seja recarregada quando o botão é pressionado.

O código utiliza a função "criaElemento" para criar um novo elemento na lista de itens e adicioná-lo ao HTML. Essa função recebe como argumento um objeto que contém o nome e a quantidade do item a ser adicionado. O código utiliza o método "createElement" para criar um novo elemento HTML, define a classe desse elemento utilizando o método "classList.add" e adiciona o elemento à lista utilizando o método "appendChild".

A função "buttonDelete" é utilizada para criar um botão de remoção de item na lista, permitindo que o usuário possa excluir itens da lista. Essa função recebe como argumento o ID do item a ser excluído e adiciona um event listener ao botão que chama a função "deleteElement" quando o botão é clicado.

A função "deleteElement" é utilizada para remover um item da lista. Essa função recebe como argumento o elemento HTML que representa o item a ser removido e o ID do item na lista. O código utiliza o método "remove" para excluir o elemento HTML da página e o método "splice" para remover o item da lista.

Em resumo, o site é uma aplicação que permite adicionar, atualizar e excluir itens de uma lista utilizando HTML, CSS e JavaScript. O uso do LocalStorage permite que os dados da lista sejam persistidos entre sessões do usuário. O código utiliza o paradigma de programação funcional e a manipulação de elementos HTML utilizando métodos do DOM.

## Vitrine.Dev

| :placard: Vitrine.Dev |<a href="https://cursos.alura.com.br/vitrinedev/christianoliver">Christian Oliveira</a> |
| -------------  | --- |
| :sparkles: Nome | **Lista de viagem**
| :label: Tecnologias | HTML, CSS, JS
| :rocket: URL | <a href="https://christianduhp.github.io/lista_de_viagem/">Site Lista de Viagem</a> 
![image](https://user-images.githubusercontent.com/85292359/233736878-0e1d76f5-8dc0-4b16-afbd-a4267fc594e4.png)

