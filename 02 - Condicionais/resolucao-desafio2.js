/* 
Faça um programa para calcular o valor de uma viagem.
Você terá 5 variaveis. Sendo elas:

1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 3.29;
const precoGasolina = 4.91;
const tipoCombustivel = "Etanol";
const valorCombustivelKM = 12;
const distanciaKM = 350;

if (tipoCombustivel == "Gasolina"){
    console.log(((precoGasolina / valorCombustivelKM) * distanciaKM).toFixed(2))
}
else {
    console.log(((precoEtanol / valorCombustivelKM) * distanciaKM).toFixed(2))
}