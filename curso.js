const Aluno = require ('./aluno.js');
const Estudantes = require ('./estudante');

class Curso {
    nomeCurso;
    notaAprovacao;
    faltasMaximas;
    listaEstudantes = [];
    constructor (nomeCurso, notaAprovacao, faltasMaximas) {
        this.nomeCurso = nomeCurso;
        this.notaAprovacao = notaAprovacao;
        this.faltasMaximas = faltasMaximas;
    }
    adicionarAluno(aluno) {
        this.listaEstudantes.push(aluno);
    }
    validarAprovacao(aluno) {
        if (aluno.quantidadeFaltas > this.faltasMaximas) {
            return false;
        }
        if (aluno.calcularMedia() < this.notaAprovacao) {
            return false;
        }
        if (aluno.quantidadeFaltas === this.faltasMaximas) {
            return aluno.calcularMedia() > this.notaAprovacao * 1.1;
        }
        return true;
    }

    resultadoAprovacao () {
        return this.listaEstudantes.map ((aluno) => {
            return this.validarAprovacao(aluno);
        })
    }
}

let curso1 = new Curso ("JavaScript", 7, 2);
Estudantes.forEach(function (aluno) { curso1.adicionarAluno(aluno)});
console.log(curso1);
console.log(curso1.resultadoAprovacao());
