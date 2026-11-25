const form = document.getElementById('form-contatos');
let linhas = '';
const nomes = [];
const numeros = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();

    atualizaTabela();

    calculaContatosFinal();

    atualizaContatosFinal();

})

function adicionaLinha() {
    
    const inputNome = document.getElementById('nomeCompleto');
    const inputTelefone = document.getElementById('telefone');

    if (nomes.includes(inputNome.value)) {
        alert(`O nome ${inputNome.value} já foi inserido`);
    }
    else{
        nomes.push(inputNome.value);
        numeros.push(inputTelefone.value);

        let linha = `<tr>`;
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNome.value = ``;
    inputTelefone.value = ``;
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaContatosFinal() {
    const somaFinal = calculaContatosFinal();
    document.getElementById('total-contatos').innerHTML = somaFinal;
}

function calculaContatosFinal() {
    let somaContatos = 0;

    for (let i = 0; i < nomes.length; i++) {
        somaContatos ++;
    }

    return somaContatos;
}