/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:

    - 1 Preço do combustível;
    - 2 Gasto médio de combustivel do carro por KM;
    - 3 Distância em KM da viagem;

Imprima no console o valor que será gasto de combustivel para realizar esta viagem.
*/

const preçoCombustivel = 4.91; 
let gastoCombustivelKm = 0.40;
let distanciaEmKm = 200;
let calCulo = gastoCombustivelKm * distanciaEmKm;

console.log("O valor gasto de combustível para esta viagem é de:",calCulo.toFixed(2), "R$");