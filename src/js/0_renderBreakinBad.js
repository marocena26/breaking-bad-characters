'use strict';

//--------------------CONSTANTES--------------------//

const charactersList = document.querySelector('.js__characters');
const favouritesList = document.querySelector('.js__favourites');
const searchInput = document.querySelector('.js__search_input');
const searchBtn = document.querySelector('.js__search_btn');

//--------------------VARIABLES--------------------//

let myCharactersList = [];

let myFavouritesList = [];

let filteredCharacters = [];

//--------------------FUNCIONES--------------------//

//Función para pintar cada UNO de los elementos: cada personaje con su correspondiente foto, nombre y estado.

function renderCharacter(character) {
  let liElement =

    `<li>
    <article class="js__characters_article" id="${character.char_id}"> 
        <img src="${character.img}" alt="" class="characters__ul--img">
        <h3 class="characters__ul--name">${character.name}</h3>
        <p class="characters__ul--status">${character.status}</p>
    </article>
    </li>`;

  return liElement;
}

//Función para asignar un evento a todos los elementos de mi página.
function selectFavouriteCharacters() {
  const charactersArticle = document.querySelectorAll('.js__characters_article');

  for (const eachCharactersArticle of charactersArticle) { 
    eachCharactersArticle.addEventListener('click', handleClickFavourites);
  }
}


//Función para que pinte todos los elementos del array.
function renderCharactersList () {
  let liElement = '';

  for (let i = 0; i < myCharactersList.length; i++) {
    liElement += renderCharacter(myCharactersList[i]);
  }

  charactersList.innerHTML = liElement;
  selectFavouriteCharacters();

}

//Función que pinte los favoritos en pantalla.

function renderFavouritesList () {
  let liElement = '';

  for (let i = 0; i < myFavouritesList.length; i++) { 
    liElement += renderCharacter(myFavouritesList[i]);
  }

  favouritesList.innerHTML = liElement;
}

//Funcion pintar busqueda

function renderFilteredCharacters () {
  let liElement = '';

  for (let i = 0; i < filteredCharacters.length; i++) { 
    liElement += renderCharacter(filteredCharacters[i]);
  }

  charactersList.innerHTML = liElement;
}


//---------------------EVENTOS---------------------//

function handleClickFavourites(event) {
  event.currentTarget.classList.toggle('selected');
  const selectFavouriteObj = myCharactersList.find((eachCharacter) =>  eachCharacter.char_id === parseInt(event.currentTarget.id));
  const myFavouriteObj = myFavouritesList.findIndex((eachCharacter) =>  eachCharacter.char_id === parseInt(event.currentTarget.id));
  if (myFavouriteObj === -1) {
    myFavouritesList.push(selectFavouriteObj);
  } else {
    myFavouritesList.splice(myFavouriteObj, 1);
  }
  renderFavouritesList();
}


searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const userSearch = searchInput.value.toLowerCase();
  filteredCharacters = myCharactersList.filter((character) => character.name.toLowerCase().includes(userSearch)
  );
  renderFilteredCharacters ();
});


//----CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA----//

renderCharactersList();

fetch('https://breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((jsonData) => {
    myCharactersList = jsonData;
    renderCharactersList();
  });
