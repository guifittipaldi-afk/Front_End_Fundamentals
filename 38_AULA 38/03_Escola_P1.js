// Classe Curso
class Curso {
  constructor(nome, area) {
    this.nome = nome;
    this.area = area;
  }

  // Método para exibir informações do curso
  exibirInfo() {
    console.log(`${this.nome} - Área: ${this.area}`);
  }
}

// Classe Escola
class Escola {
  constructor() {
    this.cursos = [];
  }

  // Método para adicionar um curso à escola
  adicionarCurso(curso) {
    this.cursos.push(curso);
  }

  // Método para exibir todos os cursos da escola
  exibirCursos() {
    console.log("=== Cursos da Escola ===");
    this.cursos.forEach((curso) => {
      curso.exibirInfo();
    });
    console.log("=========================");
  }
}

// Instanciando a Escola
const escola = new Escola();

// Instanciando Cursos
const programacao = new Curso("Programação", "Informática");
const design = new Curso("Design", "Design");
const dataScience = new Curso("Data Science", "Ciência de Dados");

// Adicionando Cursos à Escola
escola.adicionarCurso(programacao);
escola.adicionarCurso(design);
escola.adicionarCurso(dataScience);

// Exibindo Cursos da Escola
escola.exibirCursos();
