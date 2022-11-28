/*
Uma sala contém 5 alunos e para cada aluno foi sorteado um numero de 1 a 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saida:
98
*/
const { gets, print } = require('./funcoes auxiliares')

const quantidadedeAlunos = gets();
const numerosSorteados = [];

for (let i = 0; i < quantidadedeAlunos; i++){
    const numeroSorteados = gets();
    numerosSorteados.push(numeroSorteados);
}
let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
    
}
print(maiorValor);

