// Selecionando o elemento do contador
var counter = document.getElementById('counter');

// Selecionando o botão de incremento
var button = document.getElementById('incrementButton');

// Variável para armazenar o valor do contador
var count = 0;

// Função para incrementar o contador e atualizar o texto
function incrementCounter() {
  count++;
  counter.textContent = count;
}

// Adicionando um ouvinte de evento ao botão
button.addEventListener('click', incrementCounter);
