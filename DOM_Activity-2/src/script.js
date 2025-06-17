// --- 1ª Questão ---
function showError(message, elementId, duration = 3000) {
    const errorMessageElement = document.getElementById(elementId);
    
    errorMessageElement.textContent = message;

    errorMessageElement.classList.remove('hidden');

    setTimeout(function() {
        errorMessageElement.classList.add('hidden');
    }, duration);
}

document.getElementById('errorButton').addEventListener('click', function() {
    const inputError = document.getElementById('inputError');
    const message = inputError.value.trim();
    showError(message, 'errorMessage1');
});

// --- 2ª Questão ---
document.getElementById('showButton').addEventListener('click', function() {
    const textBox = document.getElementById('textBox');
    const outputDiv = document.getElementById('output');
    let outputText = textBox.value.trim();

    if (outputText === '') {
        showError("O campo não pode estar vazio!", 'errorMessage1.1');
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
    document.getElementById('imageOutput').innerHTML = '';

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
    let checkedsResponse = Array.from(itens).filter(item => item.checked);

    if (checkedsResponse.length <= 0) {
    document.getElementById('selectedsNetworks').innerHTML = "";
        showError('Selecione ao menos uma opção!', 'errorMessage5');
        return;
    }

    const listaDeItens = checkedsResponse
    .map(element => `<li>${element.value}</li>`) 
    .join(''); 

    const resultadoFinalHTML = `
    <p>Redes Selecionadas:</p>
    <ul>${listaDeItens}</ul>`;

    document.getElementById('selectedsNetworks').innerHTML = resultadoFinalHTML;
});

// --- 7ª, 8ª e 9ª Questões ---
const hashtagInput = document.getElementById('hashtagInput');
const addHashtagButton = document.getElementById('addHashtagButton');
const removeHashtagButton = document.getElementById('removeHashtagButton');
const hashtagList = document.getElementById('hashtagList');

    addHashtagButton.addEventListener('click', function() {
    const newHashtagText = hashtagInput.value.trim();

    if (newHashtagText === '') {
        showError('Hashtag não pode ser vazia.', 'errorMessage7');
        return;
    }
    if (newHashtagText.length < 2) {
        showError('Hashtag deve ter ao menos 2 caracteres.', 'errorMessage7');
        return;
    }
    if (hashtagList.options.length >= 5) {
        showError('A lista não pode ter mais que 5 hashtags.', 'errorMessage7');
        return;
    }

    const existingHashtags = Array.from(hashtagList.options).map(option => option.value);
    if (existingHashtags.includes(newHashtagText)) {
        showError('Hashtag já existe na lista.', 'errorMessage7');
        return;
    }
    
    const newOption = document.createElement('option');
    newOption.textContent = newHashtagText;
    newOption.value = newHashtagText;

    hashtagList.appendChild(newOption);

    hashtagInput.value = '';
});

removeHashtagButton.addEventListener('click', function() {
    const selectedOptions = Array.from(hashtagList.selectedOptions);

    if (selectedOptions.length === 0) {
        showError('Selecione uma hashtag para remover.', 'errorMessage7');
        return;
    }

    selectedOptions.forEach(option => {
        hashtagList.removeChild(option);
    });
});

// --- 10ª e 11ª Questões ---
const availableAssets = document.getElementById('availableAssets');
const investmentWallet = document.getElementById('investmentWallet');
const moveRightButton = document.getElementById('moveRightButton');
const moveLeftButton = document.getElementById('moveLeftButton');

function moveOptions(sourceSelect, destinationSelect) {
    const selectedOptions = Array.from(sourceSelect.selectedOptions);

    if (selectedOptions.length === 0) {
        showError('Selecione ao menos um ativo para mover.', 'errorMessage10');
        return;
    }

    selectedOptions.forEach(option => {
        destinationSelect.appendChild(option);
    });

    updateButtonStates();
}

function updateButtonStates() {
    moveRightButton.disabled = availableAssets.options.length === 0;
    moveLeftButton.disabled = investmentWallet.options.length === 0;
}

moveRightButton.addEventListener('click', () => moveOptions(availableAssets, investmentWallet));
moveLeftButton.addEventListener('click', () => moveOptions(investmentWallet, availableAssets));

document.addEventListener('DOMContentLoaded', updateButtonStates);