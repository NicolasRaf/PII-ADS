function getById(id){
    return document.getElementById(id);
}

function getBotaoClicavel(id, funcao) {
    getById(id).addEventListener('click', funcao)

    return getById(id);
}

function criarParagrafo() {
    let p1 = document.createElement('p');
    p1.innerText = "Hello World 2";
    p1.id = 'p1'
    // p1.setAttribute('id', 'p1') equivalente à instrução acima
    
    // Associo ao parent
    getById("resultado1").appendChild(p1);
}

let botaoCriarParagrafo = getBotaoClicavel('botaoCriaParagarfo', criarParagrafo);

function criarElemento(){
    let tagElemento = getById('tagElemento').value;

    // Criar o elemento
    let elemento = document.createElement(tagElemento);

    // Configura o elemento
    elemento.id = getById("id").value;
    elemento.innerText = getById('texto').value;
    elemento.setAttribute(getById('atributo').value, getById('valor').value)

    // Associo ao parent
    let pai = getById("tagPai").value;
    getById(pai).appendChild(elemento);
}

let botaoCriarElemento = getBotaoClicavel("botaoCriarElemento", criarElemento);


let contador = 1;
function adicionarTarefa() {
    let descricao = getById('descricao').value;
    let percentual = getById('percentual').value;

    //crio a linha
    let tr = document.createElement('tr');
    tr.id = contador;

    //contador
    let tdContador = document.createElement('td');
    tdContador.innerText = contador;

    //descricao
    let tdDescricao = document.createElement('td');
    tdDescricao.innerText = descricao;

    //percentual
    let tdPercentual = document.createElement('td');
    tdPercentual.innerText = percentual + "%";
    
    //ações
    let tdAcoes = document.createElement('td');
    let botaoExcluir = document.createElement('button');
    botaoExcluir.innerText = 'Excluir';
    tdAcoes.appendChild(botaoExcluir);

    tr.appendChild(tdContador);
    tr.appendChild(tdDescricao);
    tr.appendChild(tdPercentual);
    tr.appendChild(tdAcoes);

    contador++;

    getById('tarefas').appendChild(tr);
}        

let botaoAdicionarTarefa = getBotaoClicavel('botaoAdicionarTarefa', adicionarTarefa);