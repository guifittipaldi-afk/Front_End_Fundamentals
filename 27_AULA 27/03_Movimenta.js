alert ("Bem-Vindo")
var nome = prompt ("Informe seu nome: ")
alert ("Olá " + nome + "!")
alert ("Eu sou um BOT ... Vou adivinhar um número que você escolhe e ainda a sua idade atual. Vamos lá?!")
var aleatorio = prompt ("Informe um número entre 1 e 9: ")
aleatorio = aleatorio * 2
console.log ("Valor atual: " + aleatorio)
aleatorio = aleatorio + 5
console.log ("Valor atual: " + aleatorio)
aleatorio = aleatorio * 50
console.log ("Valor atual: " + aleatorio)
var anoNasc = prompt ("Informe seu ano de Nascimento com 4 dígitos: ")
var niver  = prompt ("Se você já fez aniversário neste ano digite 1, caso contrário digite 2: ")
if (niver ==1)
  {
    aleatorio = aleatorio + 1771
  }
else
  {
    aleatorio = aleatorio + 1770
  }
aleatorio = aleatorio - anoNasc
alert ("Observe o número " + aleatorio +"\nEle é um número de 3 algarismos. \nO primeiro algarismo corresponde ao número que pensou. \nOs outros 2 algarismo correspondem a sua idade.")