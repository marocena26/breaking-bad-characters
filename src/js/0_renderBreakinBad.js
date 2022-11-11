'use strict';

// QUERYSELECTOR

const charactersList = document.querySelector('.js__characters');
const favouritesList = document.querySelector('.js__favourites');

//VARIABLES GLOBALES -> VARIABLES CON DATOS DE LA APLICACIÓN (PERSONAJES Y FAVORITOS)

//FUNCIONES

//EVENTOS

//PETICIONES AL SERVIDOR

fetch('https://breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((data) => console.log(data));