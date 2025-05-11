const blocoA = document.getElementById('Bloco-A');
const blocoB = document.getElementById('Bloco-B');
const form = document.getElementById('form-calcular');

function calcular(numero){
    numero = blocoA.value > blocoB.value;
    return numero;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `O número <b>${blocoA.value}</b> é maior que <b>${blocoB.value}</b>`;
    const mensagemErro = `O número <b>${blocoB.value}</b> é maior que <b>${blocoA.value}</b>`;
    if(calcular()){
        document.querySelector('#mensagem').innerHTML = mensagemSucesso;
        document.querySelector('#mensagem').classList.add('sucess-message');
        document.querySelector('#mensagem').classList.remove('error-message');
        document.querySelector('#mensagem').style.display = 'flex';
    } else {
        document.querySelector('#mensagem').innerHTML = mensagemErro;
        document.querySelector('#mensagem').style.display = 'flex';
        document.querySelector('#mensagem').classList.remove('success-message');
        document.querySelector('#mensagem').classList.add('error-message');
    }

})  
