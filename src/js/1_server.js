'use strict';

//----CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA----//

renderCharactersList();

fetch('https://breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((jsonData) => {
    myCharactersList = jsonData;
    localStorageInformation(favouritesListLS,'myFavouritesList');
    renderCharactersList();
  });

if (favouritesListLS !== null) {
  myFavouritesList = favouritesListLS;
  renderFavouritesList ();
}

