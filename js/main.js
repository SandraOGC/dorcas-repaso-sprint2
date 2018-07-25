'use strict';
/*
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

// 1/ LISTADO DE NOTICIAS
// Creo una función que me solucione el trabajo aunque podría solucionarlo sin funciones. A mi función le pasaré el array de noticias con el parámetro newsData
const printNews = (newsData) => {
  // Busco el UL donde voy a poner las noticias
  const newsItems = document.querySelector('.news');

  // Recorro el array de noticias
  for (const item of newsData) {
    // Creando cada li
    const newsItem = `
      <li class="news__item">
        <h2 class="news__title">${item.title}</h2>
        <img class="news__image" src="${item.image}" alt="${item.title}">
      </li>
    `;
    // Y añadiéndolo al UL (se pueden usar otras formas)
    newsItems.insertAdjacentHTML('beforeEnd', newsItem);
  }
};

// Llamo a mi función que me escribe las noticias y le paso el array de datos
//printNews(data);



// 2/ MARTE, EL PLANETA ROJO
// Igual que antes, me ha parecido guay crearme una función que me ejecute la tarea
const highlightMarsRelatedNews = () => {
  // Busco todos los LI
  const newsItemList = document.querySelectorAll('.news__item');

  // Recorro mi lista de LIs
  for (const item of newsItemList) {
    // Recogiendo en una variable el contenido del título que hay dentro de cada LI
    const itemTitle = item.querySelector('.news__title').innerHTML;

    // Y compruebo si contiene la cadena 'Mars' o 'Martian'
    if ( (itemTitle.includes('Mars')) || (itemTitle.includes('Martian')) ) {
      // Si cualquiera de las condiciones del if es verdadera le aplico la clase pedida (recordad que hay que añadir los estilos en el scss indicado)
      item.classList.add('news__item--from-mars');
    }
  }
};

// Ahora llamo a mi función para que haga lo que le dicho que haga :)
//highlightMarsRelatedNews();



// 3/ EN EL ESPACIO NADIE PUEDE OIR TUS FETCHS
// Primero comento lo anterior como he hecho funciones, me basta con comentar las llamadas a las funciones (líneas 47 y 71)
// Ahora guardo en una variable la url para mi petición
var remoteNews = 'https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/news.json';

// Como soy de funciones voy a crear una que cuando reciba un array, me lo pinte
function showNews(arrayOfNews) {
  // Localizo el UL donde voy a insertar las noticias
  var newsList = document.querySelector('.news');

  // Recorro el array que me pasan por parámetro
  for (var n = 0; n < arrayOfNews.length; n++) {
    // Y almaceno, por cada item, el título y la ruta de la imagen
    var title = arrayOfNews[n].title;
    var image = arrayOfNews[n].image;

    // Creo mi variable donde irá cada LI
    var item = '<li class="news__item news__item--no-image-visible">';
    // Con su título
    item += '<h2 class="news__title">' + title + '</h2>';
    // Con su imagen
    item += '<img class="news__image" src="' + image + '" alt="' + title + '">';
    // Con su cierre de LI
    item += '</li>';

    // Y añado cada item
    newsList.insertAdjacentHTML('beforeEnd', item);
  }
  addListenerToNewsItems();
}

// También creo la función que va a pedir los datos
function getNews(fileURL) {
  // Hago la petición a la url que me pasen por parámetro
  fetch(fileURL)
    .then(function(res){
      // La convierto a JSON
      return res.json();
    })
    .then(function(json){
      // Cojo el array de noticias
      var news = json.news;

      // Y llamo a la función que escribe las noticias, pasándole el array de noticias
      showNews(news);
    })
}

// Ya sólo me queda llamar a la función que hace la petición, y pasarle la url
getNews(remoteNews);



// 4/ AHORA ME VES...
// Primero voy a añadir los estilos que me dan a mi archivo _news.scss
// Segundo, voy a tocar mi función showNews() para que añada por defecto la clase que necesitamos (línea 92)
// ahora voy a crear la función que hace que al hacer click en el LI ponga o quite la clase nueva
function revealOrHideImage(event) {
  var newsElement = event.currentTarget;
  newsElement.classList.toggle('news__item--no-image-visible');
}

// Y ahora voy a recorrer todos los elementos con clase `news__item` para añadirles el escuchador del evento
function addListenerToNewsItems() {
  var items = document.querySelectorAll('.news__item');
  console.log('> ' + items.length);

  for (var n=0;n<items.length; n++) {
    items[n].addEventListener('click', revealOrHideImage);
  }
};

// Pero no la voy a llamar a continuación sino justo después de llamar al final de ShowNews (línea 103), para asegurarme de que cuando llame a mi función los LI existan ya.
*/

// 5/ Todo es color entre tú y tus arrays...

/*
Antes de empezar tengo que planificar qué html voy a generar, así que me hago uno de prueba y así ajusto los estilos:

  <ul class="palettes">
    <li class="palette">
      <div class="palette__inner">
        <h2 class="pallete__name">Space Ship</h2>
        <ul class="colors">
          <li class="color" style="background-color:#FFBF2E;"></li>
          <li class="color" style="background-color:#E85E0C;"></li>
          <li class="color" style="background-color:#FF0000;"></li>
          <li class="color" style="background-color:#C70CE8;"></li>
          <li class="color" style="background-color:#330DFF;"></li>
        </ul>
      </div>
    </li>
  </ul>

  Teniendo claro con lo que voy a trabajar es mas fácil ;)
*/


// Primero hago referencia a los elementos del dom con los que voy a trabajar
const palettes = document.querySelector('.palettes');
// Y me guardo la url en otra variable
const url = 'https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/palette.json';

// me hago una función para pintar las paletas que luego llamaré cuando quiera y le paso por parámetro la url que me han dado y que guardé en una url
function drawPalettes(paletteURL) {
  // hago la petición
  fetch(paletteURL)
      // Y la respuesta la convierto en json
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      // y saco el array principal
      const remotePalettes = json.palettes;

      // Voy a sacar a una variable la lista de colores
      for (const item of remotePalettes) {
        // Por cada color (el array interior) genero un li con mis clases y el color metido por style
        let colors = '';
        for (const col of item.colors) {
          colors += `<li class="color" style="background-color:#${col};"></li>`;
        }

        // compruebo que tengo lo que quiero
        console.log('> ' + colors);

        // ahora me creo el li superior de cada paleta
        const pal = `
          <li class="palette">
            <div class="palette__inner">
              <h2 class="pallete__name">${item.name}</h2>
              <ul class="colors">${colors}</ul>
            </div>
          </li>
        `;

        // Y lo voy añadiendo, uno a uno, a la lista
        palettes.insertAdjacentHTML('beforeEnd', pal);
      }
    });
}

// Llamo a mi función y le paso la url :)
drawPalettes(url);


