# Atividade DOM 02

## 🚀 Tecnologias Utilizadas

* **HTML5:** Para a estruturação semântica do conteúdo.
* **CSS3:** Para estilização moderna, incluindo Flexbox, Grid, variáveis e transições.
* **JavaScript (ES6+):** Para toda a lógica de manipulação do DOM e interatividade.

## ✨ Funcionalidades e Questões Resolvidas

O projeto é dividido em múltiplos containers, cada um abordando um ou mais exercícios da lista.

### Questão 1: Mensagem de Erro Genérica

* Foi criada uma função reutilizável `showError(message, elementId)` que exibe uma mensagem de erro customizada em um elemento específico por 3 segundos.

### Questão 2: Validação de Campo de Texto

* Implementada uma validação para um campo de texto que verifica se o conteúdo é vazio (ignorando espaços em branco com `trim()`). Caso esteja vazio, a função da Questão 1 é usada para exibir um erro.

### Questão 3: Calculadora de Engajamento

* Uma calculadora que determina a taxa de engajamento a partir do número de interações e visualizações.
* Inclui validação com `isNaN()` para garantir que apenas valores numéricos válidos e maiores que zero sejam inseridos.

### Questão 4: Upload e Exibição de Imagem

* Permite que o usuário selecione um arquivo de imagem local através de um `<input type="file">`.
* Ao clicar em um botão, a imagem selecionada é exibida na tela. A imagem é criada dinamicamente com `document.createElement()` e sua `src` é definida usando `URL.createObjectURL()`.

### Questão 5: Seletor de Imagens

* Um seletor `<select>` contém URLs de três imagens pré-definidas.
* Ao alterar a seleção (`onchange`), a imagem correspondente à `value` da opção é carregada e exibida dinamicamente.

### Questão 6: Seleção de Múltiplos Itens (Checkboxes)

* O usuário pode selecionar múltiplas redes sociais favoritas.
* Ao clicar no botão "Enviar", o sistema valida se ao menos um checkbox foi marcado. Se sim, exibe uma lista formatada com as redes selecionadas.

### Questões 7, 8 e 9: Gerenciador de Hashtags

* **7:** O usuário pode digitar uma hashtag e adicioná-la a uma lista (`<select>`).
* **8:** O sistema foi aprimorado para não permitir a adição de hashtags vazias, com menos de 2 caracteres, repetidas ou quando a lista já contém 5 itens.
* **9:** Foi adicionado um botão para remover uma hashtag previamente selecionada da lista.

### Questões 10 e 11: Movimentação de Ativos

* **10:** Uma interface com duas listas (`<select>`) permite ao usuário mover itens de uma para a outra, simulando a transferência de ativos entre carteiras.
* **11:** A funcionalidade foi melhorada com validações que:
  * Garantem que um item esteja selecionado antes de tentar movê-lo.
  * Habilitam e desabilitam os botões de transferência de forma lógica, dependendo se as listas de origem contêm itens ou não.
  * O layout foi ajustado para posicionar os botões entre as duas listas.
