'use strict';

//--------------------FUNCIONES--------------------//

//Función para pintar cada UNO de los elementos: cada personaje con su correspondiente foto, nombre y estado.

function renderCharacter(character) {
  const myFavouriteObj = myFavouritesList.findIndex((eachCharacter) =>  eachCharacter.char_id === parseInt(character.char_id));

  let signFavourites = '';

  if(myFavouriteObj === -1){
    signFavourites = '';
  } else {
    signFavourites = 'selected';
  }

  let liElement =

    `<li>
    <article class="js__characters_article ${signFavourites} characters__article characters__favourites remove" id="${character.char_id}"> 
        <img src="${character.img}" alt="" class="characters__article--img characters__favourites--img">
        <h3 class="characters__article--name characters__favourites--name">${character.name}</h3>
        <p class="characters__article--status characters__favourites--status">${character.status}</p>
    </article>
    </li>`;

  return liElement;
}

//Función render para favoritos

function favouriteRender(character) {
  const myFavouriteObj = myFavouritesList.findIndex((eachCharacter) =>  eachCharacter.char_id === parseInt(character.char_id));

  let signFavourites = '';

  if(myFavouriteObj === -1){
    signFavourites = '';
  } else {
    signFavourites = 'selected';
  }

  let liElement =

    `<li>
    
    <article class="js__favourites_article ${signFavourites} characters__article characters__favourites remove" id="${character.char_id}">
        <div class="js__remove_crox characters__favourites--crox">X</div>
        <img src="${character.img}" alt="" class="characters__article--img characters__favourites--img">
        <h3 class="characters__article--name characters__favourites--name">${character.name}</h3>
        <p class="characters__article--status characters__favourites--status">${character.status}</p>
    </article>
    </li>`;

  return liElement;
}
//a pepito le añado los eventos en vez de al articulo.


//Función para que pinte todos los elementos del array.
function renderCharactersList () {
  let liElement = '';

  for (let i = 0; i < myCharactersList.length; i++) {
    liElement += renderCharacter(myCharactersList[i]);
  }

  charactersList.innerHTML = liElement;
  addListenerCharacters();

}

//Función para asignar un evento listener a todos los elementos de mi página.
function addListenerCharacters() {
  const charactersArticle = document.querySelectorAll('.js__characters_article');

  for (const eachCharactersArticle of charactersArticle) { 
    eachCharactersArticle.addEventListener('click', handleCharactersClic);
  }
}

