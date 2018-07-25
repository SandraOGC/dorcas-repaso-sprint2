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

const UL = document.querySelector(".news");
console.log(UL);

for (let item of data){
  console.log(item);
  const newLi = document.createElement("li");
  const newH2 = document.createElement("h2");
  const newImg = document.createElement("img");

  newH2.innerHTML = item.title;
  newImg.src = item.image;

  newLi.classList.add("news__item");
  newH2.classList.add("news__title");
  newImg.classList.add("news__image");

  newLi.appendChild(newH2);
  newLi.appendChild(newImg);
  UL.appendChild(newLi);
}

const LIS = document.querySelectorAll(".news__item");
console.log(LIS);

for (let li of LIS){
  console.log(li);
  const H2 = li.querySelector(".news__title");
  const TITLE = H2.innerHTML; 
  console.log(TITLE);

if (TITLE.includes("Mars")) {
  li.classList.add("news__item--from-mars");
} else if (TITLE.includes("Martian")) {
    li.classList.add("news__item--from-mars");
}
}
