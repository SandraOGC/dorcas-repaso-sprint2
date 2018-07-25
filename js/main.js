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


const ul = document.querySelector('.news');

for (let item of data){ 
//const [title, imagen] = data;
const newLi = document.createElement('li');
const info= document.createTextNode(item);

newLi.appendChild(info);
ul.appendChild(newLi);

}
// console.log(info)
// console.log(newLi)
// console.log(item)
// console.log(ul)

// for (x=0;x<data.length;x++){
//   document.write(data[title] + " ");
// }