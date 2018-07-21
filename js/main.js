'use strict';

var newElement = document.querySlector('.news');
var list = document.querySlector('.news__item');
var title = document.querySlector('.news__title');
var image = document.querySlector('.news__image');

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

function newElement(){

for (var i = 0; i < data.length; i++){
  // newElement.innerHTML

  }}
newElement.appendChild(list);
list.appendChild(title);
list.appendChild(image);
