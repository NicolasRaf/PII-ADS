

// --- 1ª Questão ---
function showError(message, elementId, duration = 3000) {
    const errorMessageElement = document.getElementById(elementId);
    
    // Define o texto da mensagem
    errorMessageElement.textContent = message;

    // Mostra o elemento removendo a classe 'hidden'
    errorMessageElement.classList.remove('hidden');

    // Esconde o elemento após o tempo especificado
    setTimeout(function() {
        errorMessageElement.classList.add('hidden');
    }, duration);
}

document.getElementById('errorButton').addEventListener('click', function() {
    const inputError = document.getElementById('inputError');
    const message = inputError.value.trim();

    if (message === '') {
        // Usa a função genérica para mostrar um erro padrão
        showError('O campo deve ser preenchido.', 'errorMessage1');
    } else {
        // Usa a função genérica para mostrar a mensagem do usuário
        showError(message, 'errorMessage1');
    }
});

// --- 2ª Questão ---
document.getElementById('showButton').addEventListener('click', function() {
    const textBox = document.getElementById('textBox');
    const outputDiv = document.getElementById('output');
    let outputText = textBox.value.trim();

    if (outputText === '') {
        outputText = 'O campo deve ser preenchido';
    }
    
    outputDiv.innerHTML = outputText;
});

// --- 3ª Questão ---
document.getElementById('calculateButton').addEventListener('click', function() {
    const interactions = parseFloat(document.getElementById('interactions').value);
    const views = parseFloat(document.getElementById('views').value);
    const engagementResultDiv = document.getElementById('engagementResult');
    
    // Limpa o resultado anterior
    engagementResultDiv.textContent = ''; 

    if (isNaN(interactions) || isNaN(views) || interactions <= 0 || views <= 0) {
        // Usa a mesma função genérica para o erro de cálculo
        showError('Insira valores numéricos e maiores que zero.', 'errorMessage3');
        return; // Para a execução se os valores forem inválidos
    }

    const engagement = (interactions / views) * 100;

    // Mostra o resultado do cálculo
    engagementResultDiv.textContent = `Engajamento: ${engagement.toFixed(2)}%`;
});

// --- 4ª Questão ---
document.getElementById('imageButton').addEventListener('click', function(){
    let image = document.createElement('img');
    let receiveImage = document.getElementById('upImage').files[0];

    
    if (receiveImage == undefined){
        showError('Imagem não carregada!', 'errorMessage4')
        return;
    }

    image.src = URL.createObjectURL(receiveImage);

    document.getElementById('imageOutput').appendChild(image);
});


// --- 5ª Questão ---
const selectElement = document.getElementById("imageSelector");
const result = document.getElementById("optionImageSelected");

selectElement.addEventListener("change", (event) => {
    result.innerHTML = "";

    let image = document.createElement('img');
    image.src = event.target.value;
  
    result.appendChild(image);
});

// --- 6ª Questão ---
document.getElementById('sendButton').addEventListener('click', function(){
    let itens = document.getElementsByName('socialMedia');
    anyChecked = false;

    itens.forEach( (item) => (item.checked) ? anyChecked = true : false)
    if (anyChecked === false) 
        showError('Selecione ao menos uma opção!', 'errorMessage5')

    
});

