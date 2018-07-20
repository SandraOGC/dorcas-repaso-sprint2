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

// 1/ Listado de noticias
const printNews = (newsData) => {
  const newsItems = document.querySelector('.news');
  for (const item of newsData) {
    const newsItem = `
      <li class="news__item">
        <h2 class="news__title">${item.title}</h2>
        <img class="news__image" src="${item.image}" alt="${item.title}">
      </li>
    `;
    newsItems.insertAdjacentHTML('beforeEnd', newsItem);
  }
};

printNews(data);



// 2/ Marte, el planeta rojo
const highlightMarsRelatedNews = () => {
  const newsItemList = document.querySelectorAll('.news__item');

  for (const item of newsItemList) {
    const itemTitle = item.querySelector('.news__title').innerHTML;
    if ( (itemTitle.includes('Mars')) || (itemTitle.includes('Martian')) ) {
      item.classList.add('news__item--from-mars');
    }
  }
};

highlightMarsRelatedNews();

