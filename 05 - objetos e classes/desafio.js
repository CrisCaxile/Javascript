/*
1) Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilômetro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class carros{

    constructor(marca,cor,gastoMedioCombustivel){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivel = gastoMedioCombustivel;
    }

    gastoPercurso(KmRodado,PreçoCombustivel){
        const valor =  (this.gastoMedioCombustivel / PreçoCombustivel) * KmRodado;

        console.log('Seu gasto nesta viagem foi de',valor.toFixed(2),'R$');
    }

}

const carro1 = new carros('Fiat',"Branco",10);

carro1.gastoPercurso(100,4.61);