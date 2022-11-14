'use strict';

//--------------------FUNCIONES--------------------//

//Función para borrar un solo personaje.



//Botón de reset

function resetBtnClick(event) {
  event.preventDefault();
  myFavouritesList = [];
  sectionFavourites.classList.add('hidden');
  localStorage.removeItem('myFavouritesList');
  renderCharactersList();
}

//--------------------EVENTOS--------------------//

resetBtn.addEventListener('click', resetBtnClick);