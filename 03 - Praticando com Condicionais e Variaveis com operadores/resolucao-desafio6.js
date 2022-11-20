/*
4) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
    A vista Débito, recebe 10% de desconto.
    A vista no Dinheiro ou PIX, recebe 15% de desconto.
    Em duas vezes, preço normal de etiqueta sem juros.
    Acima de duas vezes, preço normal de etiqueta mais juros de 10%.

    UTILIZANDO MÉTODO SWITCH
*/
const sanDuiche = 8.99;
const meioDepagamento = 4;

switch (meioDepagamento) {
    case (1):
        console.log("O valor a se pagar será de: ",(sanDuiche - (sanDuiche * 10) / 100).toFixed(2));
        break;       
    case (2):
        console.log("O valor a se pagar será de: ",(sanDuiche - (sanDuiche * 15) / 100).toFixed(2));
        break;
    case (3):
        console.log("O valor a se pagar será de: ",sanDuiche);
        break;
    case (4):
        console.log("O valor a se pagar será de: ",(sanDuiche + (sanDuiche * 10) / 100).toFixed(2));
        break;
    default:
        console.log("O seu programa deu erro, tente novamente utilizar os métodos de pagamento correto.");
        break;
}