'use strict';
const lista = document.querySelector('.nums');
const texto = document.querySelector('.parrafo');

const numeros = [1, 4, 2, 5];

for (const list of numeros){
  const listado = document.createElement('li');
  const listadoP = document.createElement('p');

  const extraContent = document.createTextNode(list);

  listadoP.appendChild(extraContent);
  listado.appendChild(listadoP);
  listado.addEventListener('click', nose);
  lista.appendChild(listado);

}

function nose (e){
  texto.innerHTML = e.currentTarget.querySelector('p').innerHTML;
}
