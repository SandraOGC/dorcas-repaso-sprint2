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


//const newItem = document.createElement('li');
//const newContent = document.getAttribute(data);
//newItem.appendChild(newContent);
//console.log(newItem); 

//function showList(event){
// const gimmeArr = event.currentTarget.getAttribute('data.value');
//alert(event.currentTarget.innerHTML + data.value);
//}
//console.log(showList);

//const newItem = document.createElement('li');
//const ul = document.querySelector('.news');
//ul.setAttribute('data', 'title'); 
//newItem.appendChild(ul);

const newsElem = document.querySelector('.news');

const newLi = document.createElement('li');
//newLi.innerHTML(data[0]); 
newLi.className = 'item item--1bis';
const newItemContent = document.createTextNode('Item 1 bis');
newLi.appendChild(newItemContent);
//console.log(newLi);

  for (let i=0; i< 5; i++) {
    newLi = '<li class="news__item"></li>';
    newsList.innerHTML += newLi;
  }