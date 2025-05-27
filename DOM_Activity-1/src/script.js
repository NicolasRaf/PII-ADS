//  Scripts

// Botão 
let button = document.getElementById("nice_button"); 
// Parágrafos
let paragraphs = document.getElementsByTagName("p");


// 3º Questão 
function contarParagrafos() {
    const div = document.getElementById("div_paragraphs");
    const paragrafos = div.getElementsByTagName('p');
    const quantidade = paragrafos.length;

    const resultadoDiv = document.getElementById("result_count");
    resultadoDiv.innerText = `Número de parágrafos: ${quantidade}`;
}

// 4º Questão
var deleteButton = document.getElementById("delete_button");

function deleteParagraph() {
    const paragraph = document.getElementById("sad_parag");
    paragraph.textContent = "";
}

deleteButton.addEventListener("click", deleteParagraph);

// 5º Questão
const div = document.getElementById('content');
const resultado = document.getElementById('content_caught');

function mostrarTextContent() {
    resultado.textContent = div.textContent;
    console.log('textContent:', div.textContent);
}

function mostrarInnerText() {
    resultado.textContent = div.innerText;
    console.log('innerText:', div.innerText);
}

function mostrarInnerHTML() {
    resultado.textContent = div.innerHTML;
    console.log('innerHTML:', div.innerHTML);
}