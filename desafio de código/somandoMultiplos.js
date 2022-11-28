/*
Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

Entrada
A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

Saída
A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N. 
*/

function somatorioMutiplos(A,N){

    let soma = 0;
    for (i = A; i <= N; i++){
        if (i % 5 === 0){
            soma = soma + i;
        }
        else{
            continue
        }
    }
    return soma}
    
console.log(somatorioMutiplos(4,20));