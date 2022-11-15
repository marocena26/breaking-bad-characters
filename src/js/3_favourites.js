/* eslint-disable no-undef */
'use strict';

//--------------------FUNCIONES--------------------//

//Función para pintar cada UNO de los elementos FAVORITOS: cada personaje con su correspondiente foto, nombre y estado.

function favouriteRender(character) {
  const myFavouriteObj = myFavouritesList.findIndex((eachCharacter) =>  eachCharacter.char_id === parseInt(character.char_id));

  const liElement = document.createElement('li');
  liElement.classList.add('characters__list_item');

  const articleElement = document.createElement('article');
  articleElement.classList.add('js__favourites_article');
  articleElement.classList.add('characters__article');
  articleElement.classList.add('characters__favourites');
  articleElement.classList.add('remove');

  if(myFavouriteObj !== -1){
    articleElement.classList.add('selected');
  }

  articleElement.setAttribute('id',character.char_id);

  const divElement = document.createElement('div');
  divElement.classList.add('js__remove_crox');
  divElement.classList.add('characters__favourites--crox');
  const croxElement = document.createTextNode('X');
  divElement.appendChild(croxElement);

  const imgElement = document.createElement('img');
  imgElement.classList.add('characters__article--img');
  imgElement.classList.add('characters__favourites--img');
  imgElement.setAttribute('src', character.img);
  imgElement.setAttribute('alt', character.name);

  const h2NameElement = document.createElement('h2');
  h2NameElement.classList.add('characters__article--name');
  h2NameElement.classList.add('characters__favourites--name');
  const nameElement = document.createTextNode(character.name);
  h2NameElement.appendChild(nameElement);

  const statusElements= document.createElement('p');
  statusElements.classList.add('characters__article--status');
  statusElements.classList.add('characters__favourites--status');
  const statusElement = document.createTextNode(character.status);
  statusElements.appendChild(statusElement);

  articleElement.appendChild(divElement);
  articleElement.appendChild(imgElement);
  articleElement.appendChild(h2NameElement);
  articleElement.appendChild(statusElements);
  liElement.appendChild(articleElement);
  return liElement;
}

//Función que pinte los favoritos en pantalla.

function renderFavouritesList () {
  favouritesList.innerHTML = '';

  for (let i = 0; i < myFavouritesList.length; i++) {
    favouritesList.appendChild(favouriteRender(myFavouritesList[i]));
  }
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

  renderCharactersList();
}

//Función para asignar un evento listener a todos los elementos favoritos de mi página.

function addListenerFavourites() {
  const charactersArticle = document.querySelectorAll('.js__favourites_article');

  for (const eachCharactersArticle of charactersArticle) { 
    eachCharactersArticle.addEventListener('click', handleFavoritesClick);
  }
}