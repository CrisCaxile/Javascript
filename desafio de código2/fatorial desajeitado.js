/* 
O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n. Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação por uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas. Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.

Entrada
A entrada consiste em um valor inteiro positivo N.

Saída
A saída consiste em retornar o valor do seu fatorial desajeitado de N.
*/



function fatorialdesajeitado(valor) {
    let resultado = 1;
    if (valor === 4) {
        console.log(((valor * (valor - 1)) / (valor - 2)) + (valor - 3));
    }
    else if (valor === 3) {
        console.log((valor * (valor - 1)) / (valor - 2));
    }
    else if (valor === 2) {
        console.log(valor * (valor - 1));
    }
    else if (valor <= 1) {
        console.log(0)
    }
    else {
        for (i = valor; i > 0; i--) {
            console.log(resultado *= i);
                for(u = )
        }
    }
    
}

fatorialdesajeitado(5);