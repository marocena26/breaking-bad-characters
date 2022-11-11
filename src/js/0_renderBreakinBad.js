'use strict';

//--------------------CONSTANTES--------------------//

const charactersList = document.querySelector('.js__characters');
const favouritesList = document.querySelector('.js__favourites');

//--------------------VARIABLES--------------------//

let myCharactersList = []; //Array vacío. Necesitamos una variable (let) que guarde los datos que vamos a traernos de la API de BB.

let myFavouritesList = []; //Array vacío. Necesitamos una variable (let) que guarde los datos que vamos a traernos de la API de BB marcados como favoritos.

//--------------------FUNCIONES--------------------//

function renderCharacter(character) {
  let html = `
    <li><img src="${character.img}" alt=""></li>
    <li>${character.name}</li>
    <li>${character.status}</li>`;
  return html;
}

function renderCharactersList () {
  let html = '';

  for (let i = 0; i < myCharactersList.length; i++) {
    html += renderCharacter(myCharactersList[i]);
  }

  charactersList.innerHTML = html;

  //addShipsListerers();
}

//---------------------EVENTOS---------------------//

//----CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA----//

renderCharactersList();

fetch('https://breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((jsonData) => {
    myCharactersList = jsonData;

    renderCharactersList();
  });
