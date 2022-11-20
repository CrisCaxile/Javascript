/*
2) O IMC - Índice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC
IMC = Peso / (Altura * Altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

IMC em adultos condição:
    Abaixo de 18.5, Abaixo do peso;
    Entre 18.5 e 25, Peso normal;
    Entre 25 e 30, Acima do peso;
    Entre 30 e 40, Obeso;
    Acima de 40, Obesidado Grave;
*/

const peSo = 60;
const altuRa = 1.75;
const imc = (peSo / (altuRa * altuRa)).toFixed(1);

if (imc < 18.5){
    console.log("A pessoa está ABAIXO DO PESO.",imc);
}
else if (imc >= 18.5 && imc < 25){
    console.log("A pessoa está com o PESO NORMAL.",imc);
}
else if (imc >= 25 && imc < 30){
    console.log("A pessoa está ACIMA DO PESO.",imc);
}
else if (imc >= 30 && imc < 40){
    console.log("A pessoa está com OBESIDADE.",imc);
}
else {
    console.log("A pessoa está com OBESIDADE GRAVE.",imc);
}