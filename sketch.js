const horas= document.getElementById('horas');
const minutos=document.getElementById('minutos');
const segundo=document.getElementById('segundos');

const relogio =setInterval(function time(){
    let dateToday =new Date();
    let hr = dateToday.getHors();
    let min =dateToday.getMinutes();
    let seg = dateToday.getSegunds();

    if (hr<10) hr = '0' + hr;

    if (min <10) min = '0' + min;

    if (seg < 10 ) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent= min;
    segunos.textContent= seg;

}
)

