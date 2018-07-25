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

for(let i = 0; i<data.length; i++){
    const list = document.querySelector('.news');
    const newsList = document.createElement('li');
    const pic = document.createElement('img');
    const parr = document.createElement('p');
    list.appendChild(newsList);
    newsList.appendChild(pic);
    newsList.appendChild(parr);
    parr.innerHTML = data[i].title;
    pic.src = data[i].image;
}
