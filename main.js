const alunos = [
    { nome: 'Daniel', nota: 10},
    { nome: 'Raquel', nota: 9},
    { nome: 'Joao', nota: 8},
    { nome: 'David', nota: 5},
];

function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

console.log(alunosAprovados(alunos));
