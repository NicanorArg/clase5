let horasTotales = 0;
let minutosTotales = 0;
let segundosTotales = 0;

let horas;
let minutos;
let segundos;

document.querySelector('#calcular-tiempo-total').onclick = function() {
    horas = Number(document.querySelector('#horas').value);
    minutos = Number(document.querySelector('#minutos').value);
    segundos = Number(document.querySelector('#segundos').value);

    horasTotales += horas;
    minutosTotales += minutos;
    segundosTotales += segundos;

    document.querySelector('#tiempo-total').innerText = `En el curso de r/argentina programa, hay ${horasTotales} horas, ${minutosTotales} minutos y ${segundosTotales} segundos de clases.`
    
    document.querySelector('#horas').value = '';
    document.querySelector('#minutos').value = '';
    document.querySelector('#segundos').value = '';
    
    return false;
}
