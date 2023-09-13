// Obtenha referências aos elementos HTML
const loginButton = document.getElementsByClassName("login-button")[0];

// Adicione um ouvinte de evento ao botão de login
loginButton.addEventListener("click", function() {
    // Obtenha os valores das divs com data-value
    const usernameValue = document.querySelector('.horizontal-line-name').getAttribute('data-value');
    const passwordValue = document.querySelector('.horizontal-line-password').getAttribute('data-value');

    // Faça algo com os valores
    console.log("Nome de usuário:", usernameValue);
    console.log("Senha:", passwordValue);
});

// Exemplo de como definir valores nas divs (você pode fazer isso em outra parte do código)
document.querySelector('.horizontal-line-name').setAttribute('data-value', 'Valor do Nome');
document.querySelector('.horizontal-line-password').setAttribute('data-value', 'Valor da Senha');

