// Classe Lanche
class Lanche {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

// Classe LancheNatural (herda de Lanche)
class LancheNatural extends Lanche {
  constructor(nome, preco, ingredientes) {
    super(nome, preco);
    this.ingredientes = ingredientes;
  }
}

// Classe Guarnicao
class Guarnicao {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

// Cardápios
const cardapioLanches = [
  new Lanche("Hambúrguer", 10),
  new Lanche("Cheeseburger", 12),
  new LancheNatural("Lanche Natural", 15, ["Alface", "Tomate", "Cenoura"]),
];

const cardapioGuarnicoes = [
  new Guarnicao("Batata Frita", 8),
  new Guarnicao("Onion Rings", 10),
  new Guarnicao("Salada", 7),
];

// Função para exibir cardápio de lanches
function exibirCardapioLanches() {
  console.log("=== Cardápio de Lanches ===");
  cardapioLanches.forEach((lanche) => {
    if (lanche instanceof LancheNatural) {
      console.log(`${lanche.nome} - R$${lanche.preco}`);
      console.log(`Ingredientes: ${lanche.ingredientes.join(", ")}`);
    } else {
      console.log(`${lanche.nome} - R$${lanche.preco}`);
    }
    console.log("===========================");
  });
}

// Função para exibir cardápio de guarnições
function exibirCardapioGuarnicoes() {
  console.log("=== Cardápio de Guarnições ===");
  cardapioGuarnicoes.forEach((guarnicao) => {
    console.log(`${guarnicao.nome} - R$${guarnicao.preco}`);
    console.log("==============================");
  });
}

// Exibição dos cardápios
exibirCardapioLanches();
exibirCardapioGuarnicoes();
