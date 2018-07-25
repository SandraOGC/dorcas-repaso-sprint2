'use strict';

var newsList = document.querySelector('.news');
console.log(newsList);

var newsListItems;

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

for (var i = 0; i<data.length; i++){
  console.log(data[i]);

  var newLi = document.createElement('li');
  var newH2 = document.createElement('h2');
  var newImg = document.createElement('img');

  newH2.innerHTML = data[i].title;
  newImg.src = data[i].image;

  newLi.classList.add('news__item');
  newH2.classList.add('news__title');
  newImg.classList.add('news__image');

  newLi.appendChild(newH2);
  newLi.appendChild(newImg);
  newsList.appendChild(newLi);
}

newsListItems = document.querySelectorAll('.news__item');
console.log(newsListItems);

for (var j = 0; j<newsListItems.length; j++){
  console.log(newsListItems[j]);

  var h2 = newsListItems[j].querySelector('.news__title');
  console.log(h2.innerHTML);
}
