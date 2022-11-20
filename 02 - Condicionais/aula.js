const numero = 0;
const numeroPar = numero % 2 == 0 
const numeroImpar = numero % 2 > 0 

console.log(numeroPar)

if (numero === 0){
    console.log("O número é inválido")
}
else if (numero % 5 === 0){
    console.log("Este número é divisivel por 5")
}
else if (numero % 10 === 0){
    console.log("Numero invalido")}
else {
    console.log("Este número não é divisivel por 5")};
