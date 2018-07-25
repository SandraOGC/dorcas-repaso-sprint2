'use strict';

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


const UL = document.querySelector('.news');
//selecciono al Ul por su clase

for (let movie of data){ 
  //bucle q recorre el array
  
  const newLi = document.createElement('li');
  const newH2= document.createElement('h2');
  const newImage = document.createElement('img');
  //en variable pinto n cada iteración un elemento LI, un H2 y un IMG vacios
  
  console.log(movie);
  //compruebo que movie me enseña los objetos del array n la consola
  
  newLi.classList.add('.news__item');
  newH2.classList.add('.news__title');
  newImage.classList.add('.news__image');
  //le pongo una clase a cada elemento recien creado

  console.log(newLi);
  console.log(newH2);
  console.log(newImage);
  //compruebo los elementos creados llevan su clase correspondiente

  newH2.innerHTML = movie.title;
  newImage.src = movie.image;
  //les paso a los elementos H2 e Img su contenido del array

  newLi.appendChild(newH2);
  newLi.appendChild(newImage);
  //meto los elementos H2 y Img en el li
  UL.appendChild(newLi);
  //meto los li en la ul
}