// Selecionando os elementos do input, botão e parágrafo
var nameInput = document.getElementById('nameInput');
var greetButton = document.getElementById('greetButton');
var greeting = document.getElementById('greeting');

// Função para cumprimentar o usuário
function greetUser() {
  var name = nameInput.value;
  if (name) {
    greeting.textContent = 'Olá, ' + name + '!';
  } else {
    greeting.textContent = 'Por favor, digite seu nome.';
  }
}

// Adicionando um ouvinte de evento ao botão
greetButton.addEventListener('click', greetUser);
