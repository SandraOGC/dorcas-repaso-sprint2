'use strict';

var lista = document.querySelector('.news');
var listaItem = document.querySelectorAll('.news__item');


const data = [
  {
    title: 'Asteroids 101',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Life on Mars',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Martians invade Earth',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Humans aren\'t real',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Space The Final Frontier',
    image: 'https://via.placeholder.com/200x100'
  }
];

for (var i = 0; i < data.length; i++){
  // creo los li
  var newItems = document.createElement('li');
  // doy clase a los li
  newItems.classList.add('news__item');
  // creo los titulos
  var titulo= document.createElement('h2');
  titulo.classList.add('news__title')
  var content = document.createTextNode(data[i].title);

  // creo las imagenes
  var photo= document.createElement('img');
  photo.classList.add('news__image');
  photo.src = data[i].image;


  titulo.appendChild(content);
  newItems.appendChild(titulo);
  newItems.appendChild(photo);

  // para meter el li en el lu
  lista.appendChild(newItems);
}
// ejercico2

for (var i = 0; i < listaItem.length; i++){
  var contentTitle = document.querySelectorAll('.news__title').innerHTML;

  if ( (contentTitle.includes('Mars')) || (contentTitle.includes('Martian')) )  {
    listaItem.classList.add('news__item--from-mars');
    console.log('El título contiene la palabra buscada');

  }

}
