// Selecionando os elementos de input, botões e parágrafo de resultado
var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var addButton = document.getElementById('addButton');
var subtractButton = document.getElementById('subtractButton');
var multiplyButton = document.getElementById('multiplyButton');
var divideButton = document.getElementById('divideButton');
var result = document.getElementById('result');

// Função para realizar a operação de soma
function add() {
  var num1 = parseFloat(num1Input.value);
  var num2 = parseFloat(num2Input.value);
  var sum = num1 + num2;
  result.textContent = '         Total:   ' +sum;
}

// Função para realizar a operação de subtração
function subtract() {
  var num1 = parseFloat(num1Input.value);
  var num2 = parseFloat(num2Input.value);
  var difference = num1 - num2;
  result.textContent = 'Resultado: ' + difference;
}

// Função para realizar a operação de multiplicação
function multiply() {
  var num1 = parseFloat(num1Input.value);
  var num2 = parseFloat(num2Input.value);
  var product = num1 * num2;
  result.textContent = 'Resultado: ' + product;
}

// Função para realizar a operação de divisão
function divide() {
  var num1 = parseFloat(num1Input.value);
  var num2 = parseFloat(num2Input.value);
  var quotient = num1 / num2;
  result.textContent = 'Resultado: ' + quotient;
}

// Adicionando ouvintes de evento aos botões
addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtract);
multiplyButton.addEventListener('click', multiply);
divideButton.addEventListener('click', divide);
