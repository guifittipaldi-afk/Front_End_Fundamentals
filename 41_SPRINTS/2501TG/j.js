function converterTemperatura(valor, escalaOrigem) {
    const conversoes = {
      C: {
        paraFahrenheit: (celsius) => (celsius * 9 / 5) + 32,
        paraKelvin: (celsius) => celsius + 273.15,
      },
      F: {
        paraCelsius: (fahrenheit) => (fahrenheit - 32) * 5 / 9,
        paraKelvin: (fahrenheit) => ((fahrenheit - 32) * 5 / 9) + 273.15,
      },
      K: {
        paraCelsius: (kelvin) => kelvin - 273.15,
        paraFahrenheit: (kelvin) => ((kelvin - 273.15) * 9 / 5) + 32,
      },
    };
  
    let celsius, fahrenheit, kelvin;
  
    switch (escalaOrigem) {
      case "C":
        celsius = valor;
        fahrenheit = conversoes.C.paraFahrenheit(valor);
        kelvin = conversoes.C.paraKelvin(valor);
        break;
      case "F":
        celsius = conversoes.F.paraCelsius(valor);
        fahrenheit = valor;
        kelvin = conversoes.F.paraKelvin(valor);
        break;
      case "K":
        celsius = conversoes.K.paraCelsius(valor);
        fahrenheit = conversoes.K.paraFahrenheit(valor);
        kelvin = valor;
        break;
      default:
        return "Escala de origem inválida. Use 'C' para Celsius, 'F' para Fahrenheit ou 'K' para Kelvin.";
    }
  
    return `Celsius: ${celsius.toFixed(2)}, Fahrenheit: ${fahrenheit.toFixed(2)}, Kelvin: ${kelvin.toFixed(2)}`;
  }
  
  // Adicionando funcionalidade ao botão
  document.getElementById("calcularBtn").addEventListener("click", () => {
    const valor = parseFloat(document.getElementById("valor").value);
    const escala = document.getElementById("escala").value;
  
    const resultado = isNaN(valor)
      ? "Por favor, insira um valor válido."
      : converterTemperatura(valor, escala);
  
    document.getElementById("resultado").textContent = resultado;
  });
  