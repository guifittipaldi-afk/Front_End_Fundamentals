// Objeto contendo as tarifas por tipo de serviço
const tarifas = {
    X: { base: 5, km: 1.5 },
    Comfort: { base: 8, km: 2 },
    Black: { base: 10, km: 3 },
  };
  
  // Função para calcular o preço da viagem
  function calcularPreco(distancia, tipo) {
    if (!tarifas[tipo]) {
      return "Erro: Tipo de serviço inválido.";
    }
  
    const { base, km } = tarifas[tipo]; // Extrai os valores de base e custo por km
    const precoFinal = base + (km * distancia); // Calcula o preço final
    return precoFinal.toFixed(2); // Formata para 2 casas decimais
  }
  
  // Função para manipular a interação do botão
  function configurarBotao() {
    const botao = document.getElementById("calcular");
  
    botao.addEventListener("click", () => {
      // Pega a distância e remove qualquer caractere não numérico
      const distancia = parseFloat(
        document.getElementById("distancia").value.replace(/[^0-9.]/g, "")
      );
      const tipo = document.getElementById("tipo").value;
  
      if (isNaN(distancia) || distancia <= 0) {
        document.getElementById("resultado").textContent =
          "Por favor, insira uma distância válida.";
        return;
      }
  
      const preco = calcularPreco(distancia, tipo);
      document.getElementById("resultado").textContent = `Preço estimado: R$ ${preco}`;
    });
  }
  
  // Configura o evento do botão ao carregar a página
  document.addEventListener("DOMContentLoaded", configurarBotao);