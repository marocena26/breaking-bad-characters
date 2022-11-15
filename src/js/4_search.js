'use strict';

//--------------------FUNCIONES--------------------//

//Funcion pintar busqueda

function renderFilteredCharacters () {
  charactersList.innerHTML = '';

  for (let i = 0; i < filteredCharacters.length; i++) { 
    charactersList.appendChild(renderCharacter(filteredCharacters[i]));
  }
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