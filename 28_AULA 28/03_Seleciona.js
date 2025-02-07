function verificarDados() {
  var genero = document.getElementById("genero").value;
  var dataNascimento = document.getElementById("dataNascimento").value;

  if (genero === "" || dataNascimento === "") {
    alert("Por favor, selecione o gênero e a data de nascimento.");
  } else {
    if (genero === "Masculino") {
      alert("Você é um homem e nasceu em " + dataNascimento);
    } else if (genero === "Feminino") {
      alert("Você é uma mulher e nasceu em " + dataNascimento);
    }
  }
}

document.getElementById("verificar").addEventListener("click", verificarDados);
