// Lista de alunos, com seus nomes e notas
const alunos = [
    { nome: 'Daniel', nota: 10},
    { nome: 'Raquel', nota: 9},
    { nome: 'Joao', nota: 8},
    { nome: 'David', nota: 5},
];

// Retorna apenas os alunos com nota acima de 6
function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Resultado
console.log(alunosAprovados(alunos));
