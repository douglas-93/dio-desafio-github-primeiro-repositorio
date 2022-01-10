const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Sofia',
        nota: 6,
        turma: '1B'
    },
    {
        nome: 'Paulo',
        nota: 8,
        turma: '2C'
    },
    {
        nome: 'Kleber',
        nota: 3,
        turma: '3A'
    },
];

const alunosAprovados = (alunos, media) => {
    let aprovados = alunos.filter(a => a.nota >= media)
    return aprovados
}

console.log(alunosAprovados(alunos, 5))
