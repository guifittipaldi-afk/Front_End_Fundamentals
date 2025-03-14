function calcularGorjeta()
{ let valorConta = document.getElementById('valorConta')
.value; let percentualGorjeta = document.getElementById('percentualGorjeta').value; if 
(valorConta === '' || percentualGorjeta === '') 
{ document.getElementById('resultado')
.innerText = 'Por favor, insira o valor da conta e selecione o percentual da gorjeta.'; return; }
let valorGorjeta = (valorConta * percentualGorjeta) / 100; let valorTotal = parseFloat(valorConta)
+ parseFloat(valorGorjeta); document.getElementById('resultado').innerText =
`Gorjeta: R$ ${valorGorjeta.toFixed(2)}\nValor Total: R$ ${valorTotal.toFixed(2)}`; }