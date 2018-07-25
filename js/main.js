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

function newsLista (){
  for(let i = 0; i<data.length; i++){
    const lista = document.querySelector('.news');
    const newsList = document.createElement('li');
    lista.appendChild(newsList);
    newsList.innerHTML = data[i].title;
    const pic = document.createElement('img');
    cosas.appendChild(pic);
    pic.src = data[i].image;
  }
}

newsLista();