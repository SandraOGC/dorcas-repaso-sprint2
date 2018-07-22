'use strict';
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
    const news__Item = document.createElement ('ĺi');
    const news__title = document.createElement ('h2');
    const news__image = document.createElement('image');
    //poner clases
    news__Item.classList.add('liElement');
    news__title.classList.add('h2Element');
    news__image.classList.add('imageElement');
    //hijos
    newsElement.appendChild(news__Item);
    news__Item.appendChild(news__title);
    news__Item.appendChild(news__image);
    //pintar elementos
    news__title.innerHTML = data.title;
    news__image.src = data.image;

  }
};

addList();

// function addElement(){
// var newItem = document.createElement('li');  // newElement.innerHTML += '<li class="news__item"><h2 class="news__title">${data[i].title} </h2><img  class="new__image" src="${data[i].image}" alt="${data[i].title}"></li>';
// console.log(newItem);

for (let i = 0; i < data.length; i++){

  // newElement.innerHTML += '<li class="news__item"><h2 class="news__title">${data[i].title} </h2><img  class="new__image" src="${data[i].image}" alt="${data[i].title}"></li>';


  // newElement.innerHTML += '<li class="news__item"><h2 class="news__title"> </h2><img  class="new__image" src="https://via.placeholder.com/200x100" alt="(' + i + ')"></li>';
}
// }}
// newElement.appendChild(list);
// list.appendChild(title);
// list.appendChild(image);
