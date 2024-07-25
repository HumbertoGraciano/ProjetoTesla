// Anotações 
// document.getElementById - vai buscar dentro do meu site o elemento id ('coloco aqui o Id') 

// Mostrar o formulário
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openFormButton').addEventListener('click', function () {
        document.getElementById('contactFormContainer').style.display = 'flex';
    });
// Mostrar formulario test-drive
document.getElementById('openTestDriveFormButton').addEventListener('click', function () {
    document.getElementById('contactFormContainer').style.display = 'flex';
});

// Fechar o formulário
document.getElementById('closeFormButton').addEventListener('click', function () {
    document.getElementById('contactFormContainer').style.display = 'none';
});

// Submeter o formulário
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var nomecomp = document.getElementById('nomecomp').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    console.log('Nome Completo:', nomecomp);
    console.log('Celular:', telefone);
    console.log('E-mail:', email);
    console.log('Mensagem:', mensagem);

    alert('Formulário enviado com sucesso!');
    document.getElementById('contactFormContainer').style.display = 'none'
    });
})