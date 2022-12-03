'use strict';

//--------------------FUNCIONES--------------------//

//Función para pintar cada UNO de los elementos: cada personaje con su correspondiente foto, nombre y estado.

function renderCharacter(character) {
  const myFavouriteObj = myFavouritesList.findIndex((eachCharacter) =>  eachCharacter.char_id === parseInt(character.char_id));

  const liElement = document.createElement('li');
  liElement.classList.add('characters__list_item');

  const articleElement = document.createElement('article');
  articleElement.classList.add('js__characters_article');
  articleElement.classList.add('characters__article');
  articleElement.classList.add('characters__favourites');
  articleElement.classList.add('remove');

  if(myFavouriteObj !== -1){
    articleElement.classList.add('selected');
  }

  articleElement.setAttribute('id',character.char_id);

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

  articleElement.appendChild(imgElement);
  articleElement.appendChild(h2NameElement);
  articleElement.appendChild(statusElements);
  liElement.appendChild(articleElement);
  return liElement;
}

//Función para que pinte todos los elementos del array.
function renderCharactersList () {
  charactersList.innerHTML = '';

  for (let i = 0; i < myCharactersList.length; i++) {
    charactersList.appendChild(renderCharacter(myCharactersList[i]));
  }
  addListenerCharacters();
}

//Función para asignar un evento listener a todos los elementos de mi página.
function addListenerCharacters() {
  const charactersArticle = document.querySelectorAll('.js__characters_article');

  for (const eachCharactersArticle of charactersArticle) { 
    eachCharactersArticle.addEventListener('click', handleCharactersClic);
  }
}

