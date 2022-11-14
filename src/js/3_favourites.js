'use strict';

//--------------------FUNCIONES--------------------//

//Función que pinte los favoritos en pantalla.

function renderFavouritesList () {
  let liElement = '';

  for (let i = 0; i < myFavouritesList.length; i++) { 
    liElement += renderCharacter(myFavouritesList[i]);
  }

  favouritesList.innerHTML = liElement;
}

//Función manejadora: hago click para seleccionar un favorito.

function handleClickFavourites(event) {
  event.currentTarget.classList.toggle('selected');
  const selectFavouriteObj = myCharactersList.find((eachCharacter) =>  eachCharacter.char_id === parseInt(event.currentTarget.id));
  const myFavouriteObj = myFavouritesList.findIndex((eachCharacter) =>  eachCharacter.char_id === parseInt(event.currentTarget.id));

  if (myFavouriteObj === -1) {
    myFavouritesList.push(selectFavouriteObj);
  } else {
    myFavouritesList.splice(myFavouriteObj, 1);
  }

  localStorage.setItem('myFavouritesList', JSON.stringify(myFavouritesList));

  if (myFavouritesList.length > 0){
    sectionFavourites.classList.remove('hidden');
    renderCharactersList();
  } else {
    sectionFavourites.classList.add('hidden');
  }

  renderFavouritesList();
}