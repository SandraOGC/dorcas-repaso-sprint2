'use strict';

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
//     title: 'Humans aren\'t real',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Space The Final Frontier',
//     image: 'https://via.placeholder.com/200x100'
//   }
// ];

// console.log(data[1]);
// const news = document.querySelector('.news');
// // ejercicio1 y 2 repaso
// // painting tittle and image
// for(var i = 0; i < data.length; i++){
//   var listElement = document.createElement('li');
//   listElement.classList.add('news__item');
//   news.appendChild(listElement);
//   var filmTitle =document.createElement('h2');
//   filmTitle.classList.add('news__title');
//   listElement.appendChild(filmTitle);
//   var filmImage = document.createElement('img');
//   filmImage.classList.add('news__image');
//   listElement.appendChild(filmImage);
//   var news__title = data[i].title;
//   filmTitle.innerHTML = news__title;
//   var imageOfTheFilm = data[i].image;
//   filmImage.innerHTML = imageOfTheFilm;
//   filmImage.setAttribute('src', imageOfTheFilm);
//   filmImage.setAttribute('alt', news__title);

//   if(news__title.includes('Mars')){
//   listElement.classList.add('news__item--from-mars');}
//   else if (news__title.includes('Martian')){
//   listElement.classList.add('news__item--from-mars');}
//   else{
//     listElement.classList.add('news__item--no-martians');
//   }
// }

// ejercicio3;
var listElement;
var news = document.querySelector('.news');
fetch('https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/news.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson.news);
    for (var i = 0; i < myJson.news.length; i++) {
      listElement = document.createElement('li');
      console.log('list element', listElement);
      news.appendChild(listElement);
      listElement.classList.add('news__item', 'news__item--no-image-visible');
      listElement.addEventListener('click', showAndHide);

      // creando título
      var elementTitle = document.createElement('h2');
      elementTitle.classList.add('news__title');
      listElement.appendChild(elementTitle);
      var title = myJson.news[i].title;
      elementTitle.innerHTML = title;

      // creando img
      var elementImage = document.createElement('img');
      elementImage.classList.add('news__image');
      listElement.appendChild(elementImage);
      var image = myJson.news[i].image;
      elementImage.setAttribute('src', image);
      elementImage.setAttribute('alt', title);

      if (elementTitle.classList.contains('Mars')) {
        listElement.classList.add('news__item--from-mars');
      }
      else if (elementTitle.classList.contains('Martian')) {
        listElement.classList.add('news__item--from-mars');
      }
      else {
        listElement.classList.add('news__item--no-martians');
      }

    }
  });

function showAndHide(e) {
  var listElementBox = e.currentTarget;
  if (listElementBox.classList.contains('news__item--no-image-visible')) {
    listElementBox.classList.remove('news__item--no-image-visible');
  }
  else {
    listElementBox.classList.add('news__item--no-image-visible');
  }
}


// console.log(myJson.news[1].title);
