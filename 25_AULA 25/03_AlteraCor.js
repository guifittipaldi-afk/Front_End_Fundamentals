// Selecionando o elemento do título
var message = document.getElementById('message');

// Selecionando o botão
var button = document.getElementById('changeColorButton');

// Função para alterar a cor do texto
function changeColor() {
  var randomColor = generateRandomColor();
  message.style.color = randomColor;
}

// Função para gerar uma cor aleatória em formato hexadecimal
function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Adicionando um ouvinte de evento ao botão
button.addEventListener('click', changeColor);
