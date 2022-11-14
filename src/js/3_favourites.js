/* eslint-disable no-undef */
'use strict';

//--------------------FUNCIONES--------------------//


//Función que pinte los favoritos en pantalla.

function renderFavouritesList () {
  let liElement = '';

  for (let i = 0; i < myFavouritesList.length; i++) { 
    liElement += favouriteRender(myFavouritesList[i]);
  }

  favouritesList.innerHTML = liElement;
  addListenerFavourites();

}

//Función manejadora: hago click en un personaje para seleccionar un favorito.

function handleCharactersClic(event) {
  event.currentTarget.classList.toggle('selected');
  
  const selectFavouriteObj = myCharactersList.find(
    (eachCharacter) =>  eachCharacter.char_id === parseInt(event.currentTarget.id));
  
  const myFavouriteObj = myFavouritesList.findIndex(
    (eachCharacter) =>  eachCharacter.char_id === parseInt(event.currentTarget.id));

  if (myFavouriteObj === -1) {
    myFavouritesList.push(selectFavouriteObj);
  } else {
    myFavouritesList.splice(myFavouriteObj, 1);
  }

  localStorage.setItem('myFavouritesList', JSON.stringify(myFavouritesList));

  if (myFavouritesList.length > 0){
    sectionFavourites.classList.remove('hidden');
    renderFavouritesList();
  } else {
    sectionFavourites.classList.add('hidden');
  }

}

//Función manejadora: hago click en un favorito para deseleccionarlo.


function handleFavoritesClick(event) {
  event.currentTarget.classList.toggle('selected');//coger el parent.element. Tdoso los current
  
  const selectFavouriteObj = myCharactersList.find(
    (eachCharacter) =>  eachCharacter.char_id === parseInt(event.currentTarget.id));//poner parent.element
  
  const myFavouriteObj = myFavouritesList.findIndex(
    (eachCharacter) =>  eachCharacter.char_id === parseInt(event.currentTarget.id)); //poner parent.element

  if (myFavouriteObj === -1) {
    myFavouritesList.push(selectFavouriteObj);
  } else {
    myFavouritesList.splice(myFavouriteObj, 1);
  }

  localStorage.setItem('myFavouritesList', JSON.stringify(myFavouritesList));

  if (myFavouritesList.length > 0){
    sectionFavourites.classList.remove('hidden');
    renderFavouritesList();
  } else {
    sectionFavourites.classList.add('hidden');
  }

  renderCharactersList();
}

//Función para asignar un evento listener a todos los elementos favoritos de mi página.

function addListenerFavourites() {
  const charactersArticle = document.querySelectorAll('.js__favourites_article');//añadir a pepito

  for (const eachCharactersArticle of charactersArticle) { 
    eachCharactersArticle.addEventListener('click', handleFavoritesClick);
  }
}