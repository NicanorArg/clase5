let itemsDeLista = document.querySelectorAll('li');
let numeros = [];

for (let i=0;i<itemsDeLista.length;i++) {
    numeros.push(Number(itemsDeLista[i].innerHTML))
}

document.querySelector('button').onclick = function() {
    document.querySelector('#promedio').innerText = 'El promedio es ' + calcularPromedio(numeros);
    document.querySelector('#menor-numero').innerText = 'El numero menor es ' + encontrarMenorNumero(numeros);
    document.querySelector('#mayor-numero').innerText = 'El numero mayor es ' + encontrarMayorNumero(numeros);
    document.querySelector('#numero-frecuente').innerText = 'El numero mas frecuente es ' + encontrarNumeroFrecuente(numeros);
}

let promedio;
function calcularPromedio(arrayNumeral) {
    let sumatoria = 0;
    for (let i=0;i<arrayNumeral.length;i++) {
        sumatoria += arrayNumeral[i]
    }
    return sumatoria / (arrayNumeral.length - 1);
}

let menorNumero;
function encontrarMenorNumero(arrayNumeral) {
    menorNumero = arrayNumeral[0];
    for (let i=1;i<arrayNumeral.length;i++) {
        if(arrayNumeral[i] < menorNumero){
            menorNumero = arrayNumeral[i]
        }
    }
    return menorNumero;
}

let mayorNumero;
function encontrarMayorNumero(arrayNumeral) {
    mayorNumero = arrayNumeral[0];
    for (let i=1;i<arrayNumeral.length;i++) {
        if(arrayNumeral[i] > mayorNumero){
            mayorNumero = arrayNumeral[i]
        }
    }
    return mayorNumero;
}

let numeroFrecuente;
function encontrarNumeroFrecuente(arrayNumeral) {
    const contadorDeRepeticiones = {};
    let maximasRepeticiones = 0;
    
    for (let i=0;i<arrayNumeral.length;i++) {
        let numero = numeros[i];
        
        contadorDeRepeticiones[numero] = (contadorDeRepeticiones[numero] || 0) + 1;
        if (contadorDeRepeticiones[numero] > maximasRepeticiones) {
            
            maximasRepeticiones = contadorDeRepeticiones[numero];
            numeroFrecuente = numero;

        }
    }

    return numeroFrecuente;
    
}
