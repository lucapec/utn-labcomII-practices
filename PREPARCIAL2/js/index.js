var pesos = document.getElementById("pesos"); //Aca le asigno el selector, el valor va a ir variando
var monedaExtranjera = document.getElementById("selection");
var retornoz = 0;
var nombreMoneda;
var valorMoneda = 0;
var val1 = 0;
var val2= 0;


//Funcion de calculo válida primero antes de hacerlo
function calculo(){
    if( pesos.value == 0 || monedaExtranjera.value == 0){
        console.log(pesos);
        console.log(monedaExtranjera);
        alert("Por favor, revisa los datos ingresados");
    }else{
        retornoz = (pesos.value * monedaExtranjera.value).toFixed(2); //pesos .value es el valor del selector en el momento
        console.log(retornoz);                                       //porque a la variable le pase el selector
        retorno.innerHTML = "Su cambio es $ " + parseFloat(retornoz) + " pesos";

    }
}


function nuevoNombre(){ //Ojo que esta funcion esucha el cambio
    nombreMoneda = document.getElementById("newMoneda").value; //.value me pasa el valor del selector en el momento
    console.log(nombreMoneda);                                // Otra opcion seria "escuchar" los cambios ojo ahi boludo 
    if(nombreMoneda != 0){
        val1 = 1;
    }

}

function nuevoValor(){
    valorMoneda = parseFloat(document.getElementById("nuevosPesos").value);
    console.log(valorMoneda);
    if(valorMoneda != 0){
        val2 = 1;
    }
}
function agregateEsaMoneda(){
    
    // add option to select y valida
    if((val1 != 0) && (val2 != 0)){
    selection.options.add(new Option(nombreMoneda, parseFloat(valorMoneda)));
    }else{
        alert("Ocurrio un error");
    }
       
}
