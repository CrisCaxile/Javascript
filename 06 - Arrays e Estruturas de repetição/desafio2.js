/*
2) Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado.

*/
function verificarNumerosPares() {

    let lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let c = 0; c < lista.length; c++) {
        if (lista[c] % 2 === 0) {
            console.log('Os números pares foram:', lista[c]);
        }
    }
}


verificarNumerosPares();
