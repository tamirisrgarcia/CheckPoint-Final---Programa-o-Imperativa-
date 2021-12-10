class Aluno {
  constructor(nome, quantidadeFaltas, notas) {
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
  }
  calcularMedia() {
    return (this.notas.reduce ((valorAnterior, valorPosterior) => 
    valorAnterior + valorPosterior, 0)/ this.notas.length);
  }

  aumentarFaltas() {
    this.quantidadeFaltas++;
  }
}

module.exports = Aluno;