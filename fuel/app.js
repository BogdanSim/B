//km, litri, butoncalc, strong


var km = document.querySelector('#km');
var litri = document.querySelector('#litri');
var butonCalc = document.querySelector('#calculateBtn');

var consumFinal = document.querySelector('#consumFinal');

butonCalc.addEventListener('click', function (){
    if(litri.value ==''|| km.value==''){
        alert('Completeaza toate campurile cu cifre !')
        return;
    }


    var result = (100*litri.value)/km.value;

    consumFinal.innerHTML = result.toFixed(1);
})

