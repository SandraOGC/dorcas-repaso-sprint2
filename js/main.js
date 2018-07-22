'use strict';

var lista = document.querySelector('.news');

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
function printNews(){
  for (var i = 0; i < data.length; i++){
    // creo los li
    var newItems = document.createElement('li');
    // doy clase a los li
    newItems.classList.add('news__item');
    // creo los titulos
    var titulo= document.createElement('h2');
    titulo.classList.add('news__title');
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

}
// printNews();
// ejercico2

var listaItem = document.querySelectorAll('.news__item');

function selectTitle(){

  for (var j = 0; j < listaItem.length; j++){
    var contentTitle = listaItem[j].querySelector('.news__title').innerHTML;
    console.log(contentTitle);
    if ( (contentTitle.includes('Mars')) || (contentTitle.includes('Martian')) )  {
      listaItem[j].classList.add('news__item--from-mars');
    }
  }
}
// selectTitle();

// ejercico3

function printApi(){

var lista = document.querySelector('.news');
  var appi =' https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/news.json ';
  fetch(appi)
    .then(function(response){
      return response.json();

    })
    .then(function(newsAppi){

      for (var x = 0; x < newsAppi.news.length; x++){

        var newItems = document.createElement('li');
        // doy clase a los li
        newItems.classList.add('news__item');
        // creo los titulos
        var titulo= document.createElement('h2');
        titulo.classList.add('news__title');
        var content = document.createTextNode(newsAppi.news[x].title);

        // creo las imagenes
        var photo= document.createElement('img');
        photo.classList.add('news__image');
        photo.src = newsAppi.news[x].image;

        titulo.appendChild(content);
        newItems.appendChild(titulo);
        newItems.appendChild(photo);

        // para meter el li en el lu
        lista.appendChild(newItems);

      }

    });


}
printApi();
