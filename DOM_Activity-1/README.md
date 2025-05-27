# Atividade_DOM 1

## 1ª Questão

## 5ª Questão

A principal diferença esta no que cada um deles retorna:

- `textContent` -> Retorna ou define o conteúdo de texto de um elemento, incluindo todo o texto, mesmo aquele oculto via CSS (display: none ou quebras de linhas, por exemplo). Ignora qualquer marcação HTML presente.

``` Javascript
    function mostrarTextContent() {
    resultado.textContent = div.textContent;
    console.log('textContent:', div.textContent);
}
```

- `innerText` -> Retorna somente o texto de um elemento, ignorando tags HTML de dentro de um elemento, considerando estilos CSS aplicados. Ignora texto de elementos ocultos.

``` Javascript
function mostrarInnerText() {
    resultado.textContent = div.innerText;
    console.log('innerText:', div.innerText);
}
```

- `innerHTML` - > Retorna ou define o conteúdo HTML interno de um elemento, incluindo tags HTML, então ele retornará todo o texto e HTML presente no elemento.

``` Javascript
function mostrarInnerHTML() {
    resultado.textContent = div.innerHTML;
    console.log('innerHTML:', div.innerHTML);

    // Resultado: 
```
