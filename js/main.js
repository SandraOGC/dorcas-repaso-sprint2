'use strict';
//MOVER EVERYTHING Y CAMBIA LAS CLASES EN EL SCSS

const newsElement = document.querySelector('.news');

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

const addList = () => {
  for(let planet of data) {
    //crear elementos
    //tengo cambiar los nombres por los que me han dado
    const news__Item = document.createElement ('ĺi');
    const news__title = document.createElement ('h2');
    const news__image = document.createElement('img');
    //poner clases
    news__Item.classList.add('liElement');
    news__title.classList.add('titleElement');
    news__image.classList.add('imageElement');
    //hijos
    newsElement.appendChild(news__Item);
    news__Item.appendChild(news__title);
    news__Item.appendChild(news__image);
    //pintar elementos
    //ahora mi [i] del bucle se llama planet
    news__title.innerHTML = planet.title;
    //src es la ruta de la imagen donde meto su URL
    news__image.src = planet.image;

    //EJERCICIO 2
      console.log(news__title);
    if (news__title.innerHTML.includes('Mars') || news__title.innerHTML.includes('Martians')){
      news__Item.classList.add('news__item--from-mars');
    } else {
      console.log('No contiene la palabra Mars ni Martian');
    }
  }
};
//por último, tengo que hacer la llamada de la función para que se ejecute
addList();
