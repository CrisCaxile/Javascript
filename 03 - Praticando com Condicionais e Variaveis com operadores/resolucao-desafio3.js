/*
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo

Média = (nota 1 + nota 2 + nota 3) / 3

Classificação
    Média menor que 5, reprovação,
    Média entre 5 e 7, recuperação,
    Média acima de 7, passou de semestre,
*/

const notA1 = 6.0;
const notA2 = 8.5;
const notA3 = 4.5;
let mediA = ((notA1 + notA2 + notA3) / 3).toFixed(1);

if (mediA < 5) {
    console.log("O aluno está reprovado com média:", mediA);
}
else if (mediA >= 5 && mediA <= 7) {
    console.log("O aluno está de recuperação com média:", mediA);
}
else {
    console.log("O aluno passou de semestre com média:", mediA);
}