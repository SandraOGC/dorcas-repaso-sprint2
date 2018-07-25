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

const list = document.querySelector('.news');
const newsList = document.createElement('li');
const pic = document.createElement('img');
const parr = document.createElement('p');

function NewsList(){
  /*for(let i = 0; i<data.length; i++){
    list.appendChild(newsList);
    newsList.appendChild(pic);
    newsList.appendChild(parr);
    parr.innerHTML = data[i].title;
    pic.src = data[i].image;
    data[i].className+=" news__item--from-mars";
    if (newsList.includes('Mars')) {
      data[i].className+="news__title"; 
    } else if (newsList.includes('Martian')) {
      data[i].className+="news__image"; 
    }
  }*/
  fetch ('https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/news.json')
  .then(function(response){
    return response.json
  })
  .then(function(json){
    list.appendChild(newsList);
    newsList.appendChild(pic);
    newsList.appendChild(parr);
    parr.innerHTML=json.title;
    pic.src=json.image;
    if (newsList.includes('Mars')) {
      newsList.className+="news__title"; 
    } else if (newsList.includes('Martian')) {
      newsList.className+="news__image"; 
    }
  });
}

NewsList();