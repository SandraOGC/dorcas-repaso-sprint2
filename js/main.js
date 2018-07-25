'use strict';

const newsElement = document.querySelector('.news');
const news__item = document.createElement ('ĺi');
const news__title = document.createElement ('h2');
const news__image = document.createElement('img');

news__item.classList.add('news__item'); news__title.classList.add('news__title');
news__image.classList.add('news__image');

newsElement.appendChild(news__item);
news__item.appendChild(news__title);
news__item.appendChild(news__image);

const button = document.createElement('boton');
const input = document.createElement ('input');

function showPlanet(){
  fetch ('https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/news.json')
    .then(function(response){
      return response.json();
    })
    .then (function(json){
      for(var i= 0; i<json.length; i++){
        console.log('lol');
        const title = document.createTextNode(json[i].news.title);
        const image = document.createElement(json[i].news.image);
      }
    });
}
button.addEvenListener('click', showPlanet);

// const newsElement = document.querySelector('.news');
//
// const data = [
//   {
//     title: 'Asteroids 101',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Life on Mars',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Martians invade Earth',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Humans aren\'t real',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Space The Final Frontier',
//     image: 'https://via.placeholder.com/200x100'
//   }
// ];
//
// const addList = () => {
//   for(const planet of data) {
//     //crear elementos
//     //tengo cambiar los nombres por los que me han dado
//     const news__item = document.createElement ('ĺi');
//     const news__title = document.createElement ('h2');
//     const news__image = document.createElement('img');
//     //poner clases
//     news__item.classList.add('news__item');
//     news__title.classList.add('news__title');
//     news__image.classList.add('news__image');
//     //hijos
//     newsElement.appendChild(news__item);
//     news__item.appendChild(news__title);
//     news__item.appendChild(news__image);
//     //pintar elementos
//     //ahora mi [i] del bucle se llama planet
//     news__title.innerHTML = planet.title;
//     //src es la ruta de la imagen donde meto su URL
//     news__image.src = planet.image;
//
//     //EJERCICIO 2
//     console.log(news__title);
//     //la condicional tb podría ser: if(planet.title.includes...)
//     if (news__title.innerHTML.includes('Mars') || news__title.innerHTML.includes('Martians')){
//       news__item.classList.add('news__item--from-mars');
//     } else {
//       console.log('No contiene la palabra Mars ni Martian');
//     }
//   }
// };
// //por último, tengo que hacer la llamada de la función para que se ejecute
// addList();
