"use strict";

// const data = [
//   {
//     title: 'Asteroids 101',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Life on Mars',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Martians invade Earth',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Humans aren't real',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Space The Final Frontier',
//     image: 'https://via.placeholder.com/200x100'
//   }
// ];

// const lista = document.querySelector('.news');

// for (const bucle of data){
//   const list = document.createElement('li');
//   const titulo = document.createElement('h2');
//   const photo = document.createElement('img');

//   lista.appendChild(list);
//   list.appendChild(titulo);
//   list.appendChild(photo);

//   const text = document.createTextNode(bucle.title);
//   photo.src = bucle.image;

//   list.classList.add('news__item');
//   titulo.classList.add('news__title');
//   photo.classList.add('news__image');
//   titulo.appendChild(text);
// }

// const noticias = newsData => {
//   const elementos = document.querySelector('.news');

//   for (const item of newsData) {
//     const elemento = `
//       <li class='news__item'>
//         <h2 class='news__title'>${item.title}</h2>
//         <img class='news__image' src='${item.image}' alt='${item.title}'>
//       </li>
//     `;
//     elementos.insertAdjacentHTML('beforeEnd', elemento);
//   }
// };

// noticias(data);

// const newsMars = () => {
//   const newsItem = document.querySelectorAll ('.news__item');

//   for (const item of newsItem) {
//     const itemTitulo = item.querySelector('.news__title').innerHTML;

//     if ( (itemTitulo.includes('Mars')) || (itemTitulo.includes('Martian')) ) {
//       item.classList.add('news__item--from-mars');
//     }
//   }
// };

// newsMars ();

//ejercicio 3

var list = document.querySelector(".news");
var noticias = [];

const show = () => {
  fetch(
    "https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/news.json"
  )
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(respuesta2) {
      // console.log(respuesta2);
      noticias = respuesta2.news;

      for (const noticia of noticias) {
        const lista = document.createElement("li");
        const titulo = document.createElement("h2");
        const photo = document.createElement("img");

        lista.classList.add("news__item");
        titulo.classList.add("news__title");
        photo.classList.add("news__image");

        const text = document.createTextNode(noticia.title);
        titulo.appendChild(text);
        photo.src = noticia.image;

        lista.append(titulo, photo);
        list.appendChild(lista);

        if (noticia.respuesta2 === noticia.respuesta2) {
          photo.classList.remove("news__image");
          photo.classList.toggle("news__item--no-image-visible");
        }

        visible();
      }
    });
};

show();

function visible() {
  var allLi = document.querySelectorAll("news__item--no-image-visible");
  for (const oneLi of allLi) {
    oneLi.addEventListener("click", showImage);
  }
}

function showImage(event) {
  event.currentTarget.classList.toggle("news__image");
}

