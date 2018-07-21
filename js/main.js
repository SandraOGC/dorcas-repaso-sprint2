'use strict';

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

const newsMars = () => {
  const newsItem = document.querySelector ('.news__item');

  for (const item of newsItem) {
    const itemTitulo = item.querySelector('.news__title').innerHTML;

    if ( (itemTitulo.includes('Mars')) || (itemTitulo.includes('Martian')) ) {
      item.classList.add('news__item--from-mars');
    }
  }
};

newsMars ();
