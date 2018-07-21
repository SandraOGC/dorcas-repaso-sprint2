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

console.log(data[1]);
const news = document.querySelector('.news');

// painting tittle and image
for(var i = 0; i < data.length; i++){
  var listElement = document.createElement('li');
  listElement.classList.add('.listElement');
  news.appendChild(listElement);
  var filmTitle =document.createElement('h2');
  listElement.appendChild(filmTitle);
  var filmImage = document.createElement('img');
  listElement.appendChild(filmImage);
  var titleOfTheFilm = data[i].title;
  filmTitle.innerHTML = titleOfTheFilm;
  var imageOfTheFilm = data[i].image;
  filmImage.innerHTML = imageOfTheFilm;
  filmImage.setAttribute('src', imageOfTheFilm);
  filmImage.setAttribute('alt', titleOfTheFilm);
}
