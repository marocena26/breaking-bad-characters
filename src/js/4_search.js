'use strict';

//--------------------FUNCIONES--------------------//

//Funcion pintar busqueda

function renderFilteredCharacters () {
  let liElement = '';

  for (let i = 0; i < filteredCharacters.length; i++) { 
    liElement += renderCharacter(filteredCharacters[i]);
  }

  charactersList.innerHTML = liElement;
  addListenerCharacters();
}

//---------------------EVENTOS---------------------//

//Evento para buscar nombre del personaje.

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const userSearch = searchInput.value.toLowerCase();
  filteredCharacters = myCharactersList.filter((character) => character.name.toLowerCase().includes(userSearch)
  );
  renderFilteredCharacters ();
});