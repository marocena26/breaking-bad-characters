'use strict';

//--------------------CONSTANTES--------------------//

const charactersList = document.querySelector('.js__characters');
const favouritesList = document.querySelector('.js__favourites');

//--------------------VARIABLES--------------------//

let myCharactersList = []; //Array vacío. Necesitamos una variable (let) que guarde los datos que vamos a traernos de la API de BB.

let myFavouritesList = []; //Array vacío. Necesitamos una variable (let) que guarde los datos que vamos a traernos de la API de BB marcados como favoritos.

//--------------------FUNCIONES--------------------//

//Función para pintar cada UNO de los elementos: cada personaje con su correspondiente foto, nombre y estado.

function renderCharacter(character) { //el parámetro 'character' obtiene la información de renderCharacter(myCharactersList[i]). Le pido que recorra el índice de cada uno de los elementos del array que estaba vacío y que llenamos con la información que nos da el servidor.

  let liElement = //Variable vacía dónde voy a ir añadiendo todo lo que me devuelve la función.

    `<li>
    <article>
        <img src="${character.img}" alt="" class="characters__ul--img">
        <h3 class="characters__ul--name">${character.name}</h3>
        <p class="characters__ul--status">${character.status}</p>
    </article>
    </li>`;

  return liElement;
}

//Función para que pinte todos los elementos del array.
function renderCharactersList () {
  let liElement = '';

  for (let i = 0; i < myCharactersList.length; i++) { ///i representa cada elemento del array, en este caso cada personaje con su información correspondiente.
    liElement += renderCharacter(myCharactersList[i]);
  }

  charactersList.innerHTML = liElement; //Todo lo acumulado en la variable se pinta en mi array vacío de personajes.

  //addShipsListerers();
}

//---------------------EVENTOS---------------------//

//----CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA----//

renderCharactersList();

fetch('https://breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((jsonData) => {
    myCharactersList = jsonData; //mi array vacío es igual a jasonData, todos los elementos que cogemos de la URL se meten en él.
    renderCharactersList();//los mando pintar.
  });
