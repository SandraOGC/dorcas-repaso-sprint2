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

var item = '';
var ul = document.querySelector('.news');
//function hola(data) {
for (item of data){ ;
var newLi = document.createElement('li');
newLi.innerHTML += (data.title);
}
console.log(newLi)
console.log(item)
console.log(ul)

// for (x=0;x<data.length;x++){
//   document.write(data[title] + " ");
// }