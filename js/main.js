"use strict";

const element = document.querySelector('.news');

const data = [
  {
    title: "Asteroids 101",
    image: "https://via.placeholder.com/200x100"
  },
  {
    title: "Life on Mars",
    image: "https://via.placeholder.com/200x100"
  },
  {
    title: "Martians invade Earth",
    image: "https://via.placeholder.com/200x100"
  },
  {
    title: "Humans aren't real",
    image: "https://via.placeholder.com/200x100"
  },
  {
    title: "Space The Final Frontier",
    image: "https://via.placeholder.com/200x100"
  }
];

for (const bucle of data) {
  element.innerHTML += `<li class="news_item"><h2 class="news__title">${bucle.title}</h2><img class="news__image" src="${bucle.image}" alt="${
    bucle.title
  }"> </li>`;
}

// const noticias = newsData => {
//   const elementos = document.querySelector('.news');

//   for (const item of newsData) {
//     const elemento = `
//       <li class="news__item">
//         <h2 class="news__title">${item.title}</h2>
//         <img class="news__image" src="${item.image}" alt="${item.title}">
//       </li>
//     `;
//     elementos.insertAdjacentHTML('beforeEnd', elemento);
//   }
// };

// noticias(data);
