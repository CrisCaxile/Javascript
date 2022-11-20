/*
2) Crie uma classe para representar pessoas
Para cada pessoas teremos os atributos nome, peso e altura
As pessoas devem ter a capacidade de dizer o valor do seu IMC ,IMC é peso / (altura * altura)),
Instancie uma pessoas chamada José que tenha 70 kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC.
*/

class Pessoas {

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }

    calculoImc(pessoa) {
        return ((pessoa.peso / (Math.pow(pessoa.altura, 2))).toFixed(2))
    }

    classificarImc(pessoa) {
        if (this.calculoImc(pessoa) < 18.5) {
            console.log('Abaixo do peso');
        }

        else if (this.calculoImc(pessoa) >= 18.5 && this.calculoImc(pessoa) < 25) {
            console.log('Peso normal');
        }

        else if (this.calculoImc(pessoa) >= 25 && this.calculoImc(pessoa) < 30) {
            console.log('Acima do peso');
        }
        else if (this.calculoImc(pessoa) >= 30 && this.calculoImc(pessoa) < 40){
            console.log('Obeso');
        }
        else {
            console.log('Obesidade grave')
        }
    }
}
const jose = new Pessoas('José', 70, 1.75)
const renan = new Pessoas('Renan', 63, 1.75)

console.log('O IMC de Jose é', jose.calculoImc(jose))
console.log('O IMC DE Renan é', renan.calculoImc(renan))
jose.classificarImc(jose);