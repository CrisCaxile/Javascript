/*
Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   

Entrada
A Entrada será composta por um número inteiro, N. 

Saída
Será  impresso o somatório de N até 0, como no exemplo a baixo: 
*/

function somatorio(valor){
    
    let soma = 0
    for (n = valor; n > 0; n--){
        soma = soma + n;
    }
    return soma}
console.log(somatorio(4));