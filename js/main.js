'use strict';
var campo = document.querySelector('.campo');
var boton = document.querySelector('.boton');
var error = document.querySelector('.error');

function llamada(event){
  if(campo.value === '2' || campo.value=== '4'|| campo.value=== '6'){
    error.innerHTML='';
    var url='https://raw.githubusercontent.com/oneeyedman/jasones/master/data/dataset-'+ campo.value +'.json';
    peticion(url);
}else{
    error.innerHTML='este número no es valido';
}
}
boton.addEventListener('click', llamada);

function peticion(appi){
  fetch(appi)
    .then(function(response){
      console.log(response.json());

    });
}
