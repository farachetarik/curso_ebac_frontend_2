const form = document.getElementById('form-lista');
const NomeTarefa = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    AddTarefa();
    atualizaTabela();
    riscaTarefa();
});

function AddTarefa() {
    const InputTarefa = document.getElementById('tarefa');

    if(NomeTarefa.includes(InputTarefa.value)){
        alert(`a tarefa ${InputTarefa.value} já foi inserida!`);
    } else {
    
    NomeTarefa.push(InputTarefa.value);

    let linha = '';
    linha += `<li> ${InputTarefa.value}</li>`;

    linhas += linha;
    } 
    
    InputTarefa.value = '';
}

function atualizaTabela(){
    const Tabelaraiz = document.querySelector('ul');

    Tabelaraiz.innerHTML = linhas;         
}

function riscaTarefa(){
    const Tabelaraiz = document.querySelector('ul');

    Tabelaraiz.addEventListener('click', function(e){
        if(e.target.classList.contains('checked')){
        } else {
            e.target.classList.add('checked');
        }       
    });
}

