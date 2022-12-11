/*
Seu Raimundo tem uma lista de números. Porém, ele gosta muito das coisas em ordem e deseja que você o ajude a construir um programa que pegue todas as listas dele, uma de cada vez, e coloque os inteiros pares no início e os inteiros ímpares no final.

Entrada
A entrada são arrays de tamanho variado que possuem somente números inteiros.

Saída
A saída deverá retornar todos os valores pares para o começo do array, seguido pelos ímpares
*/
function matrizParEImpar(lista) {
    let numerosPares = [];
    let numerosImpares = [];
    let listas = [numerosPares, numerosImpares];

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            numerosPares.push(lista[i]);
        }
        else {
            numerosImpares.push(lista[i]);
        }
    }
    console.log(listas.join(' '))
}


let lista = [2, 4, 5]
matrizParEImpar(lista);
