"use strict";

//----CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA----//

renderCharactersList();

fetch("./assets/data/characters.json")
  .then((response) => response.json())
  .then((jsonData) => {
    myCharactersList = jsonData;
    localStorageInformation(favouritesListLS, "myFavouritesList");
    renderCharactersList();
  });

const favouritesListLS = JSON.parse(localStorage.getItem("myFavouritesList"));

if (favouritesListLS !== null) {
  myFavouritesList = favouritesListLS;
  sectionFavourites.classList.remove("hidden");
  renderFavouritesList();
}
