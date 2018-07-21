"use strict";

const element = document.querySelector(".news");

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

// const lista = document.querySelector(".news");

// for (const i of data) {
//   const lista = document.createElement("li");
//   const title = document.createElement("h2");
//   const text = document.createTextNode(data[i].title);

//   lista.appendChild(list);
//   list.appendChild(title);

//   list.classList.add("news__item");
//   title.classList.add("news__title");
//   title.appendChild(text);
// }

const noticias = newsData => {
  const elementos = document.querySelector('.news');

  for (const item of newsData) {
    const elemento = `
      <li class="news__item">
        <h2 class="news__title">${item.title}</h2>
        <img class="news__image" src="${item.image}" alt="${item.title}">
      </li>
    `;
    elementos.insertAdjacentHTML('beforeEnd', elemento);
  }
};

noticias(data);
