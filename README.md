# dorcas-repaso-sprint2
Ejercicios de refuerzo del sprint2

Son opcionales y no sustituyen el repaso personal.

<!-- TOC depthFrom:2 -->

- [Pautas](#pautas)
- [1/ Listado de noticias](#1-listado-de-noticias)
- [2/ Marte, el planeta rojo](#2-marte-el-planeta-rojo)
- [3/ En el espacio nadie puede oir tus fetchs](#3-en-el-espacio-nadie-puede-oir-tus-fetchs)

<!-- /TOC -->

## Pautas
1. Clona el repo.
2. Crea una rama con tu nombre (por ejemplo, carlos-mananas).
3. Ve añadiendo ejercicios y avisa cuando tengas alguno listo para revisarlo.
4. Disfruta la fruta.


## 1/ Listado de noticias
Hay que pintar en el html un listado a partir del array que tenemos en el js.
En index.html hay un ejemplo de como debe quedar cada li, con sus clases y tal para que nadie se pierda en estilos o en algo que no sea js.

## 2/ Marte, el planeta rojo
Una vez tenemos nuestra lista de noticias vamos a destacar los resultados "marcianos" aplicando la clase `.news__item--from-mars`.

Aplicaremos esta clase a los `<li>` cuyo título contenga “Mars” o “Martian”, para ello:
1. Buscaremos todos los elementos con clase `.news__item`.
2. Recorreremos la lista de elementos almacenando en una variable el contenido del título de cada elemento.
3. Usando el método `includes()` comprobaremos si contienen “Mars” o “Martian” y aplicaremos al `li`correspondiente la clase `.news__item--from-mars`
4. Tada!!

***

* [Ejemplo de .includes() en Codepen](https://codepen.io/adalab/pen/WKoLGJ?editors=1111)
* [Includes en la MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

***

En el archivo **scss/components/_news.scss** habrá que añadir estas clases:
```scss
.news__item--from-mars {
  border-color: #BC2731;
  box-shadow: 0 1px 4px rgba(#BC2731, .6);
  .news__title {
    color: #BC2731;
  }
  .news__image {
    box-shadow: 0 0 0 3px rgba(#BC2731, .8);
    border-radius: 5px;
  }
}
```

## 3/ En el espacio nadie puede oir tus fetchs
Todo el mundo sabe que en el espacio la comunicación es remota, así que vamos a pedir las noticias a casa. Para ello nos han dado la siguiente url:
```
https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/news.json
```
Tendremos que comentar el código anterior y volver a pintar nuestras noticias, pero esta vez las recibidas tras hacer la petición a nuesta API de noticias de casa.
