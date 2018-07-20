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
// Creo una función que me solucione el trabajo aunque podría solucionarlo sin funciones. A mi función le pasaré el array de noticias con el parámetro newsData
const printNews = (newsData) => {
  // busco el UL donde voy a poner las noticias
  const newsItems = document.querySelector('.news');

  // recorro el array de noticias
  for (const item of newsData) {
    // creando cada li
    const newsItem = `
      <li class="news__item">
        <h2 class="news__title">${item.title}</h2>
        <img class="news__image" src="${item.image}" alt="${item.title}">
      </li>
    `;
    // y añadiéndolo al UL (se pueden usar otras formas)
    newsItems.insertAdjacentHTML('beforeEnd', newsItem);
  }
};

// llamo a mi función que me escribe las noticias y le paso el array de datos
printNews(data);



// 2/ Marte, el planeta rojo
// Igual que antes, me ha parecido guay crearme una función que me ejecute la tarea
const highlightMarsRelatedNews = () => {
  // busco todos los LI
  const newsItemList = document.querySelectorAll('.news__item');

  // recorro mi lista de LIs
  for (const item of newsItemList) {
    // recogiendo en una variable el contenido del título que hay dentro de cada LI
    const itemTitle = item.querySelector('.news__title').innerHTML;

    // y compruebo si contiene la cadena 'Mars' o 'Martian'
    if ( (itemTitle.includes('Mars')) || (itemTitle.includes('Martian')) ) {
      // si cualquiera de las condiciones del if es verdadera le aplico la clase pedida (recordad que hay que añadir los estilos en el scss indicado)
      item.classList.add('news__item--from-mars');
    }
  }
};

// Ahora llamo a mi función para que haga lo que le dicho que haga :)
highlightMarsRelatedNews();

