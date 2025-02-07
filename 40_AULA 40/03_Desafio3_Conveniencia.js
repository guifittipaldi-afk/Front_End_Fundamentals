// Produtos disponíveis
const produtos = [
  { id: 1, nome: 'Biscoito', preco: 2.5 },
  { id: 2, nome: 'Refrigerante', preco: 4.0 },
  { id: 3, nome: 'Chocolate', preco: 3.0 },
  { id: 4, nome: 'Salgadinho', preco: 2.0 },
  { id: 5, nome: 'Água', preco: 1.5 }
];

// Carrinho de compras
let carrinho = [];

// Função para exibir os produtos na página
function exibirProdutos() {
  const listaProdutos = document.getElementById('lista-produtos');
  listaProdutos.innerHTML = '';
  
  produtos.forEach((produto) => {
    const item = document.createElement('li');
    item.innerText = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
    const botaoAdicionar = document.createElement('button');
    botaoAdicionar.innerText = 'Adicionar';
    botaoAdicionar.addEventListener('click', () => adicionarAoCarrinho(produto));
    item.appendChild(botaoAdicionar);
    listaProdutos.appendChild(item);
  });
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
  exibirCarrinho();
}

// Função para exibir o carrinho de compras
function exibirCarrinho() {
  const listaCarrinho = document.getElementById('lista-carrinho');
  listaCarrinho.innerHTML = '';
  
  let total = 0;
  carrinho.forEach((produto) => {
    const item = document.createElement('li');
    item.innerText = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
    listaCarrinho.appendChild(item);
    total += produto.preco;
  });

  const totalElemento = document.getElementById('total');
  totalElemento.innerText = `Total: R$ ${total.toFixed(2)}`;
}

// Função para finalizar a compra
function finalizarCompra() {
  carrinho = [];
  exibirCarrinho();
  alert('Compra finalizada com sucesso!');
}

// Event listener para o botão de finalizar compra
const botaoComprar = document.getElementById('botao-comprar');
botaoComprar.addEventListener('click', finalizarCompra);

// Exibir os produtos na página
exibirProdutos();
