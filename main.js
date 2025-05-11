const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/Salvo.png" alt="Aprovado" />'
const nomesCompletos = [];
const ddds = [];
const telefones = [];
const emails = [];

let linhas = '';

form.addEventListener('submit', function(e){ 
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeCompleto = document.getElementById('nome-completo');
    const inputDDD = document.getElementById('ddd-telefone');
    const inputTelefone = document.getElementById('numero-telefone');
    const inputEmail = document.getElementById('email');

    if (nomesCompletos.includes(inputNomeCompleto.value)) {
        alert(`O nome: ${inputNomeCompleto.value} já existe`);
        if (telefones.includes(inputTelefone.value)) {
            alert(`O telefone: ${inputTelefone.value} já existe`);
            if (emails.includes(inputEmail.value)) {
                alert(`O email: ${inputEmail.value} já existe`);
            }
        }
    } else {
        nomesCompletos.push(inputNomeCompleto.value);
        ddds.push(inputDDD.value);
        telefones.push(inputTelefone.value);
        emails.push(inputEmail.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeCompleto.value}</td>`;
        linha += `<td>(${inputDDD.value}) ${inputTelefone.value} </td>`;
        linha += `<td>${inputEmail.value}</td>`;
        linha += `<td>${imgAprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeCompleto.value = '';
    inputDDD.value = '';
    inputTelefone.value = '';
    inputEmail.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}