// 2ª Questão

// Button
let niceButton = document.getElementById("nice_button");
// Paragraphs
let allParagraphs = document.getElementsByTagName("p");

// Examples using document methods
function applyParagraphStyles() {
    // a. getElementById()
    const titleSection = document.getElementById('title');
    console.log('Example getElementById:', titleSection);
    titleSection.style.border = '2px solid #4CAF50';

    // b. getElementsByTagName()
    console.log('Example getElementsByTagName:', allParagraphs);
    for (let i = 0; i < allParagraphs.length; i++) {
        allParagraphs[i].style.fontStyle = 'italic';
    }
}

niceButton.addEventListener("click", applyParagraphStyles);

// 3ª Questão
function countParagraphs() {
    const paragraphsDiv = document.getElementById("div_paragraphs");
    const paragraphsList = paragraphsDiv.getElementsByTagName('p');
    const total = paragraphsList.length;
    document.getElementById("result_count").innerText = `Número de parágrafos: ${total}`;
}

// 4ª Questão
let deleteBtn = document.getElementById("delete_button");
function removeParagraph() {
    const sadParagraph = document.getElementById("sad_parag");
    sadParagraph.textContent = "";
}
deleteBtn.addEventListener("click", removeParagraph);

// 5ª Questão
const contentDiv = document.getElementById('content');
const outputDisplay = document.getElementById('content_caught');

function showTextContent() {
    outputDisplay.textContent = contentDiv.textContent;
    console.log('textContent:', contentDiv.textContent);
}

function showInnerText() {
    outputDisplay.textContent = contentDiv.innerText;
    console.log('innerText:', contentDiv.innerText);
}

function showInnerHTML() {
    outputDisplay.textContent = contentDiv.innerHTML;
    console.log('innerHTML:', contentDiv.innerHTML);
}

// 6ª Questão
function toggleStyle() {
    const stylePara = document.getElementById("style_paragraph");
    stylePara.classList.toggle("changed");
}

// 7ª Questão
function copyToUpperCase() {
    const sourceInput = document.getElementById("input_upper_src").value;
    document.getElementById("input_upper_dst").value = sourceInput.toUpperCase();
}

// 8ª Questão
let originalColors = {
    background: getComputedStyle(document.body).backgroundColor,
    foreground: getComputedStyle(document.body).color
};

function enableHighContrast() {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
}

function resetContrast() {
    document.body.style.backgroundColor = originalColors.background;
    document.body.style.color = originalColors.foreground;
}

// 9ª Questão
const fontStep = 2; // pixels
function adjustFontSize(delta) {
    const bodyStyle = getComputedStyle(document.body).fontSize;
    const currentSize = parseFloat(bodyStyle);
    document.body.style.fontSize = (currentSize + delta) + "px";
}

function increaseFont() { adjustFontSize(fontStep); }
function decreaseFont() { adjustFontSize(-fontStep); }

// 10ª Questão
function calculate() {
    const num1 = parseFloat(document.getElementById("calc_num1").value);
    const num2 = parseFloat(document.getElementById("calc_num2").value);
    const operations = document.getElementsByName("op");
    let selectedOp;
    for (let op of operations) {
        if (op.checked) {
            selectedOp = op.value;
            break;
        }
    }
    let result;
    switch (selectedOp) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = (num2 !== 0 ? num1 / num2 : "Error: divide by zero"); break;
    }
    document.getElementById("calc_result").innerText = `Result: ${result}`;
}

// 11ª Questão
function addToList() {
    const inputValue = document.getElementById("list_input").value.trim();
    if (!inputValue) return;
    const listItem = document.createElement("li");
    listItem.innerText = inputValue;
    document.getElementById("minhaLista").appendChild(listItem);
    document.getElementById("list_input").value = "";
}

// 12ª Questão
function addToSelect() {
    const inputValue = document.getElementById("select_input").value.trim();
    if (!inputValue) return;
    const optionItem = document.createElement("option");
    optionItem.value = inputValue;
    optionItem.innerText = inputValue;
    document.getElementById("meuSelect").appendChild(optionItem);
    document.getElementById("select_input").value = "";
}