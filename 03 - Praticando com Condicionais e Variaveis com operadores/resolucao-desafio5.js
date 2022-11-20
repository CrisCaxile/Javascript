/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
    A vista Débito, recebe 10% de desconto.
    A vista no Dinheiro ou PIX, recebe 15% de desconto.
    Em duas vezes, preço normal de etiqueta sem juros.
    Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

const sanDuiche = 8.99;
const meioDepagamento = "Débito";

if (meioDepagamento == "Débito") {
    console.log("O valor a pagar vai ser de: ", (sanDuiche - (sanDuiche * 10) / 100).toFixed(2));
}
else if (meioDepagamento == "Dinheiro" || meioDepagamento == "PIX") {
    console.log("O valor a pagar vai ser de: ", (sanDuiche - (sanDuiche * 15) / 100).toFixed(2));
}
else if (meioDepagamento == "Crédito2") {
    console.log("O valor a pagar vai ser de: ", sanDuiche);
}
else if (meioDepagamento == "Crédito2+") {
    console.log("O valor a pagar vai ser de: ", (sanDuiche + (sanDuiche * 10) / 100).toFixed(2));
}
else {
    console.log("O programa deu erro. Repita novamente com os valores certos.")
}