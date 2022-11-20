function calcularImc(peso, altura) {
    return ((peso / Math.pow(altura, 2)).toFixed(2));
}

function classificarImc(imc) {

    if (imc < 18.5) {
        return "A pessoa está ABAIXO DO PESO.";
    }
    else if (imc >= 18.5 && imc < 25) {
        return "A pessoa está com o PESO NORMAL.";
    }
    else if (imc >= 25 && imc < 30) {
        return "A pessoa está ACIMA DO PESO.";
    }
    else if (imc >= 30 && imc < 40) {
        return "A pessoa está com OBESIDADE.";
    }
    else {
        return "A pessoa está com OBESIDADE GRAVE.";
    }
}

(function main(){
    
    const peSo = 60;
    const altuRa = 1.75;
    
    const iMc = calcularImc(peSo, altuRa)
    console.log(classificarImc(iMc),iMc)
    
})();

